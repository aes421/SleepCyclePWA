import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstallPromptService {

  canInstall$ = new BehaviorSubject<boolean>(false);
  nativeInstaller: any;

  IOS: boolean = /iPad|iPhone|iPod/.test(navigator.platform);

  constructor() { }

  canInstall() {
    // this is a non standardized use of navigator as it's only availaible on ios and there's no typescript binding
    // tslint:disable-next-line: no-string-literal
    if (this.IOS && !(window.navigator['standalone'])) {
      this.canInstall$.next(true);
    }
    else {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        this.nativeInstaller = event;
        this.canInstall$.next(true);
      });
    }
  }
}

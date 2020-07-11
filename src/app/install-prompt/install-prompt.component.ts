import { Component, OnInit, } from '@angular/core';
import { InstallPromptService } from './install-prompt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-install-prompt',
  templateUrl: './install-prompt.component.html',
  styleUrls: ['./install-prompt.component.scss']
})
export class InstallPromptComponent implements OnInit {

  constructor(public installer: InstallPromptService, private router: Router) { }

  ngOnInit() {
    if (this.installer.nativeInstaller) {
      this.installer.nativeInstaller.prompt();
      this.router.navigate(['']);
    }
  }
}

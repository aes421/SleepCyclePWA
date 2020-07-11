import { Component } from '@angular/core';
import { InstallPromptService } from './install-prompt/install-prompt.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public installer: InstallPromptService) {
  }
}

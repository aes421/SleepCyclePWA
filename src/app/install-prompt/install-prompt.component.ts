import { Component, } from '@angular/core';
import { InstallPromptService } from './install-prompt.service';

@Component({
  selector: 'app-install-prompt',
  templateUrl: './install-prompt.component.html',
  styleUrls: ['./install-prompt.component.scss']
})
export class InstallPromptComponent {

  constructor(public installer: InstallPromptService) {

  }
}

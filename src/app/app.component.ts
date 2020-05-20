import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hours = Array.from({ length: 12 }, (v, k) => String(k + 1).padStart(2, '0'));
  minutes = Array.from({ length: (60 / 5) }, (v, k) => String(k * 5).padStart(2, '0'));
  periods = ['AM', 'PM'];
}

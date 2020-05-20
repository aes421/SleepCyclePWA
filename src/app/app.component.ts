import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SleepCycleCalculatorService } from './sleep-cycle-calculator.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hours = Array.from({ length: 12 }, (v, k) => String(k + 1).padStart(2, '0'));
  minutes = Array.from({ length: (60 / 5) }, (v, k) => String(k * 5).padStart(2, '0'));
  periods = ['AM', 'PM'];

  form = new FormGroup({
    hour: new FormControl('hour'),
    minute: new FormControl('minute'),
    period: new FormControl(this.periods[0])
  });

  suggestedTimes: moment.Moment[] = [];

  constructor(private calculator: SleepCycleCalculatorService) { }

  ngOnInit() {
    this.form.valueChanges.subscribe(_ => this.suggestedTimes = []);
  }

  calculate() {
    this.suggestedTimes = this.calculator.calculateBedtime(moment(
      `${this.form.get('hour').value}-
      ${this.form.get('minute').value}-
      ${this.form.get('period').value}`, 'hh:mm a'
    ));

    console.log(this.suggestedTimes);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SleepCycleCalculatorService } from '../sleep-cycle-calculator.service';
import * as moment from 'moment';
import { Suggestion } from 'src/models/suggestion';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  hours = Array.from({ length: 12 }, (v, k) => String(k + 1).padStart(2, '0'));
  minutes = Array.from({ length: (60 / 5) }, (v, k) => String(k * 5).padStart(2, '0'));
  periods = ['AM', 'PM'];

  form = new FormGroup({
    hour: new FormControl('06'),
    minute: new FormControl('00'),
    period: new FormControl(this.periods[0])
  });

  suggestions: Suggestion[] = [];

  constructor(private calculator: SleepCycleCalculatorService) { }

  ngOnInit() {
    this.form.valueChanges.subscribe(_ => this.suggestions = []);
  }

  calculate() {
    this.suggestions = this.calculator.calculateBedtime(moment(
      `${this.form.get('hour').value}-
      ${this.form.get('minute').value}-
      ${this.form.get('period').value}`, 'hh:mm a'
    ));
  }

}

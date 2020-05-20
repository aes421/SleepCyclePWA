import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SleepCycleCalculatorService {

  constructor() { }

  calculateBedtime(targetTime: moment.Moment): moment.Moment[] {
    return Array.from({ length: 3 }, (v, k) => targetTime.clone().subtract(90 * (6 - k), 'minutes'));
  }
}

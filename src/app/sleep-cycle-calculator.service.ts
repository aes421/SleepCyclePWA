import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Suggestion } from 'src/models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SleepCycleCalculatorService {

  constructor() { }

  calculateBedtime(targetTime: moment.Moment): Suggestion[] {
    return Array.from({ length: 3 }, (v, k) => {
      const bedtime = targetTime.clone().subtract(90 * (6 - k), 'minutes');
      return {
        moment: bedtime, elapsed: targetTime.diff(bedtime, 'hours', true)
      }
    });
  }
}

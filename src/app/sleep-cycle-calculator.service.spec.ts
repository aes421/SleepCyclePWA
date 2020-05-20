import { TestBed } from '@angular/core/testing';

import { SleepCycleCalculatorService } from './sleep-cycle-calculator.service';
import * as moment from 'moment';

describe('SleepCycleCalculatorService', () => {
  let service: SleepCycleCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SleepCycleCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate bedtime for times on the hour', () => {
    expect(JSON.stringify(
      service.calculateBedtime(moment('06:00 AM', 'hh:mm a'))))
      .toBe(JSON.stringify([
        moment('09:00 PM', 'hh:mm a').subtract(1, 'day'),
        moment('10:30 PM', 'hh:mm a').subtract(1, 'day'),
        moment('12:00 AM', 'hh:mm a')]));
  });

  it('should calculate bedtime for times with minutes', () => {
    expect(JSON.stringify(
      service.calculateBedtime(moment('06:15 AM', 'hh:mm a'))))
      .toBe(JSON.stringify([
        moment('09:15 PM', 'hh:mm a').subtract(1, 'day'),
        moment('10:45 PM', 'hh:mm a').subtract(1, 'day'),
        moment('12:15 AM', 'hh:mm a')]));
  });

  it('should calculate bedtime without day change', () => {
    expect(JSON.stringify(
      service.calculateBedtime(moment('11:15 PM', 'hh:mm a'))))
      .toBe(JSON.stringify([
        moment('02:15 PM', 'hh:mm a'),
        moment('03:45 PM', 'hh:mm a'),
        moment('05:15 PM', 'hh:mm a')]));
  });
});

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
    const result = service.calculateBedtime(moment('06:00 AM', 'hh:mm a'));

    expect(result[0].moment.format()).toEqual(moment('09:00 PM', 'hh:mm a').subtract(1, 'day').format());
    expect(result[1].moment.format()).toEqual(moment('10:30 PM', 'hh:mm a').subtract(1, 'day').format());
    expect(result[2].moment.format()).toEqual(moment('12:00 AM', 'hh:mm a').format());
  });

  it('should calculate bedtime for times with minutes', () => {
    const result = service.calculateBedtime(moment('06:15 AM', 'hh:mm a'));

    expect(result[0].moment.format()).toEqual(moment('09:15 PM', 'hh:mm a').subtract(1, 'day').format());
    expect(result[1].moment.format()).toEqual(moment('10:45 PM', 'hh:mm a').subtract(1, 'day').format());
    expect(result[2].moment.format()).toEqual(moment('12:15 AM', 'hh:mm a').format());
  });

  it('should calculate bedtime without day change', () => {
    const result = service.calculateBedtime(moment('11:15 PM', 'hh:mm a'));

    expect(result[0].moment.format()).toEqual(moment('02:15 PM', 'hh:mm a').format());
    expect(result[1].moment.format()).toEqual(moment('03:45 PM', 'hh:mm a').format());
    expect(result[2].moment.format()).toEqual(moment('05:15 PM', 'hh:mm a').format());
  });

  it('should calculate duration slept', () => {
    const result = service.calculateBedtime(moment('11:15 PM', 'hh:mm a'));

    expect(result[0].elapsed).toEqual(9);
    expect(result[1].elapsed).toEqual(7.5);
    expect(result[2].elapsed).toEqual(6);
  });

});

import * as moment from 'moment';

export interface Suggestion {
    moment: moment.Moment;
    elapsed: number;
}

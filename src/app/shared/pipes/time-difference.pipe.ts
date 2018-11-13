import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'timeDifference'})
export class TimeDifferencePipe implements PipeTransform {
  transform(value: string): string {
    const postedMoment = moment(value);
    const difference = moment.duration(moment().diff(postedMoment));
    const days = difference.asDays();
    if (days < 1) {
      return `${Math.round(difference.asHours())} hour(s)`;
    }
    return `${Math.round(days)} day(s)`;
  }
}

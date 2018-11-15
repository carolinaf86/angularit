import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'timeDifference'})
export class TimeDifferencePipe implements PipeTransform {

  transform(value: string): string {

    const postedMoment = moment(value);
    const difference = moment.duration(moment().diff(postedMoment));
    const days = difference.asDays();

    if (days < 1) {

      if (difference.asHours() < 1) {

        if (difference.asMinutes() < 1 ) {
          return 'a moment';
        }

        const roundedMinutes = Math.round(difference.asMinutes());
        return roundedMinutes === 1
          ? 'a minute'
          : `${roundedMinutes} minutes`;
      }

      const roundedHours = Math.round(difference.asHours());
      return roundedHours === 1
        ? 'an hour'
        : `${roundedHours} hours`;
    }

    const roundedDays = Math.round(days);

    return roundedDays === 1 ? 'a day' : `${roundedDays} days`;
  }
}

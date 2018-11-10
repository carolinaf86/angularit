import {Component, Input} from '@angular/core';
import {Thread} from '../../shared/sdk/models/Thread';
import * as moment from 'moment';

@Component({
  selector: 'app-thread-list-item',
  templateUrl: 'thread-list-item.component.html',
  styleUrls: ['thread-list-item.component.scss']
})
export class ThreadListItemComponent {
  @Input() thread: Thread;
  constructor() {
    // TODO remove static
    this.thread = {
      user_id: 1,
      user_name: 'User123',
      timestamp: '2018-11-08 16:43:09'
    };
  }
  getTimeDifferenceString(): string {
    const postedMoment = moment(this.thread.timestamp);
    const difference = moment.duration(moment().diff(postedMoment));
    const days = difference.asDays();
    if (days < 1) {
      return `Posted ${Math.round(difference.asHours())} hours ago.`;
    }
    return `Posted ${Math.round(days)} days ago.`;
  }
}



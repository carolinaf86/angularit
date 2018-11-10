import {Component, Input} from '@angular/core';
import {Thread} from '../../shared/sdk/models/Thread';

@Component({
  selector: 'app-thread-list-item',
  templateUrl: 'thread-list-item.component.html',
  styleUrls: ['thread-list-item.component.scss']
})
export class ThreadListItemComponent {
  @Input() model: Thread;
  constructor() {
    // TODO remove static
    this.model = {
      user_id: 1,
      user_name: 'User123',
      timestamp: '2018-11-08 16:43:09'
    };
  }
}



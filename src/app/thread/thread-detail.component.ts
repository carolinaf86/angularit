import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';

@Component({
  selector: 'app-thread-detail',
  templateUrl: 'thread-detail.component.html',
  styleUrls: ['thread-detail.component.scss']
})
export class ThreadDetailComponent implements OnInit {
  model: Thread;
  constructor() { }
  ngOnInit(): void {
    // TODO get from route
    this.model = {
      user_id: 1,
      user_name: 'User123',
      timestamp: '2018-11-08 16:43:09',
      thread_title: 'I know something super cool!'
    };
  }
}

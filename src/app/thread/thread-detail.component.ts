import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';

@Component({
  selector: 'app-thread-detail',
  templateUrl: 'thread-detail.component.html',
  styleUrls: ['thread-detail.component.scss']
})
export class ThreadDetailComponent implements OnInit {
  model: Thread;

  constructor() {
  }

  ngOnInit(): void {
    // TODO get from route
    this.model = {
      user_id: 1,
      user_name: 'User123',
      timestamp: '2018-11-08 16:43:09',
      thread_title: 'I know something super cool!',
      thread_body: 'LAAAAAAAAAAAAAAAAAAAAa laa dddddddddddddddd jdjhd jdksjdklsa  jskadjskal djs a',
      comments: [
        {
          comment_id: 4,
          user_id: 5,
          user_name: 'Caroline2',
          comment_body: 'This is an updated test Comment Body which has an upper limit of 8,000 characters.',
          upvotes: 2,
          downvotes: 1,
          timestamp: '2018-11-08 16:44:28'
        }
      ]
    }
    ;
  }
}

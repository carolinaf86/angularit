import { Component, OnInit } from '@angular/core';
import {User} from '../shared/sdk/models/User';
import {Thread} from '../shared/sdk/models/Thread';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  model: User;
  threads: Thread[];
  constructor() {
  }
  ngOnInit() {
    // TODO get from resolver
    this.model = {
      user_id: 4,
      user_name: 'Caroline',
      registration_timestamp: '2018-11-08 16:22:20',
      upvotes: 0,
      downvotes: 0,
      post_upvotes: 0,
      post_downvotes: 0,
      comment_upvotes: 0,
      comment_downvotes: 0
    };
    this.threads = [
      {
        user_id: 1,
        user_name: 'User123',
        timestamp: '2018-11-08 16:43:09'
      }
    ];
  }

}

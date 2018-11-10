import { Component, OnInit } from '@angular/core';
import {User} from '../shared/sdk/models/User';
import {Comment} from '../shared/sdk/models/Comment';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  model: User;
  comments: Comment[];
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
    this.comments = [
      {
        comment_id: 4,
        user_id: 5,
        user_name: 'Caroline2',
        comment_body: 'This is an updated test Comment Body which has an upper limit of 8,000 characters.',
        upvotes: 2,
        downvotes: 1,
        timestamp: '2018-11-08 16:44:28'
      }
    ];
  }

}

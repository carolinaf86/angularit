import { Component, OnInit } from '@angular/core';
import {User} from '../shared/sdk/models/User';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
import {Comment} from '../shared/sdk/models/Comment';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  model: User;
  threads: Thread[];
  comments: Comment[];
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute, private loggedService: AuthService) {
  }

  ngOnInit() {

    this.route.data.subscribe((data: {user: User, threads: Thread[], comments: Comment[]}) => {
      this.model = data.user;
      this.threads = data.threads.sort((a, b) => {
        return (a.upvotes - a.downvotes) < (b.upvotes - b.downvotes);
      });
      this.comments = data.comments.sort((a, b) => {
        return (a.upvotes - a.downvotes) < (b.upvotes - b.downvotes);
      });
    });
    this.isLoggedIn = this.loggedService.isLoggedIn();

  }

}

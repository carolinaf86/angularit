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

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit() {

    this.route.data.subscribe((data: {user: User, threads: Thread[], comments: Comment[]}) => {
      this.model = data.user;
      this.threads = data.threads.sort(this.sortByVotes);
      this.comments = data.comments.sort(this.sortByVotes);
    });

    this.isLoggedIn = this.authService.isAuthenticated();
  }

  private sortByVotes(a: Thread | Comment, b: Thread | Comment): number {
    return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes);
  }
}

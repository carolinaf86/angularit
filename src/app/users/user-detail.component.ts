import { Component, OnInit } from '@angular/core';
import {User} from '../shared/sdk/models/User';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute} from '@angular/router';
import {LoggedService} from '../shared/services/logged.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  model: User;
  threads: Thread[];
  loggedUserId: string;

  constructor(private route: ActivatedRoute, private loggedService: LoggedService) {
  }

  ngOnInit() {

    this.route.data.subscribe((data: {user: User, threads: Thread[]}) => {
      this.model = data.user;
      this.threads = data.threads;
    });
    this.loggedUserId = this.loggedService.getLoggedUserId();
    console.log('Logged in', this.loggedUserId);

  }

}

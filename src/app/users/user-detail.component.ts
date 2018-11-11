import { Component, OnInit } from '@angular/core';
import {User} from '../shared/sdk/models/User';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  model: User;
  threads: Thread[];
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {

    this.route.data.subscribe((data: {user: User, threads: Thread[]}) => {
      this.model = data.user;
      this.threads = data.threads;
    });

  }

}

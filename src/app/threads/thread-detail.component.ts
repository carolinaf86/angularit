import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute} from '@angular/router';
import {LoggedService} from '../shared/services/logged.service';

@Component({
  selector: 'app-thread-detail',
  templateUrl: 'thread-detail.component.html',
  styleUrls: ['thread-detail.component.scss']
})
export class ThreadDetailComponent implements OnInit {

  model: Thread;
  loggedUserId: string;

  constructor(private route: ActivatedRoute, private loggedService: LoggedService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: {thread: Thread}) => {
      this.model = data.thread;
    });
    this.loggedUserId = this.loggedService.getLoggedUserId();
    console.log('Logged in', this.loggedUserId);
  }
}

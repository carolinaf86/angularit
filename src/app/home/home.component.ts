import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  threads: Thread[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // TODO dynamic data from route
    this.threads = [
      {
        user_id: 1,
        user_name: 'User123',
        timestamp: '2018-11-08 16:43:09'
      },
      {
        user_id: 1,
        user_name: 'User123',
        timestamp: '2018-11-08 16:43:09'
      },
      {
        user_id: 1,
        user_name: 'User123',
        timestamp: '2018-11-08 16:43:09'
      },
      {
        user_id: 1,
        user_name: 'User123',
        timestamp: '2018-11-08 16:43:09'
      },
      {
        user_id: 1,
        user_name: 'User123',
        timestamp: '2018-11-08 16:43:09'
      },
      {
        user_id: 1,
        user_name: 'User123',
        timestamp: '2018-11-08 16:43:09'
      },
      {
        user_id: 1,
        user_name: 'User123',
        timestamp: '2018-11-08 16:43:09'
      }
    ];
  }


}

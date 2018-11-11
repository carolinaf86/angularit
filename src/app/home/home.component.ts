import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute} from '@angular/router';
import {LoggedService} from '../shared/services/logged.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  threads: Thread[];
  loggedIn: boolean;

  constructor(private route: ActivatedRoute, private loggedService: LoggedService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: {threads: Thread[]}) => {
      this.threads = data.threads;
    });
    this.loggedIn = !!this.loggedService.getAuthToken();
    console.log('Logged in', this.loggedIn);
  }


}

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
    this.route.data.subscribe((data: {threads: Thread[]}) => {
      this.threads = data.threads;
    });
  }


}

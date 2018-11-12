import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  threads: Thread[];
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute, private loggedService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: {threads: Thread[]}) => {
      this.threads = data.threads;
    });
    this.isLoggedIn = this.loggedService.isLoggedIn();
    console.log('Logged in', this.isLoggedIn);
  }

  onLoggedOut() {
    this.isLoggedIn = false;
  }

  onAdd() {
    this.router.navigate(['threads', 'add']);
  }

}

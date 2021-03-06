import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
import {NotificationService} from '../shared/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  threads: Thread[];
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: {threads: Thread[]}) => {
      this.threads = data.threads;
    }, err => {
      this.notificationService.notifyError(err, `Oops! We're having problems loading new posts right now.`);
      this.threads = [];
    });
    this.isLoggedIn = this.authService.isAuthenticated();
  }

}

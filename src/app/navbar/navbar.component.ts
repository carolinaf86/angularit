import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {NotificationService} from '../shared/services/notification.service';
import {UserService} from '../shared/sdk/services/user.service';
import {User} from '../shared/sdk/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = false;
  userId: string;
  username: string;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {

    this.authService.getAuthenticatedUser();
    this.userId = this.authService.getAuthenticatedUserId();

    if (!this.userId) { return; }

    this.userService.getUserById(this.userId)
      .subscribe((result: User) => {

        this.username = result.user_name;

      }, err => this.notificationService.notifyError(err));

  }

  logout() {
    this.authService.clearAuthenticatedUser();
    this.userId = null;
    this.notificationService.notifySuccess(`You've been logged out.`);
    this.router.navigate(['/login']);
  }

  onAdd() {
    if (!this.userId) { this.notificationService.notifySuccess('You need to log in to create a post!'); }
    const commands = this.userId ? ['threads', 'add'] : ['login'];
    this.router.navigate(commands);
  }
}

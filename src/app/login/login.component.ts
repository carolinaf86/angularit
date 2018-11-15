import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/sdk/services/user.service';
import {AuthToken, Credentials} from '../shared/sdk/models/Auth';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  model = new Credentials();
  form = new FormGroup({});

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        placeholder: 'Email',
        required: true,
      },
      validators: {
        validation: [Validators.email],
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        placeholder: 'Password',
        required: true
      }
    }
  ];

  private readonly returnUrl: string;

  constructor(private userService: UserService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private notificationService: NotificationService) {
    // TODO get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submit(data) {

    const { form, userService, notificationService, authService, router, returnUrl } = this;

    if (form.invalid) { return; }

    userService.login(data)
      .subscribe((result: AuthToken) => {
          // Check if user has been found
          if (!result.auth_token) {
            notificationService.notifyError(null, `Oops! We didn't find a user with that email and password.`);
          } else {
            notificationService.notifySuccess('Logged in successfully.');
            authService.setAuthenticatedUser(result);
            router.navigateByUrl(returnUrl);
          }
        },
        err => {
          notificationService.notifyError(err, 'Failed to log in. Please try again later.');
        });

  }

}

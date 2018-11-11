import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/sdk/models/User';
import {UserService} from '../shared/sdk/services/user.service';
import {LoggedService} from '../shared/services/logged.service';
import {AuthToken} from '../shared/sdk/models/Auth';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent {
  model = new User();
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'user_name',
      type: 'input',
      templateOptions: {
        placeholder: 'Username',
        required: true
      }
    },
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
  private returnUrl: string;

  constructor(private userService: UserService, private loggedService: LoggedService, private route: ActivatedRoute,
              private router: Router) {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submit(data) {
    this.userService.register(data)
      .subscribe((result: AuthToken) => {
        // TODO notify success
        if (!result.auth_token) {
          // TODO handle error
        } else {
          this.loggedService.setLoggedUser(result);
          this.router.navigateByUrl(this.returnUrl);
        }
      },
        err => {
        // TODO handle error
        });
  }

}

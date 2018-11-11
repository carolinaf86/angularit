import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/sdk/services/user.service';
import {AuthToken, Credentials} from '../shared/sdk/models/Auth';
import {LoggedService} from '../shared/services/logged.service';

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

  constructor(private userService: UserService, private loggedService: LoggedService) { }

  submit(data) {
    this.userService.login(data)
      .subscribe((result: AuthToken) => {
        // Check if user has been found
        if (!result.auth_token) {
          // TODO deal with error
        } else {
          this.loggedService.setLoggedUser(result);
        }
      });
  }

}

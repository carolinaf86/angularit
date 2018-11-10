import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../sdk/models/User';
import {Observable} from 'rxjs';
import {UserService} from '../sdk/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailResolver implements Resolve<User> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Observable<never> {
    const id = route.params['id'];
    return this.userService.getUserById(id);
  }
}

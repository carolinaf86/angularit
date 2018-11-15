import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../sdk/services/user.service';
import {Thread} from '../sdk/models/Thread';

@Injectable({
  providedIn: 'root'
})
export class UserThreadsResolverService implements Resolve<Thread[]> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Thread[]> | Observable<never> {
    const id = route.params['id'];
    return this.userService.getUserThreadHistoryById(id);
  }
}

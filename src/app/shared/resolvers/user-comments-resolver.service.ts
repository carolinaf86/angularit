import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../sdk/services/user.service';
import {Thread} from '../sdk/models/Thread';
import {Comment} from '../sdk/models/Comment';

@Injectable({
  providedIn: 'root'
})
export class UserCommentsResolverService implements Resolve<Comment[]> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Observable<never> {
    const id = route.params['id'];
    return this.userService.getUserCommentHistoryById(id);
  }
}

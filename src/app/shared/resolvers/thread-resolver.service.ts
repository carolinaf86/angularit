import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Thread} from '../sdk/models/Thread';
import {ThreadService} from '../sdk/services/thread.service';

@Injectable({
  providedIn: 'root'
})
export class ThreadResolverService implements Resolve<Thread> {

  constructor(private threadService: ThreadService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Thread> | Observable<never> {
    const id = route.params['id'];
    return this.threadService.getThreadById(id);
  }
}

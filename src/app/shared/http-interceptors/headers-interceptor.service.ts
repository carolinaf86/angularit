import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoggedService} from '../services/logged.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private loggedService: LoggedService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const authToken = this.loggedService.getAuthToken();
    if (authToken) {
      req = req.clone({
        setHeaders: {
          'auth_token': authToken,
          'id': this.loggedService.getLoggedUserId()
        }
      });
    }
    // TODO add auth token from local storage
    return next.handle(req);
  }
}

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private loggedService: AuthService) { }

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
    return next.handle(req);
  }
}

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const authToken = this.authService.getAuthToken();

    if (authToken) {
      // set auth header
      req = req.clone({
        setHeaders: {
          'auth_token': authToken,
          'id': this.authService.getAuthenticatedUserId()
        }
      });
    }

    return next.handle(req);
  }
}

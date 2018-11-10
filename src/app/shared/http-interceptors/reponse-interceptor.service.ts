import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        map(event => {
          if (event instanceof HttpResponse) {
            console.log('Intercepted', event.body);
            const body = event.body as string;
            const idx = body.indexOf('{');
            event = event.clone({ body: body.substring(idx) });
          }
          return event;
        })
      );
  }
}

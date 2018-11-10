import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HeadersInterceptor} from './headers-interceptor.service';
import {ResponseInterceptor} from './reponse-interceptor.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
];

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User, UserInterface} from '../models/User';
import {Thread, ThreadInterface} from '../models/Thread';
import {CommentInterface} from '../models/Comment';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ErrorService} from './error.service';

@Injectable()
export class ThreadService {

  baseUrl = 'https://cb37942.whatsalon.com/api';
  resourceName = 'Thread';

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  url(pathSegments: string[], queryParams?: string): string {
    pathSegments.unshift(this.baseUrl);
    let path = pathSegments.join('/');
    if (queryParams) { path += `?${queryParams}`; }
    return path;
  }

  getThreads(): Observable<Thread[]> {
    const url = this.url([this.resourceName, 'get']);
    return this.http.get<Thread[]>(url)
      .pipe(
        map(res => res['message']),
        catchError(this.errorService.handleError)
      );
  }

  getThreadById(id: number): Observable<Thread> {
    const url = this.url([this.resourceName, 'get'], `thread_id=${id}`);
    return this.http.get<Thread>(url)
      .pipe(
        map(res => res['message']),
        catchError(this.errorService.handleError)
      );
  }

  upvote(id: number): Observable<Thread> {
    const url = this.url([this.resourceName, 'upvote'], `thread_id=${id}`);
    return this.http.get<Thread>(url)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }

  downvote(id: number): Observable<Thread> {
    const url = this.url([this.resourceName, 'downvote'], `thread_id=${id}`);
    return this.http.get<Thread>(url)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }

}

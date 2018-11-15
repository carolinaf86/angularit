import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Thread} from '../models/Thread';
import {Comment} from '../models/Comment';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ErrorService} from './error.service';
import {AuthToken} from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://cb37942.whatsalon.com/api';
  resourceName = 'Account';

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  url(pathSegments: string[], queryParams?: string): string {
    pathSegments.unshift(this.baseUrl);
    let path = pathSegments.join('/');
    if (queryParams) { path += `?${queryParams}`; }
    return path;
  }

  getUserById(id: string): Observable<User> {
    const url = this.url([this.resourceName, 'get_user_profile'], `user_id=${id}`);
    return this.http.get<User>(url)
      .pipe(
        map(res => res['message']),
        catchError(this.errorService.handleError)
      );
  }

  getUserThreadHistoryById(id: string): Observable<Thread[]> {
    const url = this.url([this.resourceName, 'get_user_thread_history'], `user_id=${id}`);
    return this.http.get<Thread[]>(url)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }

  getUserCommentHistoryById(id: string): Observable<Comment[]> {
    const url = this.url([this.resourceName, 'get_user_comment_history'], `user_id=${id}`);
    return this.http.get<Comment[]>(url)
      .pipe(map(res => res['message']),
      catchError(this.errorService.handleError));
  }

  login(credentials: {email: string, password: string}): Observable<AuthToken> {
    const url = this.url([this.resourceName, 'login']);
    return this.http.post<AuthToken>(url, credentials)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }

  register(data: User): Observable<AuthToken> {
    const url = this.url([this.resourceName, 'register']);
    return this.http.post<AuthToken>(url, data)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }
}

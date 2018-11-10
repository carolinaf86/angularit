import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User, UserInterface} from '../models/User';
import {ThreadInterface} from '../models/Thread';
import {CommentInterface} from '../models/Comment';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ErrorService} from './error.service';

@Injectable()
export class UserService {

  baseUrl = 'https://cb37942.whatsalon.com/api/Account';

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  url(pathSegments: [string | number], queryParams?: string): string {
    pathSegments.unshift(this.baseUrl);
    let path = pathSegments.join('/');
    if (queryParams) { path += `?${queryParams}`; }
    return path;
  }

  getUserById(id: number) {
    const url = this.url(['get_user_profile'], `user_id=${id}`);
    return this.http.get(url)
      .pipe(
        map(res => {
          console.log('Res', res);
          return res['message'];
        }),
        catchError(this.errorService.handleError)
      );
  }

  getUserThreadHistoryById(id: number) {
    const url = this.url(['get_user_thread_history'], `user_id=${id}`);
    return this.http.get<ThreadInterface[]>(url)
      .pipe(map(res => res['message']));
  }

  getUserCommentHistoryById(id: number) {
    const url = this.url(['get_user_comment_history'], `user_id=${id}`);
    return this.http.get<CommentInterface[]>(url);
  }

  login(credentials: {email: string, password: string}) {
    const url = this.url(['login']);
    return this.http.post(url, credentials);
  }

  register(data: User) {
    const url = this.url(['register']);
    return this.http.post<User>(url, data);
  }
}

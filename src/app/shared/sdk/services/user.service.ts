import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User, UserInterface} from '../models/User';
import {ThreadInterface} from '../models/Thread';
import {CommentInterface} from '../models/Comment';

@Injectable()
export class UserService {

  baseUrl = 'https://cb37942.whatsalon.com/api/Account';
  headers: {headers: HttpHeaders};

  constructor(private http: HttpClient) {
    this.headers = {
      headers: new HttpHeaders({
        'ContentType': 'application/json'
      })
    };
  }

  url(pathSegments: [string | number], queryParams?: string): string {
    pathSegments.unshift(this.baseUrl);
    let path = pathSegments.join('/');
    if (queryParams) { path += `?${queryParams}`; }
    return path;
  }

  getUserById(id: number) {
    const url = this.url(['get_user_profile'], `user_id=${id}`);
    return this.http.get<UserInterface>(url, this.headers);
  }

  getUserThreadHistoryById(id: number) {
    const url = this.url(['get_user_thread_history'], `user_id=${id}`);
    return this.http.get<ThreadInterface[]>(url, this.headers);
  }

  getUserCommentHistoryById(id: number) {
    const url = this.url(['get_user_comment_history'], `user_id=${id}`);
    return this.http.get<CommentInterface[]>(url, this.headers);
  }

  login(credentials: {email: string, password: string}) {
    const url = this.url(['login']);
    return this.http.post(url, credentials, this.headers);
  }

  register(data: User) {
    const url = this.url(['register']);
    return this.http.post<User>(url, data, this.headers);
  }
}

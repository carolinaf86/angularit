import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../models/Comment';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ErrorService} from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = 'https://cb37942.whatsalon.com/api';
  resourceName = 'Comment';

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  url(pathSegments: string[], queryParams?: string): string {
    pathSegments.unshift(this.baseUrl);
    let path = pathSegments.join('/');
    if (queryParams) { path += `?${queryParams}`; }
    return path;
  }

  getCommentById(id: number): Observable<Comment> {
    const url = this.url([this.resourceName, 'get'], `comment_id=${id}`);
    return this.http.get<Comment>(url)
      .pipe(
        map(res => res['message']),
        catchError(this.errorService.handleError)
      );
  }

  upvote(id: string): Observable<Comment> {
    const url = this.url([this.resourceName, 'upvote'], `comment_id=${id}`);
    return this.http.get<Comment>(url)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }

  downvote(id: string): Observable<Comment> {
    const url = this.url([this.resourceName, 'downvote'], `comment_id=${id}`);
    return this.http.get<Comment>(url)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }

  create(data: Comment): Observable<Comment> {
    const url = this.url([this.resourceName, 'create']);
    return this.http.post<Comment>(url, data)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }

  update(data: Comment): Observable<Comment> {
    const url = this.url([this.resourceName, 'edit']);
    return this.http.post<Comment>(url, data)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }

}

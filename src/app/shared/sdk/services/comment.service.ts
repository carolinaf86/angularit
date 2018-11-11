import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User, UserInterface} from '../models/User';
import {Thread, ThreadInterface} from '../models/Thread';
import {Comment, CommentInterface} from '../models/Comment';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
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

  upvote(id: number): Observable<Comment> {
    const url = this.url([this.resourceName, 'upvote'], `comment_id=${id}`);
    return this.http.get<Comment>(url)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }

  downvote(id: number): Observable<Comment> {
    const url = this.url([this.resourceName, 'downvote'], `comment_id=${id}`);
    return this.http.get<Comment>(url)
      .pipe(map(res => res['message']),
        catchError(this.errorService.handleError));
  }

}

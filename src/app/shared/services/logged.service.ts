import {Injectable} from '@angular/core';
import {AuthToken} from '../sdk/models/Auth';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  authToken: string;
  loggedUserId: string;

  constructor() { }

  public setLoggedUser(authToken: AuthToken) {
    const { auth_token, id } = authToken;
    this.authToken = auth_token;
    this.loggedUserId = id.toString();
    // Also store in local storage
    localStorage.setItem('authToken', auth_token);
    localStorage.setItem('loggedUserId', id.toString());
  }

  public clearLoggedUser() {
    this.clearAuthToken();
    this.clearLoggedUserId();
  }

  public getLoggedUserId() {
    return this.loggedUserId || localStorage.getItem('loggedUserId');
  }

  public isLoggedIn() {
    return !!(this.authToken || localStorage.getItem('authToken'));
  }

  public getAuthToken(): string {
    return this.authToken || localStorage.getItem('authToken');
  }

  private clearAuthToken() {
    this.authToken = null;
    // Remove from local storage
    localStorage.removeItem('authToken');
  }

  private clearLoggedUserId() {
    this.loggedUserId = null;
    // Remove from local storage
    localStorage.removeItem('loggedUserId');
  }

}

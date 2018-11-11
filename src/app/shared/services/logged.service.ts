import {Injectable} from '@angular/core';
import {AuthToken} from '../sdk/models/Auth';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  authToken: string;
  loggedUserId: string;

  constructor() { }

  setLoggedUser(authToken: AuthToken) {
    this.authToken = authToken.auth_token;
    this.loggedUserId = authToken.id;
  }

  clearLoggedUser() {
    this.clearAuthToken();
    this.clearLoggedUserId();
  }

  set authToken(authToken: string) {
    // Also store in local storage
    localStorage.setItem('authToken', authToken);
  }

  getAuthToken(): string {
    return this.authToken || localStorage.getItem('authToken');
  }

  clearAuthToken() {
    this.authToken = null;
    // Remove from local storage
    localStorage.removeItem('authToken');
  }

  set loggedUserId(id: string) {
    // Also store in local storage
    localStorage.setItem('loggedUserId', id);
  }

  get loggedUserId(): string {
    return this.loggedUserId || localStorage.getItem('loggedUserId');
  }

  clearLoggedUserId() {
    this.loggedUserId = null;
    // Remove from local storage
    localStorage.removeItem('loggedUserId');
  }

}

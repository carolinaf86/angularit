import {Injectable} from '@angular/core';
import {AuthToken} from '../sdk/models/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  KEY_AUTH_TOKEN = 'authToken';

  constructor() { }

  public setAuthenticatedUser(authToken: AuthToken) {
    // Store in local storage
    localStorage.setItem(this.KEY_AUTH_TOKEN, JSON.stringify(authToken));
  }

  public clearAuthenticatedUser() {
    localStorage.removeItem(this.KEY_AUTH_TOKEN);
  }

  public isAuthenticated() {
    return !!localStorage.getItem(this.KEY_AUTH_TOKEN);
  }

  public getAuthenticatedUser(): AuthToken {
    const json = localStorage.getItem(this.KEY_AUTH_TOKEN);
    return json ? JSON.parse(json) : null;
  }

  public getAuthenticatedUserId(): string {
    const logged = this.getAuthenticatedUser();
    return logged ? logged.id : null;
  }

  public getAuthToken(): string {
    const logged = this.getAuthenticatedUser();
    return logged ? logged.auth_token : null;
  }

}

import {Injectable} from '@angular/core';
import {AuthToken} from '../sdk/models/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setLoggedUser(authToken: AuthToken) {
    // Store in local storage
    localStorage.setItem('authToken', JSON.stringify(authToken));
  }

  public clearLoggedUser() {
    localStorage.removeItem('authToken');
  }

  public isLoggedIn() {
    return !!localStorage.getItem('authToken');
  }

  public getLoggedUser(): AuthToken {
    const json = localStorage.getItem('authToken');
    return json ? JSON.parse(json) : null;
  }

  public getLoggedUserId(): string {
    const logged = this.getLoggedUser();
    return logged ? logged.id : null;
  }

  public getAuthToken(): string {
    const logged = this.getLoggedUser();
    return logged ? logged.auth_token : null;
  }

}

declare var Object: any;

export interface AuthTokenInterface {
  id?: number;
  auth_token?: string;
}

export class AuthToken implements AuthTokenInterface {
  id?: number;
  auth_token?: string;
  constructor(data?: AuthTokenInterface) {
    Object.assign(this, data);
  }
}

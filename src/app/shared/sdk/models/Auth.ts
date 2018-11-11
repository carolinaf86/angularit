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

export interface CredentialsInterface {
  email?: string;
  password?: string;
}

export class Credentials {
  email?: string;
  password?: string;
  constructor(data?: CredentialsInterface) {
    Object.assign(this, data);
  }
}
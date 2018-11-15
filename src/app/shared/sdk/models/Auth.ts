declare var Object: any;

export interface AuthTokenInterface {
  id?: string;
  auth_token?: string;
}

export class AuthToken implements AuthTokenInterface {
  id?: string;
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

  constructor(data?: CredentialsInterface) {
    Object.assign(this, data);
  }
}

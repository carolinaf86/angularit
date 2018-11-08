
declare var Object: any;

export interface UserInterface {
  id: number;
  email: string;
  password: string;
  user_name: string;
}

export class User implements UserInterface {
  id: number;
  email: string;
  password: string;
  user_name: string;
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
}


declare var Object: any;

export interface UserInterface {
  user_id?: number;
  email?: string;
  password?: string;
  user_name?: string;
  registration_timestamp?: string;
  upvotes?: number;
  downvotes?: number;
  post_upvotes?: number;
  post_downvotes?: number;
  comment_upvotes?: number;
  comment_downvotes?: number;
}

export class User implements UserInterface {
  user_id?: number;
  email?: string;
  password?: string;
  user_name?: string;
  registration_timestamp?: string;
  upvotes?: number;
  downvotes?: number;
  post_upvotes?: number;
  post_downvotes?: number;
  comment_upvotes?: number;
  comment_downvotes?: number;
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
}

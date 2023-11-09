export interface User {
    id: string;
    username: string;
    email: string;
    token: string;
    bio: string;
    friends: Array<any>;
    blocked: Array<any>;
  }
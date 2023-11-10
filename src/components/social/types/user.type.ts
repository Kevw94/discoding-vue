export interface User {
  id: string;
  username: string;
  email: string;
  bio: string;
  token?: string,
  friends: Array<String>;
  blocked: Array<String>;
  sended_request: Array<Object>;
  received_requests: Array<Object>;
}
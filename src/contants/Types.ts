export type LogInRequestType = {
  username: String;
  password: String;
};

export type SignUpRequestType = {
  username: String;
  password: String;
  email: String;
};

export type AuthResponseType = {
  status: boolean;
  msg: string;
  token: string;
};
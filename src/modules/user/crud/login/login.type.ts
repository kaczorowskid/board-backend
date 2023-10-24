import { LoginUserRequest } from "../../../../contracts/user/user.type";

export interface Login extends LoginUserRequest {}

export interface Token {
  token?: string;
}

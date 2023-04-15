import { User } from "./User.types";

export interface UserResponse<T = User> {
  statusCode: number;
  data: T | string | null;
}

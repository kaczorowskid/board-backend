import { UpdateUserRequest } from "../../../../contracts/user/user.type";

export interface Update
  extends Pick<UpdateUserRequest, "first_name" | "last_name"> {}

export interface UpdateParams extends Pick<UpdateUserRequest, "id"> {}

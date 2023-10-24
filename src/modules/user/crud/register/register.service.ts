import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { mailer, MailType } from "../../../../utils";
import { UserModel } from "../../../../models";
import { RegisterUserRequest } from "../../../../contracts/user/user.type";

interface RegisterUserService {
  register: () => Promise<UserModel>;
}

export const registerUserService = async ({
  email,
  password,
  first_name: firstName,
  last_name: lastName,
}: RegisterUserRequest): Promise<RegisterUserService> => {
  //Add migration to database. email -> unique
  const register = async (): Promise<UserModel> => {
    const passwordHash = await bcrypt.hash(password, 10);
    const data = await UserModel.create({
      id: uuidv4(),
      email,
      password: passwordHash,
      first_name: firstName || "",
      last_name: lastName || "",
      is_active: false,
    });

    mailer({
      type: MailType.CONFIRM,
      token: jwt.sign({ id: data.id }, process.env.EMAIL_KEY!, {
        expiresIn: "1d",
      }),
      to: email,
    });

    return data;
  };

  return {
    register,
  };
};

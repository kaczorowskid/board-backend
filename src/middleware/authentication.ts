import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../types";
import { UserModel } from "../models";
import { HTTPStatus } from "../utils";
import { dbErrorFormatter } from "../modules/helpers";

export const authentication = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.JWT;
  const secret = process.env.ACCESS_KEY;

  try {
    const verifyResponse = jwt.verify(token, secret as string) as UserModel;
    const id = verifyResponse.id;

    const user = await UserModel.findOne({
      where: { id },
    });

    if (user) {
      next();
    }
  } catch (error) {
    res
      .status(HTTPStatus.UNAUTHORIZED)
      .json({ result: dbErrorFormatter(error) });
  }
};

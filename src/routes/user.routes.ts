import { Router } from "express";
import {
  confirmAccount,
  resetPassword,
  getUser,
  login,
  register,
  setNewPassword,
  updateUser,
} from "../modules";

export const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/confirm-account/:token", confirmAccount);
userRouter.get("/", getUser);
userRouter.post("/reset-password", resetPassword);
userRouter.post("/set-new-password", setNewPassword);
userRouter.patch("/update/:id", updateUser);

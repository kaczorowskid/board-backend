import { Router } from "express";
import {
  confirmAccount,
  resetPassword,
  getUser,
  login,
  register,
  updateUser,
  authorization,
  logout,
} from "../modules";

export const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/confirm-account/:token", confirmAccount);
userRouter.get("/one/:id", getUser);
userRouter.post("/reset-password", resetPassword);
userRouter.patch("/update/:id", updateUser);
userRouter.get("/authorization", authorization);
userRouter.get("/logout", logout);

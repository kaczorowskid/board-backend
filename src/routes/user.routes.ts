import { Router } from "express";
import {
  confirmAccount,
  resetPassword,
  getUser,
  login,
  register,
  setNewPassword,
  updateUser,
  authorization,
  logout,
  updatePassword,
} from "../modules";

export const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/confirm-account/:token", confirmAccount);
userRouter.get("/one/:id", getUser);
userRouter.post("/reset-password", resetPassword);
userRouter.post("/set-new-password", setNewPassword);
userRouter.patch("/update/:id", updateUser);
userRouter.get("/authorization", authorization);
userRouter.get("/logout", logout);
userRouter.patch("/update-password/:id", updatePassword);

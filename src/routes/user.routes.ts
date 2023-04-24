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
userRouter.get("/:email", getUser);
userRouter.post("/generate-reset", resetPassword);
userRouter.post("/reset-password", setNewPassword);
userRouter.patch("/update/:id", updateUser);

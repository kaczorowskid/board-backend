import { Router } from "express";
import {
  confirmAccount,
  generateResetPassword,
  getUser,
  login,
  register,
  resetPassword,
  updateUser,
} from "../modules";

export const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/confirm-account/:token", confirmAccount);
userRouter.get("/:email", getUser);
userRouter.post("/generate-reset", generateResetPassword);
userRouter.post("/reset-password", resetPassword);
userRouter.patch("/update/:id", updateUser);

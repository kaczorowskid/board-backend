import { Router } from "express";
import { createComment, removeComment } from "../modules";

export const commentRouter = Router();

commentRouter.post("/", createComment);
commentRouter.delete("/:id", removeComment);

import { Router } from "express";
import { createComment, removeComment } from "../modules";
import { authentication } from "../middleware";

export const commentRouter = Router();

commentRouter.post("/", authentication, createComment);
commentRouter.delete("/:id", authentication, removeComment);

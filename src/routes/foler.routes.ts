import { Router } from "express";
import {
  createFolder,
  getFoldersWithPagination,
  getOneFolder,
} from "../modules";

export const folderRouter = Router();

folderRouter.post("/", createFolder);
folderRouter.get("/:id", getOneFolder);
folderRouter.get("/", getFoldersWithPagination);

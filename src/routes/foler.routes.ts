import { Router } from "express";
import {
  createFolder,
  getAllFolders,
  getFoldersWithPagination,
} from "../modules";

export const folderRouter = Router();

folderRouter.post("/create", createFolder);
folderRouter.get("/all", getAllFolders);
folderRouter.get("/pagination", getFoldersWithPagination);

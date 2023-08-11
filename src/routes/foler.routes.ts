import { Router } from "express";
import { createFolder, getAllFolders } from "../modules";

export const folderRouter = Router();

folderRouter.post("/create", createFolder);
folderRouter.get("/all", getAllFolders);

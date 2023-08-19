import { Router } from "express";
import { createTable, getOneTable, getTablesWithPagination } from "../modules";

export const tableRouter = Router();

tableRouter.post("/", createTable);
tableRouter.get("/:id", getOneTable);
tableRouter.get("/", getTablesWithPagination);

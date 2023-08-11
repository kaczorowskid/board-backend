import { Router } from "express";
import {
  createTable,
  getAllTables,
  getOneTable,
  getTablesWithPagination,
} from "../modules";

export const tableRouter = Router();

tableRouter.post("/create/:user_id", createTable);
tableRouter.get("/all/:user_id", getAllTables);
tableRouter.get("/one/:user_id", getOneTable);
tableRouter.get("/pagination", getTablesWithPagination);

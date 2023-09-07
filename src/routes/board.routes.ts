import { Router } from "express";
import {
  createBoard,
  createColumn,
  createTicket,
  getBoard,
  getBoardsWithPagination,
  removeColumn,
  updateBoard,
} from "../modules";

export const boardRouter = Router();

boardRouter.get("/", getBoardsWithPagination);
boardRouter.post("/board", createBoard);
boardRouter.post("/column", createColumn);
boardRouter.post("/ticket", createTicket);
boardRouter.get("/one/:id", getBoard);
boardRouter.patch("/edit/:id", updateBoard);
boardRouter.delete("/column/:id", removeColumn);

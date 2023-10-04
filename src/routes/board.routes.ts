import { Router } from "express";
import {
  confirmShareBoardToken,
  createBoard,
  createColumn,
  createShareBoardToken,
  createTicket,
  editBoard,
  editColumn,
  editTicket,
  getBoard,
  getBoardsWithPagination,
  getColumn,
  getTicket,
  removeBoard,
  removeColumn,
  removeTicket,
  updateBoard,
} from "../modules";

export const boardRouter = Router();

boardRouter.get("/", getBoardsWithPagination);
boardRouter.post("/board", createBoard);
boardRouter.patch("/update/:id", updateBoard);
boardRouter.get("/one/:id", getBoard);
boardRouter.patch("/:id", editBoard);
boardRouter.delete("/:id", removeBoard);
boardRouter.get("/column/:id", getColumn);
boardRouter.post("/column", createColumn);
boardRouter.patch("/column/:id", editColumn);
boardRouter.delete("/column/:id", removeColumn);
boardRouter.get("/ticket/:id", getTicket);
boardRouter.post("/ticket", createTicket);
boardRouter.patch("/ticket/:id", editTicket);
boardRouter.delete("/ticket/:id", removeTicket);
boardRouter.post("/share/create", createShareBoardToken);
boardRouter.post("/share/confirm", confirmShareBoardToken);

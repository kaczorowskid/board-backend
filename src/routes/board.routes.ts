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
import { authentication } from "../middleware";

export const boardRouter = Router();

boardRouter.get("/", getBoardsWithPagination);
boardRouter.post("/board", authentication, createBoard);
boardRouter.patch("/update/:id", authentication, updateBoard);
boardRouter.get("/one/:id", authentication, getBoard);
boardRouter.patch("/:id", authentication, editBoard);
boardRouter.delete("/:id", authentication, removeBoard);
boardRouter.get("/column/:id", authentication, getColumn);
boardRouter.post("/column", authentication, createColumn);
boardRouter.patch("/column/:id", authentication, editColumn);
boardRouter.delete("/column/:id", authentication, removeColumn);
boardRouter.get("/ticket/:id", authentication, getTicket);
boardRouter.post("/ticket", authentication, createTicket);
boardRouter.patch("/ticket/:id", authentication, editTicket);
boardRouter.delete("/ticket/:id", authentication, removeTicket);
boardRouter.post("/share/create", authentication, createShareBoardToken);
boardRouter.post("/share/confirm", authentication, confirmShareBoardToken);

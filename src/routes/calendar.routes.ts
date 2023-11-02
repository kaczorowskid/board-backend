import { Router } from "express";
import {
  createNote,
  editNote,
  getCalendar,
  getNote,
  getNotesByDate,
  removeNote,
} from "../modules";
import { authentication } from "../middleware";

export const calendarRouter = Router();

calendarRouter.post("/note", authentication, createNote);
calendarRouter.patch("/note/:id", authentication, editNote);
calendarRouter.delete("/note/:id", authentication, removeNote);
calendarRouter.get("/note/:id", authentication, getNote);
calendarRouter.get("/", authentication, getCalendar);
calendarRouter.get("/notes", authentication, getNotesByDate);

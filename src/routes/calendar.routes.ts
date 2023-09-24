import { Router } from "express";
import {
  createNote,
  editNote,
  getCalendar,
  getNote,
  getNotesByDate,
  removeNote,
} from "../modules";

export const calendarRouter = Router();

calendarRouter.post("/note", createNote);
calendarRouter.patch("/note/:id", editNote);
calendarRouter.delete("/note/:id", removeNote);
calendarRouter.get("/note/:id", getNote);
calendarRouter.get("/", getCalendar);
calendarRouter.get("/notes", getNotesByDate);

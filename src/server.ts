import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  boardRouter,
  calendarRouter,
  commentRouter,
  dashboardRouter,
  folderRouter,
  tableRouter,
  userRouter,
} from "./routes";

const app = express();

const PORT = 4200;

const origin =
  process.env.ENVIRONMENT === "development"
    ? process.env.FRONTEND_URL_ORIGIN_DEV
    : process.env.FRONTEND_URL_ORIGIN_PROD;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin, credentials: true }));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/table", tableRouter);
app.use("/folder", folderRouter);
app.use("/board", boardRouter);
app.use("/dashboard", dashboardRouter);
app.use("/calendar", calendarRouter);
app.use("/comment", commentRouter);

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));

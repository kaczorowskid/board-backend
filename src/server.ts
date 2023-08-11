import express from "express";
import cors from "cors";
import { folderRouter, tableRouter, userRouter } from "./routes";

const app = express();

const PORT = 4200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/table", tableRouter);
app.use("/folder", folderRouter);

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));

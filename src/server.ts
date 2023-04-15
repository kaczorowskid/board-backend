import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.routes";

const app = express();

const PORT = 4200;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/user", userRouter);

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));

import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config/general";
import routes from "./routes/index";

const app: Application = express();

app.set("PORT", PORT);
app.use(cors());
app.use(morgan("common"));
app.use(express.json());

app.use("/v1", routes); // ruta principal

export default app;

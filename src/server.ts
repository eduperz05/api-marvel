import express, { urlencoded } from "express";
import cors from "cors";
import { errorHandler } from "./API/middlewares/errorHandler";
import { router } from "./API/routes/public";

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Welcome, this API will provide you a full directory of all marvel characters!");
});

app.use("/public/characters", router);

// Error handler
app.use(errorHandler);

export default app;


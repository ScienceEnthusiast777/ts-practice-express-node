import express, { Request, Response, NextFunction } from "express";
import beasts from "./routes/beast";
import { json } from "body-parser";

const app = express();

app.use(json());

app.use("/beast", beasts);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ message: err.message });
});

app.listen(3000);

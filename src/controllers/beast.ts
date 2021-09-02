import { RequestHandler } from "express-serve-static-core";
import { Beast } from "../models/beast";

const BEASTS: Beast[] = [];

export const createBeast: RequestHandler = (req, res, next) => {
  let name = (req.body as { name: string }).name;
  const newBeast = new Beast(Math.random().toString(), name);

  BEASTS.push(newBeast);

  res.status(201).json({ message: "beast made", createdBeast: newBeast });
};

export const getBeasts: RequestHandler = (req, res, next) => {
  res.status(200).json({ beasts: BEASTS });
};

export const editBeast: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;

  const updatedText = (req.body as { name: string }).name;

  const beastIndex = BEASTS.findIndex((beast) => beast.id === id);

  if (beastIndex === -1) {
    res.status(500).json({ message: "id not found" });
  }
  BEASTS[beastIndex] = new Beast(id, updatedText);
  res.json({ message: "updated id:" + id, updatedBeast: BEASTS[beastIndex] });
};

export const deleteBeast: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  const beastIndex = BEASTS.findIndex((beast) => beast.id === id);
  if (beastIndex === -1) {
    res.status(500).json({ message: "id not found" });
  }
  BEASTS.splice(beastIndex, 1);
  res.status(201).json({ message: "deleted id:" + id });
};

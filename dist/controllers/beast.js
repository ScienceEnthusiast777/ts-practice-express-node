"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBeast = exports.editBeast = exports.getBeasts = exports.createBeast = void 0;
const beast_1 = require("../models/beast");
const BEASTS = [];
const createBeast = (req, res, next) => {
    let name = req.body.name;
    const newBeast = new beast_1.Beast(Math.random().toString(), name);
    BEASTS.push(newBeast);
    res.status(201).json({ message: "beast made", createdBeast: newBeast });
};
exports.createBeast = createBeast;
const getBeasts = (req, res, next) => {
    res.status(200).json({ beasts: BEASTS });
};
exports.getBeasts = getBeasts;
const editBeast = (req, res, next) => {
    const id = req.params.id;
    const updatedText = req.body.name;
    const beastIndex = BEASTS.findIndex((beast) => beast.id === id);
    if (beastIndex === -1) {
        res.status(500).json({ message: "id not found" });
    }
    BEASTS[beastIndex] = new beast_1.Beast(id, updatedText);
    res.json({ message: "updated id:" + id, updatedBeast: BEASTS[beastIndex] });
};
exports.editBeast = editBeast;
const deleteBeast = (req, res, next) => {
    const id = req.params.id;
    const beastIndex = BEASTS.findIndex((beast) => beast.id === id);
    if (beastIndex === -1) {
        res.status(500).json({ message: "id not found" });
    }
    BEASTS.splice(beastIndex, 1);
    res.status(201).json({ message: "deleted id:" + id });
};
exports.deleteBeast = deleteBeast;

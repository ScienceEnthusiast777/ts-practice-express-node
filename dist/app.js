"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const beast_1 = __importDefault(require("./routes/beast"));
const body_parser_1 = require("body-parser");
const app = express_1.default();
app.use(body_parser_1.json());
app.use("/beast", beast_1.default);
app.use((err, req, res, next) => {
    res.json({ message: err.message });
});
app.listen(3000);

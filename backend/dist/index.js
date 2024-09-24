"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import session from "express-session"
const app = (0, express_1.default)();
// app.use(session());
const port = 8080;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

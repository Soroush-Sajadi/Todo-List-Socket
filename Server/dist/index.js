"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import socketio from "socket.io";
const http_1 = __importDefault(require("http"));
const express = require("express");
const router_1 = __importDefault(require("./router"));
const app = express();
const PORT = process.env.PORT || 5000;
const server = http_1.default.createServer(app);
// const io = socketio(server);
// tslint:disable-next-line:no-console
console.log(router_1.default);
app.use(router_1.default);
server.listen(PORT, 
// tslint:disable-next-line:no-console
() => console.log(`Server has started on port ${PORT}`));
//# sourceMappingURL=index.js.map
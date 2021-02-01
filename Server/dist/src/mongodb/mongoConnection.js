"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("mongodb"));
const url = 'mongodb://127.0.0.1:27017/totdolist';
const MongoClient = mongodb_1.default.MongoClient;
const dbName = 'todolist';
let db;
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    // tslint:disable-next-line:no-console
    if (err)
        return console.log(err);
    db = client.db(dbName);
});
exports.default = db;
//# sourceMappingURL=mongoConnection.js.map
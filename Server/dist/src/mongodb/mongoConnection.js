"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = exports.signIn = void 0;
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
const signIn = (user, callBack) => {
    db.collection('users').find({ email: user.email }).toArray((error, res) => {
        //  tslint:disable-next-line:no-console
        if (error)
            return console.log(error);
        if (res.length === 0) {
            db.collection('users').insertOne({
                username: user.username,
                email: user.email,
                password: user.password
            });
            return callBack(true);
        }
        return callBack(false);
    });
};
exports.signIn = signIn;
const logIn = (user, callBack) => {
    db.collection('users').find({ email: user.email, password: user.password }).toArray((error, res) => {
        //  tslint:disable-next-line:no-console
        if (error)
            return console.log(error);
        if (res.length === 0) {
            return callBack(false);
        }
        return callBack(true);
    });
};
exports.logIn = logIn;
//# sourceMappingURL=mongoConnection.js.map
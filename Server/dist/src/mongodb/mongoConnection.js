"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("mongodb"));
const url = 'mongodb://127.0.0.1:27017/totdolist';
const MongoClient = mongodb_1.default.MongoClient;
const dbName = 'todolist';
let db;
const mongodb = () => __awaiter(void 0, void 0, void 0, function* () {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => __awaiter(void 0, void 0, void 0, function* () {
        // tslint:disable-next-line:no-console
        if (err)
            return console.log(err);
        // Storing a reference to the database so you can use it later
        // tslint:disable-next-line:no-console
        db = yield client.db(dbName);
        db.collection('characters').findOne({}, (errr, res) => {
            // tslint:disable-next-line:no-console
            if (errr)
                return console.log(errr);
            // tslint:disable-next-line:no-console
            console.log(res);
            client.close();
        });
        // tslint:disable-next-line:no-console
        // console.log(`Connected MongoDB: ${db}`)
        // // tslint:disable-next-line:no-console
        // console.log(`Database: ${dbName}`)
        // return db
    }));
});
exports.default = mongodb;
//# sourceMappingURL=mongoConnection.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToDo = exports.getLists = exports.addList = exports.logIn = exports.signIn = void 0;
const mongodb_1 = __importDefault(require("mongodb"));
const url = 'mongodb://127.0.0.1:27017/totdolist';
const MongoClient = mongodb_1.default.MongoClient;
const ObjectId = mongodb_1.default.ObjectID;
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
                password: user.password,
                toDoLists: []
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
        return callBack(res);
    });
};
exports.logIn = logIn;
const addList = (id, listName, listId, callBack) => {
    const objectId = new ObjectId(id);
    db.collection('users').update({ _id: objectId }, {
        $push: {
            toDoLists: { name: listName, listId, toDos: [] }
        }
    });
};
exports.addList = addList;
const getLists = (id, callBack) => {
    const objectId = new ObjectId(id);
    db.collection('users').find({ _id: objectId }).toArray((error, res) => {
        //  tslint:disable-next-line:no-console
        if (error)
            return console.log(error);
        return callBack(res[0].toDoLists);
    });
};
exports.getLists = getLists;
const addToDo = (data, id, listId) => {
    const objectId = new ObjectId(id);
    db.collection('users').insertOne({ "_id": objectId, "toDoLists.id": listId }, {
        $push: {
            "toDoLists.$.toDos": { data }
        }
    });
};
exports.addToDo = addToDo;
//# sourceMappingURL=mongoConnection.js.map
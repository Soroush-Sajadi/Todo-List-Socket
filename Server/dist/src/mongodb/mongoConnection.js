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
exports.editToDo = exports.checkedToDo = exports.deleteToDo = exports.getToDos = exports.addToDo = exports.getLists = exports.addList = exports.logIn = exports.signIn = void 0;
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
    db.collection('users').updateOne({ _id: objectId, "toDoLists.listId": listId }, {
        $push: {
            "toDoLists.$.toDos": data
        }
    });
};
exports.addToDo = addToDo;
const getToDos = (id, listId, callBack) => __awaiter(void 0, void 0, void 0, function* () {
    const objectId = new ObjectId(id);
    const lists = yield db.collection('users').findOne({ _id: objectId });
    lists.toDoLists.map((list) => {
        if (list.listId === listId) {
            callBack(list.toDos);
        }
        ;
    });
});
exports.getToDos = getToDos;
const deleteToDo = (id, listId, toDoId, callback) => {
    const objectId = new ObjectId(id);
    db.collection('users').updateOne({ _id: objectId, "toDoLists.listId": listId }, { $pull: { 'toDoLists.$.toDos': { id: toDoId } } })
        .then(() => callback(true))
        .catch((err) => callback(err));
};
exports.deleteToDo = deleteToDo;
const checkedToDo = (id, listId, toDoId, complete) => {
    const objectId = new ObjectId(id);
    db.collection('users').updateOne({ _id: objectId, "toDoLists.listId": listId, "toDoLists.toDos.id": toDoId }, {
        $set: {
            "toDoLists.$.toDos.$[toDo].complete": complete
        }
    }, {
        arrayFilters: [
            {
                "toDo.id": {
                    $eq: toDoId
                }
            }
        ]
    });
};
exports.checkedToDo = checkedToDo;
const editToDo = (data, callback) => {
    const objectId = new ObjectId(data.id);
    db.collection('users').updateOne({ _id: objectId, "toDoLists.listId": data.listId, "toDoLists.toDos.id": data.toDoId }, {
        $set: {
            "toDoLists.$.toDos.$[toDo].text": data.text,
            "toDoLists.$.toDos.$[toDo].dateDeadLine": data.deadLine
        }
    }, {
        arrayFilters: [
            {
                "toDo.id": {
                    $eq: data.toDoId
                }
            }
        ]
    })
        .then(() => callback(true))
        .catch((err) => callback(err));
};
exports.editToDo = editToDo;
//# sourceMappingURL=mongoConnection.js.map
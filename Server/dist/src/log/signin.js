"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = void 0;
const mongoConnection_1 = __importDefault(require("../mongodb/mongoConnection"));
const signIn = (user, callBack) => {
    // tslint:disable-next-line:no-console
    console.log(mongoConnection_1.default);
    mongoConnection_1.default.collection('users').find({ email: user.email }).toArray((error, res) => {
        //  tslint:disable-next-line:no-console
        if (error)
            return console.log(error);
        if (res.length === 0) {
            mongoConnection_1.default.collection('users').insertOne({
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
//# sourceMappingURL=signin.js.map
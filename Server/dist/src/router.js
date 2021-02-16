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
// tslint:disable-next-line:no-console
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const mongoConnection_1 = require("./mongodb/mongoConnection");
router.get('/', (req, res) => {
    res.json('hi');
});
router.get('/api/account/:email/:password', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const password = req.params.password;
    mongoConnection_1.logIn({ email, password }, (result) => {
        res.json(result[0]);
    });
}));
router.post('/api/account', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    mongoConnection_1.signIn({ username, email, password }, (result) => {
        res.json(result);
    });
});
router.post('/api/list', (req, res) => {
    const list = req.body.list;
    const id = req.body.id;
    const listId = req.body.listId;
    mongoConnection_1.addList(id, list, listId, (result) => {
        res.json(result);
    });
});
router.get('/api/list/:id', (req, res) => {
    const id = req.params.id;
    mongoConnection_1.getLists(id, (result) => {
        res.json(result);
    });
});
router.post('/api/list/todo', (req, res) => {
    const data = req.body.data;
    const id = req.body.id;
    const listId = req.body.listId;
    mongoConnection_1.addToDo(data, id, listId);
});
exports.default = router;
//# sourceMappingURL=router.js.map
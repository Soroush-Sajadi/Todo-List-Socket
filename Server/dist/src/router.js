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
const mongoConnection_1 = __importDefault(require("./mongodb/mongoConnection"));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongoConnection_1.default();
    // tslint:disable-next-line:no-console
    console.log(db);
    res.json('ToDo List');
}));
router.get('/api/account/:email/:password', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const password = req.params.password;
    res.json(true);
}));
router.post('/api/account', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    res.json(true);
});
exports.default = router;
//# sourceMappingURL=router.js.map
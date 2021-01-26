"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-console
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json('ToDo List');
});
router.get('/api/account/:email/:password', (req, res) => {
    const email = req.params.email;
    const password = req.params.password;
    // tslint:disable-next-line:no-console
    console.log(email, password);
});
router.post('/api/account', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // tslint:disable-next-line:no-console
});
exports.default = router;
//# sourceMappingURL=router.js.map
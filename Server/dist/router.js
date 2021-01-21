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
router.post('/account', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // tslint:disable-next-line:no-console
    console.log(username, email, password);
});
exports.default = router;
//# sourceMappingURL=router.js.map
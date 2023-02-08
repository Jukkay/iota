"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = require("../controllers/admin");
const adminRouter = express_1.default.Router();
adminRouter.post('/', admin_1.create);
adminRouter.patch('/', admin_1.create);
// userRouter.get('/images', controller.getUserImageIDs)
adminRouter
    .route('/:id');
exports.default = adminRouter;

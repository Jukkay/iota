"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const checkENV_1 = require("./utilities/checkENV");
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.urlencoded({ extended: false, limit: '50mb' }));
app.use(express_1.default.json({ limit: '50mb' }));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: [(0, checkENV_1.getApiURL)(), (0, checkENV_1.getDashboardURL)()],
}));
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkENV_1 = require("../utilities/checkENV");
const server_token = (0, checkENV_1.getServerToken)();
const checkJWT = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                message: 'No token provided',
            });
        }
        jsonwebtoken_1.default.verify(token, server_token, (err) => {
            if (err) {
                return res.status(401).json({
                    message: 'Unauthorized',
                });
            }
            next();
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Cannot verify token',
        });
    }
};
exports.default = checkJWT;

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
exports.verifyJWT = exports.signEmailToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkENV_1 = require("./checkENV");
const signEmailToken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const expirationTime = 3600;
        jsonwebtoken_1.default.sign({
            email: email,
        }, (0, checkENV_1.getServerToken)(), {
            issuer: '42 Dates',
            algorithm: 'HS256',
            expiresIn: expirationTime,
        }, (err, token) => {
            if (token)
                resolve(token);
            if (err)
                reject(err);
        });
    });
});
exports.signEmailToken = signEmailToken;
const verifyJWT = (userToken, serverToken) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(userToken, serverToken, (err, decoded) => {
            if (err) {
                reject(err);
            }
            else
                resolve(decoded);
        });
    });
});
exports.verifyJWT = verifyJWT;

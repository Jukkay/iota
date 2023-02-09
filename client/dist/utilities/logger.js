"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logInfo = void 0;
const logInfo = (...params) => {
    console.log(...params);
};
exports.logInfo = logInfo;
const logError = (...params) => {
    console.error(...params);
};
exports.logError = logError;

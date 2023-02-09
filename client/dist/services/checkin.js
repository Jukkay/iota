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
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCheckin = void 0;
const set_interval_async_1 = require("set-interval-async");
const checkENV_1 = require("../utilities/checkENV");
const logger_1 = require("../utilities/logger");
const initCheckin = () => __awaiter(void 0, void 0, void 0, function* () {
    sendCheckin();
    // Create interval
    (0, set_interval_async_1.setIntervalAsync)(() => __awaiter(void 0, void 0, void 0, function* () {
        sendCheckin();
    }), (0, checkENV_1.getCheckinInterval)());
});
exports.initCheckin = initCheckin;
const sendCheckin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${(0, checkENV_1.getApiURL)()}/checkin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clientId: (0, checkENV_1.getClientId)(),
                clientKey: (0, checkENV_1.getClientKey)(),
            }),
        });
        const { message } = yield response.json();
        (0, logger_1.logInfo)(message);
    }
    catch (err) {
        (0, logger_1.logError)(err);
    }
});

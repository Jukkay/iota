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
exports.initMeasurements = void 0;
const set_interval_async_1 = require("set-interval-async");
const checkENV_1 = require("../utilities/checkENV");
const logger_1 = require("../utilities/logger");
const initMeasurements = () => __awaiter(void 0, void 0, void 0, function* () {
    sendDataPoint();
    // Create interval
    (0, logger_1.logInfo)('Initializing Measurements');
    (0, set_interval_async_1.setIntervalAsync)(() => __awaiter(void 0, void 0, void 0, function* () {
        sendDataPoint();
    }), (0, checkENV_1.getDataInterval)());
});
exports.initMeasurements = initMeasurements;
const sendDataPoint = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const temperature = pollSensor();
        // Send data to API
        const res = yield fetch(`${(0, checkENV_1.getApiURL)()}/data`, {
            method: 'POST',
            body: JSON.stringify({
                clientId: (0, checkENV_1.getClientId)(),
                clientKey: (0, checkENV_1.getClientKey)(),
                data: temperature.toString(),
            }),
        });
    }
    catch (err) {
        (0, logger_1.logError)(err);
    }
});
const pollSensor = () => {
    // Create random number
    const temperature = (Math.random() * (55 - -55) + -55).toFixed(1);
    (0, logger_1.logInfo)('Measured temperature:', temperature);
    return temperature;
};

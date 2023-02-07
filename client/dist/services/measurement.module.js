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
const dynamic_1 = require("set-interval-async/dynamic");
const checkENV_1 = require("../utilities/checkENV");
const logger_1 = require("../utilities/logger");
const initMeasurements = () => __awaiter(void 0, void 0, void 0, function* () {
    // Create interval
    (0, dynamic_1.setIntervalAsync)(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Create random number
            const temperature = Math.random() * (55 - (-55)) + (-55);
            (0, logger_1.logInfo)('Measured temperature:', temperature);
            // Send data to API
            const res = yield fetch(`${getApiUrl()}/data`, { method: 'POST', body: JSON.stringify({
                    clientId: (0, checkENV_1.getClientId)(),
                    clientKey: (0, checkENV_1.getClientKey)(),
                    data: temperature.toString()
                }) });
            if (res.ok) {
                const data = yield res.json();
                console.log(data);
            }
        }
        catch (err) {
            (0, logger_1.logError)(err);
        }
    }), (0, checkENV_1.getDataInterval)());
});
exports.initMeasurements = initMeasurements;
function getApiUrl() {
    throw new Error("Function not implemented.");
}

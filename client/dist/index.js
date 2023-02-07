"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const checkin_js_1 = __importDefault(require("./services/checkin.js"));
const measurement_js_1 = require("./services/measurement.js");
const checkENV_1 = require("./utilities/checkENV");
// Check environmental variables
(0, checkENV_1.checkENV)();
// Server start
app_js_1.default.listen((0, checkENV_1.getPort)(), () => {
    console.log(`Client server running in port ${(0, checkENV_1.getPort)()}`);
});
// Initialize measurement service
(0, measurement_js_1.initMeasurements)();
// Initialize check-in service
(0, checkin_js_1.default)();

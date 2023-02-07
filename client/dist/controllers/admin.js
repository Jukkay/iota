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
exports.create = void 0;
const zod_1 = require("zod");
const logger_1 = require("../utilities/logger");
// Controllers for adminRouter
// Create. dataRouter.post
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            message: 'Successfully saved data point'
        });
    }
    catch (err) {
        (0, logger_1.logError)(err);
        if (err instanceof zod_1.ZodError)
            return res.status(400).json({
                message: err.message,
            });
        return res.status(500).json({
            message: 'Something went wrong',
        });
    }
});
exports.create = create;
// Get. dataRouter.get/:id
// Delete. dataRouter.delete/:id
exports.default = {
    create: exports.create,
};

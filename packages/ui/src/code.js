"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
const react_1 = __importDefault(require("react"));
function Code({ children, className, }) {
    return react_1.default.createElement("code", { className: className }, children);
}
exports.Code = Code;

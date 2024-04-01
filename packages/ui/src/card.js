"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const react_1 = __importDefault(require("react"));
function Card({ className, title, children, href, }) {
    return (react_1.default.createElement("a", { className: className, href: `${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`, rel: "noopener noreferrer", target: "_blank" },
        react_1.default.createElement("h2", null,
            title,
            " ",
            react_1.default.createElement("span", null, "->")),
        react_1.default.createElement("p", null, children)));
}
exports.Card = Card;

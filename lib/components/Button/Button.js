"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Button = function (props) {
    var tempClassName = props.className, style = props.style, onClick = props.onClick, children = props.children, primary = props.primary, secondary = props.secondary, outline = props.outline, dashed = props.dashed, link = props.link, text = props.text, xLarge = props.xLarge, large = props.large, small = props.small, xSmall = props.xSmall, xxSmall = props.xxSmall, success = props.success, danger = props.danger, warn = props.warn, disabled = props.disabled;
    var className = (0, classnames_1.default)({
        "pony-button": true,
        "pony-button-primary": primary,
        "pony-button-secondary": secondary && !text,
        "pony-button-outline": outline,
        "pony-button-dashed": dashed,
        "pony-button-link": link,
        "pony-button-text": text && !secondary,
        "pony-button-text-secondary": secondary && text,
        "pony-button-xl": xLarge,
        "pony-button-lg": large,
        "pony-button-sm": small,
        "pony-button-xs": xSmall,
        "pony-button-xxs": xxSmall,
        "pony-button-success": success,
        "pony-button-warn": warn,
        "pony-button-danger": danger,
        "pony-button-disabled": disabled,
    }, tempClassName);
    return (react_1.default.createElement("button", { type: "button", className: className, style: style, onClick: onClick, disabled: disabled },
        react_1.default.createElement("span", { className: "pony-button__content" }, children)));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map
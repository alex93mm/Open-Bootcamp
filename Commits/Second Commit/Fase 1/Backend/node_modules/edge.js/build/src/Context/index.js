"use strict";
/*
 * edge.js
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeValue = exports.Context = exports.SafeValue = void 0;
const he_1 = __importDefault(require("he"));
const macroable_1 = require("macroable");
const edge_error_1 = require("edge-error");
/**
 * An instance of this class passed to the escape
 * method ensures that underlying value is never
 * escaped.
 */
class SafeValue {
    constructor(value) {
        this.value = value;
    }
}
exports.SafeValue = SafeValue;
/**
 * The context passed to templates during Runtime. Context enables tags to
 * register custom methods which are available during runtime.
 *
 * For example: The `@each` tag defines `ctx.loop` method to loop over
 * Arrays and Objects.
 */
class Context extends macroable_1.Macroable {
    constructor() {
        super();
    }
    /**
     * Escapes the value to be HTML safe. Only strings are escaped
     * and rest all values will be returned as it is.
     */
    escape(input) {
        return typeof input === 'string'
            ? he_1.default.escape(input)
            : input instanceof SafeValue
                ? input.value
                : input;
    }
    /**
     * Rethrows the runtime exception by re-constructing the error message
     * to point back to the original filename
     */
    reThrow(error, filename, lineNumber) {
        if (error instanceof edge_error_1.EdgeError) {
            throw error;
        }
        const message = error.message.replace(/state\./, '');
        throw new edge_error_1.EdgeError(message, 'E_RUNTIME_EXCEPTION', {
            filename: filename,
            line: lineNumber,
            col: 0,
        });
    }
}
exports.Context = Context;
/**
 * Required by Macroable
 */
Context.macros = {};
Context.getters = {};
/**
 * Mark value as safe and not to be escaped
 */
function safeValue(value) {
    return new SafeValue(value);
}
exports.safeValue = safeValue;

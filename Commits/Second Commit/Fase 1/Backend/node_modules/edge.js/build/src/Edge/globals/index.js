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
exports.GLOBALS = void 0;
const truncatise_1 = __importDefault(require("truncatise"));
const edge_error_1 = require("edge-error");
const inspect_1 = __importDefault(require("@poppinss/inspect"));
const Context_1 = require("../../Context");
exports.GLOBALS = {
    inspect: (value) => {
        return Context_1.safeValue(inspect_1.default.string.html(value));
    },
    truncate: (value, length = 20, options) => {
        return truncatise_1.default(value, {
            Strict: !!(options === null || options === void 0 ? void 0 : options.strict),
            StripHTML: false,
            TruncateLength: length,
            TruncateBy: 'characters',
            Suffix: options === null || options === void 0 ? void 0 : options.suffix,
        });
    },
    raise: (message, options) => {
        if (!options) {
            throw new Error(message);
        }
        else {
            throw new edge_error_1.EdgeError(message, 'E_RUNTIME_EXCEPTION', options);
        }
    },
    excerpt: (value, length = 20, options) => {
        return truncatise_1.default(value, {
            Strict: !!(options === null || options === void 0 ? void 0 : options.strict),
            StripHTML: true,
            TruncateLength: length,
            TruncateBy: 'characters',
            Suffix: options === null || options === void 0 ? void 0 : options.suffix,
        });
    },
    safe: Context_1.safeValue,
};

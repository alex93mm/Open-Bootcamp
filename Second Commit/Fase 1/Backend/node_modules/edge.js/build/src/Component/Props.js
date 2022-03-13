"use strict";
/*
 * edge
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
exports.Props = void 0;
const utils_1 = require("@poppinss/utils");
const stringify_attributes_1 = __importDefault(require("stringify-attributes"));
const Context_1 = require("../Context");
/**
 * Class to ease interactions with component props
 */
class Props {
    constructor(options) {
        this[Symbol.for('options')] = options;
        Object.assign(this, options.state);
    }
    /**
     * Find if a key exists inside the props
     */
    has(key) {
        const value = utils_1.lodash.get(this[Symbol.for('options')].state, key);
        return value !== undefined && value !== null;
    }
    /**
     * Validate prop value
     */
    validate(key, validateFn) {
        const value = utils_1.lodash.get(this[Symbol.for('options')].state, key);
        validateFn(key, value);
    }
    /**
     * Return values for only the given keys
     */
    only(keys) {
        return utils_1.lodash.pick(this[Symbol.for('options')].state, keys);
    }
    /**
     * Return values except the given keys
     */
    except(keys) {
        return utils_1.lodash.omit(this[Symbol.for('options')].state, keys);
    }
    /**
     * Serialize all props to a string of HTML attributes
     */
    serialize(mergeProps) {
        const attributes = utils_1.lodash.merge({}, this[Symbol.for('options')].state, mergeProps);
        return Context_1.safeValue(stringify_attributes_1.default(attributes));
    }
    /**
     * Serialize only the given keys to a string of HTML attributes
     */
    serializeOnly(keys, mergeProps) {
        const attributes = utils_1.lodash.merge({}, this.only(keys), mergeProps);
        return Context_1.safeValue(stringify_attributes_1.default(attributes));
    }
    /**
     * Serialize except the given keys to a string of HTML attributes
     */
    serializeExcept(keys, mergeProps) {
        const attributes = utils_1.lodash.merge({}, this.except(keys), mergeProps);
        return Context_1.safeValue(stringify_attributes_1.default(attributes));
    }
}
exports.Props = Props;

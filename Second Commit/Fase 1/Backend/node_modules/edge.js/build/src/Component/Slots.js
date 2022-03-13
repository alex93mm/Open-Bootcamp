"use strict";
/*
 * edge
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slots = void 0;
const edge_error_1 = require("edge-error");
const Context_1 = require("../Context");
/**
 * Class to ease interactions with component slots
 */
class Slots {
    constructor(options) {
        this[Symbol.for('options')] = options;
        Object.assign(this, options.slots);
    }
    /**
     * Share object with the slots object. This will allow slot functions
     * to access these values as `this.component`
     */
    share(values) {
        const slots = this[Symbol.for('options')].slots;
        slots.component = slots.component || {};
        Object.assign(slots.component, values);
    }
    /**
     * Find if a slot exists
     */
    has(name) {
        return !!this[Symbol.for('options')].slots[name];
    }
    /**
     * Render slot. Raises exception when the slot is missing
     */
    render(name, ...args) {
        if (!this.has(name)) {
            throw new edge_error_1.EdgeError(`"${name}" slot is required in order to render the "${this[Symbol.for('options')].component}" component`, 'E_MISSING_SLOT', this[Symbol.for('options')].caller);
        }
        return Context_1.safeValue(this[Symbol.for('options')].slots[name](...args));
    }
    /**
     * Render slot only if it exists
     */
    renderIfExists(name, ...args) {
        if (!this.has(name)) {
            return '';
        }
        return Context_1.safeValue(this[Symbol.for('options')].slots[name](...args));
    }
}
exports.Slots = Slots;

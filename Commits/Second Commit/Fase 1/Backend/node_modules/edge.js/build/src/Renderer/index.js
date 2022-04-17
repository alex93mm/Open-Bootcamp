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
exports.EdgeRenderer = void 0;
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const Template_1 = require("../Template");
/**
 * Renders a given template with it's shared state
 */
class EdgeRenderer {
    constructor(compiler, globals, processor) {
        this.compiler = compiler;
        this.globals = globals;
        this.processor = processor;
        this.locals = {};
    }
    /**
     * Share local variables with the template. They will overwrite the
     * globals
     */
    share(data) {
        lodash_merge_1.default(this.locals, data);
        return this;
    }
    /**
     * Render the template
     */
    render(templatePath, state = {}) {
        const template = new Template_1.Template(this.compiler, this.globals, this.locals, this.processor);
        return template.render(templatePath, state);
    }
}
exports.EdgeRenderer = EdgeRenderer;

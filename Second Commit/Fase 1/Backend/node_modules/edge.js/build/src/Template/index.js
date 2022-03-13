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
exports.Template = void 0;
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const Context_1 = require("../Context");
const Props_1 = require("../Component/Props");
const Slots_1 = require("../Component/Slots");
/**
 * The template is used to compile and run templates. Also the instance
 * of template is passed during runtime to render `dynamic partials`
 * and `dynamic components`.
 */
class Template {
    constructor(compiler, globals, locals, processor) {
        this.compiler = compiler;
        this.processor = processor;
        this.sharedState = lodash_merge_1.default({}, globals, locals);
    }
    /**
     * Wraps template to a function
     */
    wrapToFunction(template, ...localVariables) {
        const args = ['template', 'state', 'ctx'].concat(localVariables);
        return new Function('', `return function template (${args.join(',')}) { ${template} }`)();
    }
    /**
     * Trims top and bottom new lines from the content
     */
    trimTopBottomNewLines(value) {
        return value.replace(/^\n|^\r\n/, '').replace(/\n$|\r\n$/, '');
    }
    /**
     * Render the template inline by sharing the state of the current template.
     *
     * ```js
     * const partialFn = template.renderInline('includes.user')
     *
     * // render and use output
     * partialFn(template, state, ctx)
     * ```
     */
    renderInline(templatePath, ...localVariables) {
        const { template: compiledTemplate } = this.compiler.compile(templatePath, localVariables);
        return this.wrapToFunction(compiledTemplate, ...localVariables);
    }
    /**
     * Renders the template with custom state. The `sharedState` of the template is still
     * passed to this template.
     *
     * Also a set of custom slots can be passed along. The slots uses the state of the parent
     * template.
     *
     * ```js
     * template.renderWithState('components.user', { username: 'virk' }, slotsIfAny)
     * ```
     */
    renderWithState(template, state, slots, caller) {
        const { template: compiledTemplate } = this.compiler.compile(template);
        const templateState = Object.assign({}, this.sharedState, state, {
            $slots: new Slots_1.Slots({ component: template, caller, slots }),
            $caller: caller,
            $props: new Props_1.Props({ component: template, state }),
        });
        const context = new Context_1.Context();
        return this.wrapToFunction(compiledTemplate)(this, templateState, context);
    }
    /**
     * Render a template with it's state.
     *
     * ```js
     * template.render('welcome', { key: 'value' })
     * ```
     */
    render(template, state) {
        const { template: compiledTemplate } = this.compiler.compile(template);
        const templateState = Object.assign({}, this.sharedState, state);
        const context = new Context_1.Context();
        const output = this.trimTopBottomNewLines(this.wrapToFunction(compiledTemplate)(this, templateState, context));
        return this.processor.executeOutput({ output, template: this });
    }
}
exports.Template = Template;

import { Processor } from '../Processor';
import { CompilerContract, TemplateContract } from '../Contracts';
/**
 * The template is used to compile and run templates. Also the instance
 * of template is passed during runtime to render `dynamic partials`
 * and `dynamic components`.
 */
export declare class Template implements TemplateContract {
    private compiler;
    private processor;
    /**
     * The shared state is used to hold the globals and locals,
     * since it is shared with components too.
     */
    private sharedState;
    constructor(compiler: CompilerContract, globals: any, locals: any, processor: Processor);
    /**
     * Wraps template to a function
     */
    private wrapToFunction;
    /**
     * Trims top and bottom new lines from the content
     */
    trimTopBottomNewLines(value: string): string;
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
    renderInline(templatePath: string, ...localVariables: string[]): Function;
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
    renderWithState(template: string, state: any, slots: any, caller: any): string;
    /**
     * Render a template with it's state.
     *
     * ```js
     * template.render('welcome', { key: 'value' })
     * ```
     */
    render(template: string, state: any): string;
}

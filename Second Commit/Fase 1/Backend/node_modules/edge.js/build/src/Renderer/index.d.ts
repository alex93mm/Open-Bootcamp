import { Processor } from '../Processor';
import { EdgeRendererContract, CompilerContract } from '../Contracts';
/**
 * Renders a given template with it's shared state
 */
export declare class EdgeRenderer implements EdgeRendererContract {
    private compiler;
    private globals;
    private processor;
    private locals;
    constructor(compiler: CompilerContract, globals: any, processor: Processor);
    /**
     * Share local variables with the template. They will overwrite the
     * globals
     */
    share(data: any): this;
    /**
     * Render the template
     */
    render(templatePath: string, state?: any): string;
}

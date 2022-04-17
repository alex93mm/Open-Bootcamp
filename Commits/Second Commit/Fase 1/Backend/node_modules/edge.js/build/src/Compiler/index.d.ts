import { Parser } from 'edge-parser';
import { Token } from 'edge-lexer';
import { Processor } from '../Processor';
import { CacheManager } from '../CacheManager';
import { LoaderContract, TagsContract, LoaderTemplate, CompilerContract, CompilerOptions } from '../Contracts';
/**
 * Compiler is to used to compile templates using the `edge-parser`. Along with that
 * it natively merges the contents of a layout with a parent template.
 */
export declare class Compiler implements CompilerContract {
    private loader;
    private tags;
    private processor;
    private options;
    cacheManager: CacheManager;
    constructor(loader: LoaderContract, tags: TagsContract, processor: Processor, options?: CompilerOptions);
    /**
     * Merges sections of base template and parent template tokens
     */
    private mergeSections;
    /**
     * Generates an array of lexer tokens from the template string. Further tokens
     * are checked for layouts and if layouts are used, their sections will be
     * merged together.
     */
    private templateContentToTokens;
    /**
     * Converts the template content to an array of lexer tokens. The method is
     * same as the `parser.tokenize`, but it also handles layouts natively.
     *
     * ```
     * compiler.tokenize('<template-path>')
     * ```
     */
    tokenize(templatePath: string, parser?: Parser): Token[];
    /**
     * Compiles the template contents to string. The output is same as the `edge-parser`,
     * it's just that the compiler uses the loader to load the templates and also
     * handles layouts.
     *
     * ```js
     * compiler.compile('welcome')
     * ```
     */
    compile(templatePath: string, localVariables?: string[]): LoaderTemplate;
}

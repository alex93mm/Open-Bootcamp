import { Macroable } from 'macroable';
import { ContextContract } from '../Contracts';
/**
 * An instance of this class passed to the escape
 * method ensures that underlying value is never
 * escaped.
 */
export declare class SafeValue {
    value: any;
    constructor(value: any);
}
/**
 * The context passed to templates during Runtime. Context enables tags to
 * register custom methods which are available during runtime.
 *
 * For example: The `@each` tag defines `ctx.loop` method to loop over
 * Arrays and Objects.
 */
export declare class Context extends Macroable implements ContextContract {
    /**
     * Required by Macroable
     */
    protected static macros: {};
    protected static getters: {};
    constructor();
    /**
     * Escapes the value to be HTML safe. Only strings are escaped
     * and rest all values will be returned as it is.
     */
    escape<T>(input: T): T extends SafeValue ? T['value'] : T;
    /**
     * Rethrows the runtime exception by re-constructing the error message
     * to point back to the original filename
     */
    reThrow(error: any, filename: string, lineNumber: number): never;
}
/**
 * Mark value as safe and not to be escaped
 */
export declare function safeValue(value: string): SafeValue;

import { TagToken } from 'edge-lexer';
import { expressions as expressionsList, Parser } from 'edge-parser';
declare type ExpressionList = readonly (keyof typeof expressionsList)[];
/**
 * Raise an `E_UNALLOWED_EXPRESSION` exception. Filename and expression is
 * required to point the error stack to the correct file
 */
export declare function unallowedExpression(message: string, filename: string, loc: {
    line: number;
    col: number;
}): void;
/**
 * Validates the expression type to be part of the allowed
 * expressions only.
 *
 * The filename is required to report errors.
 *
 * ```js
 * isNotSubsetOf(expression, ['Literal', 'Identifier'], () => {})
 * ```
 */
export declare function isSubsetOf(expression: any, expressions: ExpressionList, errorCallback: () => void): void;
/**
 * Validates the expression type not to be part of the disallowed
 * expressions.
 *
 * The filename is required to report errors.
 *
 * ```js
 * isNotSubsetOf(expression, 'SequenceExpression', () => {})
 * ```
 */
export declare function isNotSubsetOf(expression: any, expressions: ExpressionList, errorCallback: () => void): void;
/**
 * Parses the jsArg by generating and transforming its AST
 */
export declare function parseJsArg(parser: Parser, token: TagToken): any;
export {};

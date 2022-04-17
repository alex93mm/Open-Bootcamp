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
exports.setTag = void 0;
const edge_error_1 = require("edge-error");
const edge_parser_1 = require("edge-parser");
const utils_1 = require("../utils");
/**
 * The set tag is used to set runtime values within the template. The value
 * is set inside the current scope of the template.
 *
 * ```edge
 * @set('user.username', 'virk')
 * <p> {{ user.username }} </p>
 * ```
 *
 * Set it inside the each loop.
 *
 * ```edge
 * @each(user in users)
 *   @set('age', user.age + 1)
 *   {{ age }}
 * @endeach
 * ```
 */
exports.setTag = {
    block: false,
    seekable: true,
    tagName: 'set',
    noNewLine: true,
    /**
     * Compiles else block node to Javascript else statement
     */
    compile(parser, buffer, token) {
        const parsed = utils_1.parseJsArg(parser, token);
        /**
         * The set tag only accepts a sequence expression.
         */
        utils_1.isSubsetOf(parsed, [edge_parser_1.expressions.SequenceExpression], () => {
            throw utils_1.unallowedExpression(`"${token.properties.jsArg}" is not a valid key-value pair for the @slot tag`, token.filename, parser.utils.getExpressionLoc(parsed));
        });
        /**
         * Disallow more than 2 values for the sequence expression
         */
        if (parsed.expressions.length > 2) {
            throw new edge_error_1.EdgeError('maximum of 2 arguments are allowed for the @set tag', 'E_MAX_ARGUMENTS', {
                line: parsed.loc.start.line,
                col: parsed.loc.start.column,
                filename: token.filename,
            });
        }
        const [key, value] = parsed.expressions;
        /**
         * The key has to be a literal value
         */
        utils_1.isSubsetOf(key, [edge_parser_1.expressions.Literal], () => {
            throw utils_1.unallowedExpression('The first argument for @set tag must be a string literal', token.filename, parser.utils.getExpressionLoc(key));
        });
        /**
         * Write statement to mutate the key. If the variable has already been
         * defined, then just update it's value.
         *
         * We do not allow re-declaring a variable as of now
         */
        const expression = parser.stack.has(key.value)
            ? `${key.value} = ${parser.utils.stringify(value)}`
            : `let ${key.value} = ${parser.utils.stringify(value)}`;
        buffer.writeExpression(expression, token.filename, token.loc.start.line);
        parser.stack.defineVariable(key.value);
    },
};

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
exports.shareTag = void 0;
const edge_parser_1 = require("edge-parser");
const utils_1 = require("../utils");
/**
 * The share tag is used within the components to share values with the
 * component caller.
 */
exports.shareTag = {
    block: false,
    seekable: true,
    tagName: 'share',
    noNewLine: true,
    compile(parser, buffer, token) {
        token.properties.jsArg = `(${token.properties.jsArg})`;
        const parsed = utils_1.parseJsArg(parser, token);
        /**
         * The share tag only accepts an object expression.
         */
        utils_1.isSubsetOf(parsed, [edge_parser_1.expressions.ObjectExpression], () => {
            throw utils_1.unallowedExpression(`"${token.properties.jsArg}" is not a valid key-value pair for the @share tag`, token.filename, parser.utils.getExpressionLoc(parsed));
        });
        buffer.writeExpression(`state.$slots.share(${parser.utils.stringify(parsed)})`, token.filename, token.loc.start.line);
    },
};

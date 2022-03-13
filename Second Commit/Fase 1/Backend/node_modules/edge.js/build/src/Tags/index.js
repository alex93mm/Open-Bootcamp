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
exports.share = exports.super = exports.section = exports.layout = exports.yield = exports.unless = exports.set = exports.debugger = exports.slot = exports.component = exports.each = exports.includeIf = exports.include = exports.elseif = exports.else = exports.if = void 0;
var If_1 = require("./If");
Object.defineProperty(exports, "if", { enumerable: true, get: function () { return If_1.ifTag; } });
var Else_1 = require("./Else");
Object.defineProperty(exports, "else", { enumerable: true, get: function () { return Else_1.elseTag; } });
var ElseIf_1 = require("./ElseIf");
Object.defineProperty(exports, "elseif", { enumerable: true, get: function () { return ElseIf_1.elseIfTag; } });
var Include_1 = require("./Include");
Object.defineProperty(exports, "include", { enumerable: true, get: function () { return Include_1.includeTag; } });
var IncludeIf_1 = require("./IncludeIf");
Object.defineProperty(exports, "includeIf", { enumerable: true, get: function () { return IncludeIf_1.includeIfTag; } });
var Each_1 = require("./Each");
Object.defineProperty(exports, "each", { enumerable: true, get: function () { return Each_1.eachTag; } });
var Component_1 = require("./Component");
Object.defineProperty(exports, "component", { enumerable: true, get: function () { return Component_1.componentTag; } });
var Slot_1 = require("./Slot");
Object.defineProperty(exports, "slot", { enumerable: true, get: function () { return Slot_1.slotTag; } });
var Debugger_1 = require("./Debugger");
Object.defineProperty(exports, "debugger", { enumerable: true, get: function () { return Debugger_1.debuggerTag; } });
var Set_1 = require("./Set");
Object.defineProperty(exports, "set", { enumerable: true, get: function () { return Set_1.setTag; } });
var Unless_1 = require("./Unless");
Object.defineProperty(exports, "unless", { enumerable: true, get: function () { return Unless_1.unlessTag; } });
var Yield_1 = require("./Yield");
Object.defineProperty(exports, "yield", { enumerable: true, get: function () { return Yield_1.yieldTag; } });
var Layout_1 = require("./Layout");
Object.defineProperty(exports, "layout", { enumerable: true, get: function () { return Layout_1.layoutTag; } });
var Section_1 = require("./Section");
Object.defineProperty(exports, "section", { enumerable: true, get: function () { return Section_1.sectionTag; } });
var Super_1 = require("./Super");
Object.defineProperty(exports, "super", { enumerable: true, get: function () { return Super_1.superTag; } });
var Share_1 = require("./Share");
Object.defineProperty(exports, "share", { enumerable: true, get: function () { return Share_1.shareTag; } });

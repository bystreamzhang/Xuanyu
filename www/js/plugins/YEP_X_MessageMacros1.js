﻿//=============================================================================
// Yanfly Engine Plugins - Message Core Extension - Message Macros 1
// YEP_X_MessageMacros1.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_MessageMacros1 = true;

var Yanfly = Yanfly || {};
Yanfly.MsgMacro = Yanfly.MsgMacro || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 信息宏命令1☁️
 * @author Yanfly Engine Plugins
 *
 * @param ---Setting---
 * @text ---设置---
 * @default
 *
 * @param Enable Quick Macro
 * @text 启用快速宏
 * @desc 允许您使用\harold代替\m[harold]。
 * NO - false     YES - true
 * @default false
 *
 * @param ---Macro 1---
 * @text ---宏 1---
 * @default
 *
 * @param Macro 1 Text
 * @text 宏1文本
 * @desc 当使用\m[x]时，这将在使用此号码时出现。可以使用文本代码。
 * @default \n<\c[6]\n[1]\c[0]>
 *
 * @param Macro 1 Name
 * @text 宏1名称
 * @desc 使用\m[x]时，可以使用名称而不是ID。
 * @default Harold
 *
 * @param ---Macro 2---
 * @default
 *
 * @param Macro 2 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default \n<\c[6]\n[2]\c[0]>
 *
 * @param Macro 2 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default Therese
 *
 * @param ---Macro 3---
 * @default
 *
 * @param Macro 3 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default \n<\c[6]\n[3]\c[0]>
 *
 * @param Macro 3 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default Marsha
 *
 * @param ---Macro 4---
 * @default
 *
 * @param Macro 4 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default \n<\c[6]\n[4]\c[0]>
 *
 * @param Macro 4 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default Lucius
 *
 * @param ---Macro 5---
 * @default
 *
 * @param Macro 5 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 5 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 6---
 * @default
 *
 * @param Macro 6 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 6 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 7---
 * @default
 *
 * @param Macro 7 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 7 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 8---
 * @default
 *
 * @param Macro 8 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 8 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 9---
 * @default
 *
 * @param Macro 9 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 9 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 10---
 * @default
 *
 * @param Macro 10 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 10 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 11---
 * @default
 *
 * @param Macro 11 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 11 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 12---
 * @default
 *
 * @param Macro 12 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 12 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 13---
 * @default
 *
 * @param Macro 13 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 13 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 14---
 * @default
 *
 * @param Macro 14 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 14 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 15---
 * @default
 *
 * @param Macro 15 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 15 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 16---
 * @default
 *
 * @param Macro 16 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 16 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 17---
 * @default
 *
 * @param Macro 17 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 17 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 18---
 * @default
 *
 * @param Macro 18 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 18 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 19---
 * @default
 *
 * @param Macro 19 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 19 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 20---
 * @default
 *
 * @param Macro 20 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 20 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 21---
 * @default
 *
 * @param Macro 21 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 21 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 22---
 * @default
 *
 * @param Macro 22 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 22 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 23---
 * @default
 *
 * @param Macro 23 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 23 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 24---
 * @default
 *
 * @param Macro 24 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 24 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 25---
 * @default
 *
 * @param Macro 25 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 25 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 26---
 * @default
 *
 * @param Macro 26 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 26 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 27---
 * @default
 *
 * @param Macro 27 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 27 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 28---
 * @default
 *
 * @param Macro 28 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 28 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 29---
 * @default
 *
 * @param Macro 29 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 29 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 30---
 * @default
 *
 * @param Macro 30 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 30 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 31---
 * @default
 *
 * @param Macro 31 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 31 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 32---
 * @default
 *
 * @param Macro 32 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 32 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 33---
 * @default
 *
 * @param Macro 33 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 33 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 34---
 * @default
 *
 * @param Macro 34 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 34 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 35---
 * @default
 *
 * @param Macro 35 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 35 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 36---
 * @default
 *
 * @param Macro 36 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 36 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 37---
 * @default
 *
 * @param Macro 37 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 37 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 38---
 * @default
 *
 * @param Macro 38 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 38 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 39---
 * @default
 *
 * @param Macro 39 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 39 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 40---
 * @default
 *
 * @param Macro 40 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 40 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 41---
 * @default
 *
 * @param Macro 41 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 41 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 42---
 * @default
 *
 * @param Macro 42 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default The Answer to the Ultimate Question of Life, the Universe, and Everything.
 *
 * @param Macro 42 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default Life
 *
 * @param ---Macro 43---
 * @default
 *
 * @param Macro 43 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 43 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 44---
 * @default
 *
 * @param Macro 44 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 44 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 45---
 * @default
 *
 * @param Macro 45 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 45 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 46---
 * @default
 *
 * @param Macro 46 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 46 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 47---
 * @default
 *
 * @param Macro 47 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 47 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 48---
 * @default
 *
 * @param Macro 48 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 48 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 49---
 * @default
 *
 * @param Macro 49 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 49 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 50---
 * @default
 *
 * @param Macro 50 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 50 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 51---
 * @default
 *
 * @param Macro 51 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 51 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 52---
 * @default
 *
 * @param Macro 52 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 52 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 53---
 * @default
 *
 * @param Macro 53 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 53 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 54---
 * @default
 *
 * @param Macro 54 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 54 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 55---
 * @default
 *
 * @param Macro 55 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 55 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 56---
 * @default
 *
 * @param Macro 56 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 56 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 57---
 * @default
 *
 * @param Macro 57 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 57 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 58---
 * @default
 *
 * @param Macro 58 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 58 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 59---
 * @default
 *
 * @param Macro 59 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 59 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 60---
 * @default
 *
 * @param Macro 60 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 60 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 61---
 * @default
 *
 * @param Macro 61 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 61 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 62---
 * @default
 *
 * @param Macro 62 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 62 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 63---
 * @default
 *
 * @param Macro 63 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 63 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 64---
 * @default
 *
 * @param Macro 64 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 64 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 65---
 * @default
 *
 * @param Macro 65 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 65 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 66---
 * @default
 *
 * @param Macro 66 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 66 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 67---
 * @default
 *
 * @param Macro 67 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 67 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 68---
 * @default
 *
 * @param Macro 68 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 68 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 69---
 * @default
 *
 * @param Macro 69 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 69 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 70---
 * @default
 *
 * @param Macro 70 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 70 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 71---
 * @default
 *
 * @param Macro 71 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 71 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 72---
 * @default
 *
 * @param Macro 72 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 72 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 73---
 * @default
 *
 * @param Macro 73 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 73 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 74---
 * @default
 *
 * @param Macro 74 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 74 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 75---
 * @default
 *
 * @param Macro 75 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 75 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 76---
 * @default
 *
 * @param Macro 76 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 76 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 77---
 * @default
 *
 * @param Macro 77 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 77 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 78---
 * @default
 *
 * @param Macro 78 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 78 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 79---
 * @default
 *
 * @param Macro 79 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 79 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 80---
 * @default
 *
 * @param Macro 80 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 80 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 81---
 * @default
 *
 * @param Macro 81 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 81 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 82---
 * @default
 *
 * @param Macro 82 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 82 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 83---
 * @default
 *
 * @param Macro 83 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 83 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 84---
 * @default
 *
 * @param Macro 84 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 84 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 85---
 * @default
 *
 * @param Macro 85 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 85 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 86---
 * @default
 *
 * @param Macro 86 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 86 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 87---
 * @default
 *
 * @param Macro 87 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 87 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 88---
 * @default
 *
 * @param Macro 88 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 88 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 89---
 * @default
 *
 * @param Macro 89 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 89 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 90---
 * @default
 *
 * @param Macro 90 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 90 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 91---
 * @default
 *
 * @param Macro 91 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 91 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 92---
 * @default
 *
 * @param Macro 92 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 92 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 93---
 * @default
 *
 * @param Macro 93 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 93 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 94---
 * @default
 *
 * @param Macro 94 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 94 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 95---
 * @default
 *
 * @param Macro 95 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 95 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 96---
 * @default
 *
 * @param Macro 96 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 96 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 97---
 * @default
 *
 * @param Macro 97 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 97 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 98---
 * @default
 *
 * @param Macro 98 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 98 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 99---
 * @default
 *
 * @param Macro 99 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 99 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @param ---Macro 100---
 * @default
 *
 * @param Macro 100 Text
 * @desc When using \m[x], this will appear when using this
 * number. Text codes can be used.
 * @default undefined
 *
 * @param Macro 100 Name
 * @desc When using \m[x], you can use the name instead of the ID.
 * @default undefined
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * 这个插件需要YEP_MessageCore.js，请放在YEP_MessageCore.js下面
 *
 * Ever get tired of having to do \n<\c[6]\n[1]\c[0]>? With this plugin you can
 * create a macro where you can type \m[1] and it will do just that. This
 * 大家都厌倦了使用复杂的文本代码，现在你可以创造宏命令，只需要简单的代码
 * 即可实现之前的功能。
 *
 * ============================================================================
 * Instructions - Setting Up Your macros
 * ============================================================================
 *
 * 在插件参数里，你可以看到这些
 *
 * ---Macro 1---
 * Macro 1 Text   \n<\c[6]\n[1]\c[0]>
 * Macro 1 Name   Harold
 *
 * 当你需要\n<\c[6]\n[1]\c[0]>时，你可以使用\m[1]来代替。
 * 如果你记不住ID，你可以用\m[Harold]
 * At the same time, if you cannot remember which macro would give yield to
 * '\n<\c[6]\n[1]\c[0]>', you can also type out '\m[Harold]' to give way to
 * the same deal as '\m[1]' to write out '\n<\c[6]\n[1]\c[0]>'.
 *
 * *** WARNING ***
 *
 * 如果你有多个重名的，会优先ID最低的
 *
 * ---Macro 10---
 * Macro 10 Text   Macro 10
 * Macro 10 Name   abc
 *
 * ---Macro 11---
 * Macro 11 Text   Macro 11
 * Macro 11 Name   abc
 *
 * m[abc]将会执行—Macro 10—
 *
 * ============================================================================
 * Instructions - Quick Macros
 * ============================================================================
 *
 * In YEP_X_MessageMacros1.js, 在这个插件里，你可以选择开启快速宏命令。
 *
 * ---Macro 1---
 * Macro 1 Text   \n<\c[6]\n[1]\c[0]>
 * Macro 1 Name   Harold
 *
 * Then '\m[1]' would yield '\n<\c[6]\n[1]\c[0]>'. '\m[Harold]' would also
 * yield '\n<\c[6]\n[1]\c[0]>'. However, with quick macros enabled, then
 * '\Harold' would also yield '\n<\c[6]\n[1]\c[0]>' allowing you to type out
 * the macros even faster.开启快速宏命令，使用\Harold即可实现\m[Harold]的效果
 *
 * *** WARNING ***
 *
 * 这里有些事情需要注意。如果宏命令和文本代码冲突，优先执行文本代码。例如
 * 如果你使用了快速宏命令\c，将会设置颜色而不是执行宏
 *
 * 如果有相同的名字，快速宏命令优先执行ID低的
 *
 * ---Macro 10---
 * Macro 10 Text   Macro 10
 * Macro 10 Name   abc
 *
 * ---Macro 11---
 * Macro 11 Text   Macro 11
 * Macro 11 Name   abc123
 *
 * \abc123优先执行—Macro 10—
 */
//=============================================================================

if (Imported.YEP_MessageCore) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_MessageMacros1');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.QuickMacro = String(Yanfly.Parameters['Enable Quick Macro']);
Yanfly.Param.QuickMacro = eval(Yanfly.Param.QuickMacro);

Yanfly.MsgMacroRef = Yanfly.MsgMacroRef || {};
Yanfly.MsgMacroArr = [undefined];
Yanfly.Param.MacroMax = 100;
for (Yanfly.i = 1; Yanfly.i < Yanfly.Param.MacroMax + 1; ++Yanfly.i) {
  Yanfly.tx = 'Macro ' + Yanfly.i + ' Text';
  Yanfly.MsgMacro[Yanfly.i] = String(Yanfly.Parameters[Yanfly.tx]);
  Yanfly.MsgMacro[Yanfly.i] = Yanfly.MsgMacro[Yanfly.i].replace(/\\/g, '\x1b');
  Yanfly.tx = 'Macro ' + Yanfly.i + ' Name';
  Yanfly.tx = String(Yanfly.Parameters[Yanfly.tx]);
  if (!Yanfly.MsgMacroRef[Yanfly.tx.toUpperCase()]) {
    Yanfly.MsgMacroRef[Yanfly.tx.toUpperCase()] = Yanfly.i;
  }
  Yanfly.MsgMacroArr[Yanfly.i] = new RegExp('\x1b' + Yanfly.tx, 'gi');
};

//=============================================================================
// Window_Base
//=============================================================================

Yanfly.MsgMacro.Window_Base_convertEscapeCharacters =
    Window_Base.prototype.convertEscapeCharacters;
Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = text.replace(/\\V\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\\V\[(\d+)\]/gi, function() {
        return $gameVariables.value(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\\N\[(\d+)\]/gi, function() {
        return this.actorName(parseInt(arguments[1]));
    }.bind(this));
    text = text.replace(/\\P\[(\d+)\]/gi, function() {
        return this.partyMemberName(parseInt(arguments[1]));
    }.bind(this));
    text = this.convertMacroText(text);
    return Yanfly.MsgMacro.Window_Base_convertEscapeCharacters.call(this, text);
};

Window_Base.prototype.convertMacroText = function(text) {
    text = text.replace(/\\M\[(\d+)\]/gi, function() {
      return Yanfly.MsgMacro[arguments[1]];
    }.bind(this));
    text = text.replace(/\\M\[(.*?)\]/gi, function() {
      var name = arguments[1].toUpperCase();
      var macro = Yanfly.MsgMacroRef[name];
      return Yanfly.MsgMacro[macro];
    }.bind(this));
    return text;
};

if (Yanfly.Param.QuickMacro) {

Yanfly.MsgMacro.Window_Base_convertMacroText =
    Window_Base.prototype.convertMacroText;
Window_Base.prototype.convertMacroText = function(text) {
    text = Yanfly.MsgMacro.Window_Base_convertMacroText.call(this, text);
    text = text.replace(/\\/g, '\x1b');
    text = text.replace(/\x1b\x1b/g, 'YANFLYMACROTESTREVERSEDOUBLESLASH');
    var length = Yanfly.MsgMacroArr.length;
    for (var i = 0; i < length; ++i) {
      var code = Yanfly.MsgMacroArr[i];
      if (!code) continue;
      text = text.replace(code, function() {
        return Yanfly.MsgMacro[i];
      }.bind(this));
    }
    text = text.replace(/YANFLYMACROTESTREVERSEDOUBLESLASH/g, '\\\\');
    return text;
};

}; // Yanfly.Param.QuickMacro

//=============================================================================
// End of File
//=============================================================================
};
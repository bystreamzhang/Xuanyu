﻿//=============================================================================
// Yanfly Engine Plugins - Common Event Menu Extension - Setup Pack 2
// YEP_X_CEMSetupPack2.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_CEMSetupPack2 = true;

var Yanfly = Yanfly || {};
Yanfly.CEMSP2 = Yanfly.CEMSP2 || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 公共事件菜单拓展包2★
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * 这个插件需要YEP_CommonEventMenu，确保放在其下面
 *
 * 对于使用公共事件菜单的人并且想改变窗口位置的人，
 * 会意识到这需要花费一些时间去做。
 * 这个拓展插件包含了窗口位置的快速设置。
 * 这是第二个公共事件设置拓展包，
 * 有更多的选项让你对每种类型的菜单设置一个外观
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * Use the following plugin commands to change the menu setup of your common
 * event menu before opening it up. To see what the layouts look like, please
 * 下面是插件具体设置，请观看视频来得到设置后效果
 *
 * Plugin Command:
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Side Subtext Setup
 *   - This puts the Help Window at the top of the screen. The main list will
 *   appear on the left half of the screen while the subtext window takes the
 *   right half of the screen. The picture window does not appear.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Side Reverse Subtext Setup
 *   - This puts the Help Window at the top of the screen. The main list will
 *   appear on the right half of the screen while the subtext window takes the
 *   left half of the screen. The picture window does not appear.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Subtext Picture Setup
 *   - This puts the Help Window at the top of the screen. The main list will
 *   appear on the left half of the screen while the subtext window takes the
 *   right half of the screen. The main list will be 4 lines tall while the
 *   picture window takes the remainder of the height.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Subtext Reverse Picture Setup
 *   - This puts the Help Window at the top of the screen. The main list will
 *   appear on the right half of the screen while the subtext window takes the
 *   left half of the screen. The main list will be 4 lines tall while the
 *   picture window takes the remainder of the height.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Picture Subtext Setup
 *   - This puts the Help Window at the top of the screen. The main list will
 *   appear on the left half of the screen while the picture window takes the
 *   right half of the screen. The main list will be 4 lines tall while the
 *   subtext window takes the remainder of the height.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Picture Reverse Subtext Setup
 *   - This puts the Help Window at the top of the screen. The main list will
 *   appear on the right half of the screen while the picture window takes the
 *   left half of the screen. The main list will be 4 lines tall while the
 *   subtext window takes the remainder of the height.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Side Picture Setup
 *   - This puts the Help Window at the top of the screen. The main list will
 *   appear on the left half of the screen while the picture window takes the
 *   right half of the screen. The subtext window does not appear.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Side Reverse Picture Setup
 *   - This puts the Help Window at the top of the screen. The main list will
 *   appear on the right half of the screen while the picture window takes the
 *   right left of the screen. The subtext window does not appear.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Left Half Setup
 *   - This puts the Help Window and main list on the left half of the screen.
 *   Everything is half width.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Left Half Subtext Setup
 *   - This puts the Help Window, main list, and subtext window on the left
 *   half of the screen. Everything is half width.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Left Half Picture Setup
 *   - This puts the Help Window, main list, and picture window on the left
 *   half of the screen. Everything is half width. The main list is only four
 *   commands tall.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Right Half Setup
 *   - This puts the Help Window and main list on the right half of the screen.
 *   Everything is half width.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Right Half Subtext Setup
 *   - This puts the Help Window, main list, and subtext window on the right
 *   half of the screen. Everything is half width.
 *
 *   ---
 *
 *   SetCommonEventMenuSettings Right Half Picture Setup
 *   - This puts the Help Window, main list, and picture window on the right
 *   half of the screen. Everything is half width. The main list is only four
 *   commands tall.
 */
//=============================================================================

if (Imported.YEP_CommonEventMenu) {

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.CEMSP2.Game_Interpreter_setCommonEventMenuSettings =
    Game_Interpreter.prototype.setCommonEventMenuSettings;
Game_Interpreter.prototype.setCommonEventMenuSettings = function(name) {
    var settings;
    if (name.match(/SIDE SUBTEXT SETUP/i)) {
      settings = {
        mainX: 0,
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'Graphics.boxHeight - this.fittingHeight(2)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: false,
        picX: 0,
        picY: 0,
        picW: 1,
        picH: 1,
        picO: 255,

        subS: true,
        subX: 'Graphics.boxWidth / 2',
        subY: 'this.fittingHeight(2)',
        subW: 'Graphics.boxWidth / 2',
        subH: 'Graphics.boxHeight - this.fittingHeight(2)',
        subO: 255
      }
    } else if (name.match(/SIDE REVERSE SUBTEXT SETUP/i)) {
      settings = {
        mainX: 'Graphics.boxWidth / 2',
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'Graphics.boxHeight - this.fittingHeight(2)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: false,
        picX: 0,
        picY: 0,
        picW: 1,
        picH: 1,
        picO: 255,

        subS: true,
        subX: 0,
        subY: 'this.fittingHeight(2)',
        subW: 'Graphics.boxWidth / 2',
        subH: 'Graphics.boxHeight - this.fittingHeight(2)',
        subO: 255
      }
    } else if (name.match(/SUBTEXT PICTURE SETUP/i)) {
      settings = {
        mainX: 0,
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'this.fittingHeight(4)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: true,
        picX: 0,
        picY: 'this.fittingHeight(2) + this.fittingHeight(4)',
        picW: 'Graphics.boxWidth / 2',
        picH: 'Graphics.boxHeight - this.fittingHeight(2) - this.fittingHeight(4)',
        picO: 255,

        subS: true,
        subX: 'Graphics.boxWidth / 2',
        subY: 'this.fittingHeight(2)',
        subW: 'Graphics.boxWidth / 2',
        subH: 'Graphics.boxHeight - this.fittingHeight(2)',
        subO: 255
      }
    } else if (name.match(/SUBTEXT REVERSE PICTURE SETUP/i)) {
      settings = {
        mainX: 'Graphics.boxWidth / 2',
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'this.fittingHeight(4)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: true,
        picX: 'Graphics.boxWidth / 2',
        picY: 'this.fittingHeight(2) + this.fittingHeight(4)',
        picW: 'Graphics.boxWidth / 2',
        picH: 'Graphics.boxHeight - this.fittingHeight(2) - this.fittingHeight(4)',
        picO: 255,

        subS: true,
        subX: 0,
        subY: 'this.fittingHeight(2)',
        subW: 'Graphics.boxWidth / 2',
        subH: 'Graphics.boxHeight - this.fittingHeight(2)',
        subO: 255
      }
    } else if (name.match(/PICTURE SUBTEXT SETUP/i)) {
      settings = {
        mainX: 0,
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'this.fittingHeight(4)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: true,
        picX: 'Graphics.boxWidth / 2',
        picY: 'this.fittingHeight(2)',
        picW: 'Graphics.boxWidth / 2',
        picH: 'Graphics.boxHeight - this.fittingHeight(2)',
        picO: 255,

        subS: true,
        subX: 0,
        subY: 'this.fittingHeight(2) + this.fittingHeight(4)',
        subW: 'Graphics.boxWidth / 2',
        subH: 'Graphics.boxHeight - this.fittingHeight(2) - this.fittingHeight(4)',
        subO: 255
      }
    } else if (name.match(/PICTURE REVERSE SUBTEXT SETUP/i)) {
      settings = {
        mainX: 'Graphics.boxWidth / 2',
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'this.fittingHeight(4)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: true,
        picX: 0,
        picY: 'this.fittingHeight(2)',
        picW: 'Graphics.boxWidth / 2',
        picH: 'Graphics.boxHeight - this.fittingHeight(2)',
        picO: 255,

        subS: true,
        subX: 'Graphics.boxWidth / 2',
        subY: 'this.fittingHeight(2) + this.fittingHeight(4)',
        subW: 'Graphics.boxWidth / 2',
        subH: 'Graphics.boxHeight - this.fittingHeight(2) - this.fittingHeight(4)',
        subO: 255
      }
    } else if (name.match(/SIDE PICTURE SETUP/i)) {
      settings = {
        mainX: 0,
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'Graphics.boxHeight - this.fittingHeight(2)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: true,
        picX: 'Graphics.boxWidth / 2',
        picY: 'this.fittingHeight(2)',
        picW: 'Graphics.boxWidth / 2',
        picH: 'Graphics.boxHeight - this.fittingHeight(2)',
        picO: 255,

        subS: false,
        subX: 0,
        subY: 0,
        subW: 1,
        subH: 1,
        subO: 255
      }
    } else if (name.match(/SIDE REVERSE PICTURE SETUP/i)) {
      settings = {
        mainX: 'Graphics.boxWidth / 2',
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'Graphics.boxHeight - this.fittingHeight(2)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: true,
        picX: 0,
        picY: 'this.fittingHeight(2)',
        picW: 'Graphics.boxWidth / 2',
        picH: 'Graphics.boxHeight - this.fittingHeight(2)',
        picO: 255,

        subS: false,
        subX: 0,
        subY: 0,
        subW: 1,
        subH: 1,
        subO: 255
      }
    } else if (name.match(/LEFT HALF SETUP/i)) {
      settings = {
        mainX: 0,
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'Graphics.boxHeight - this.fittingHeight(2)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth / 2',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: false,
        picX: 0,
        picY: 0,
        picW: 1,
        picH: 1,
        picO: 255,

        subS: false,
        subX: 0,
        subY: 0,
        subW: 1,
        subH: 1,
        subO: 255
      }
    } else if (name.match(/LEFT HALF SUBTEXT SETUP/i)) {
      settings = {
        mainX: 0,
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'Graphics.boxHeight - this.fittingHeight(2) * 2',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth / 2',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: false,
        picX: 0,
        picY: 0,
        picW: 1,
        picH: 1,
        picO: 255,

        subS: true,
        subX: 0,
        subY: 'Graphics.boxHeight - this.fittingHeight(2)',
        subW: 'Graphics.boxWidth / 2',
        subH: 'this.fittingHeight(2)',
        subO: 255
      }
    } else if (name.match(/LEFT HALF PICTURE SETUP/i)) {
      settings = {
        mainX: 0,
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'this.fittingHeight(4)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 0,
        helpY: 0,
        helpW: 'Graphics.boxWidth / 2',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: true,
        picX: 0,
        picY: 'Graphics.boxHeight - height',
        picW: 'Graphics.boxWidth / 2',
        picH: 'Graphics.boxHeight - this.fittingHeight(2) - this.fittingHeight(4)',
        picO: 255,

        subS: false,
        subX: 0,
        subY: 0,
        subW: 1,
        subH: 1,
        subO: 255
      }
    } else if (name.match(/RIGHT HALF SETUP/i)) {
      settings = {
        mainX: 'Graphics.boxWidth / 2',
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'Graphics.boxHeight - this.fittingHeight(2)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 'Graphics.boxWidth / 2',
        helpY: 0,
        helpW: 'Graphics.boxWidth / 2',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: false,
        picX: 0,
        picY: 0,
        picW: 1,
        picH: 1,
        picO: 255,

        subS: false,
        subX: 0,
        subY: 0,
        subW: 1,
        subH: 1,
        subO: 255
      }
    } else if (name.match(/RIGHT HALF SUBTEXT SETUP/i)) {
      settings = {
        mainX: 'Graphics.boxWidth / 2',
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'Graphics.boxHeight - this.fittingHeight(2) * 2',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 'Graphics.boxWidth / 2',
        helpY: 0,
        helpW: 'Graphics.boxWidth / 2',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: false,
        picX: 0,
        picY: 0,
        picW: 1,
        picH: 1,
        picO: 255,

        subS: true,
        subX: 'Graphics.boxWidth / 2',
        subY: 'Graphics.boxHeight - this.fittingHeight(2)',
        subW: 'Graphics.boxWidth / 2',
        subH: 'this.fittingHeight(2)',
        subO: 255
      }
    } else if (name.match(/RIGHT HALF PICTURE SETUP/i)) {
      settings = {
        mainX: 'Graphics.boxWidth / 2',
        mainY: 'this.fittingHeight(2)',
        mainW: 'Graphics.boxWidth / 2',
        mainH: 'this.fittingHeight(4)',
        mainC: 1,
        mainO: 255,

        helpS: true,
        helpX: 'Graphics.boxWidth / 2',
        helpY: 0,
        helpW: 'Graphics.boxWidth / 2',
        helpH: 'this.fittingHeight(2)',
        helpO: 255,

        picS: true,
        picX: 'Graphics.boxWidth / 2',
        picY: 'Graphics.boxHeight - height',
        picW: 'Graphics.boxWidth / 2',
        picH: 'Graphics.boxHeight - this.fittingHeight(2) - this.fittingHeight(4)',
        picO: 255,

        subS: false,
        subX: 0,
        subY: 0,
        subW: 1,
        subH: 1,
        subO: 255
      }
    }
    if (settings) return $gameSystem.setCommonEventMenuSettings(settings);
    Yanfly.CEMSP2.Game_Interpreter_setCommonEventMenuSettings.call(this, name);
};

//=============================================================================
// End of File
//=============================================================================
}; // Imported.YEP_CommonEventMenu
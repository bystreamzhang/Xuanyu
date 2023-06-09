﻿//=============================================================================
// Yanfly Engine Plugins - Map Gold Window
// YEP_MapGoldWindow.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_MapGoldWindow = true;

var Yanfly = Yanfly || {};
Yanfly.MGW = Yanfly.MGW || {};

//=============================================================================
 /*:
 * @plugindesc v1.01 地图上金币显示☁️
 *
 * @param Automatic Open
 * @text 自动打开
 * @desc Automatically open the map window by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Default Position
 * @text 默认位置
 * @desc The default position of the gold window.
 * Refer to the numbers on the NumPad for screen position.
 * @default 9
 *
 * @param Opacity
 * @text 不透明度
 * @desc The opacity value used for the gold window.
 * Default: 255
 * @default 255
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * 你是否想显示金币窗口在地图上呢？这个插件可以让你做到
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * 使用下面的插件命令来控制
 *
 * Plugin Command:
 *
 *   OpenMapGoldWindow
 *   Opens the map gold window.  打开地图金币窗口
 *
 *   CloseMapGoldWindow
 *   Closes the map gold window.  关闭地图金币窗口
 *
 *   MapGoldWindowPosition x
 *   Changes the screen position of the map gold window to x. Refer to the
 *   NumPad for the screen position like below:
 *
 *   7   8   9
 *   4   5   6
 *   1   2   3
 *
 *   改变金币窗口位置。如果设置为0，则会保持原有位置不动
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.01:
 * - Fixed a bug where a finished message in battle would open up the gold
 * window if it is set to automatically open.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_MapGoldWindow');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.MGWAutomatic = eval(String(Yanfly.Parameters['Automatic Open']));
Yanfly.Param.MGWPosition = Number(Yanfly.Parameters['Default Position']);
Yanfly.Param.MGWOpacity = Number(Yanfly.Parameters['Opacity']);

//=============================================================================
// Game_System
//=============================================================================

Yanfly.MGW.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.MGW.Game_System_initialize.call(this);
    this.initMapGoldWindow();
};

Game_System.prototype.initMapGoldWindow = function() {
    this._mapGoldWindowAutoOpen = Yanfly.Param.MGWAutomatic;
    this._mapGoldWindowPosition = Yanfly.Param.MGWPosition;
};

Game_System.prototype.setMapGoldWindowAutoOpen = function(value) {
    this._mapGoldWindowAutoOpen = value;
};

Game_System.prototype.isMapGoldWindowAutoOpen = function() {
    if (this._mapGoldWindowAutoOpen === undefined) this.initMapGoldWindow();
    return this._mapGoldWindowAutoOpen;
};

Game_System.prototype.setMapGoldWindowPosition = function(value) {
    this._mapGoldWindowPosition = parseInt(value);
};

Game_System.prototype.getMapGoldWindowPosition = function() {
    if (this._mapGoldWindowPosition === undefined) this.initMapGoldWindow();
    return this._mapGoldWindowPosition;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.MGW.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.MGW.Game_Interpreter_pluginCommand.call(this, command, args)
  if (command === 'OpenMapGoldWindow') {
    $gameSystem.setMapGoldWindowAutoOpen(true);
  }
  if (command === 'CloseMapGoldWindow') {
    $gameSystem.setMapGoldWindowAutoOpen(false);
  }
  if (command === 'MapGoldWindowPosition') {
    $gameSystem.setMapGoldWindowPosition(args[0]);
  }
};

//=============================================================================
// Scene_Map
//=============================================================================

Yanfly.MGW.Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    Yanfly.MGW.Scene_Map_update.call(this);
    this.updateGoldWindow();
};

Scene_Map.prototype.updateGoldWindow = function() {
    if (!this._messageWindow) return;
    if (!this._messageWindow._goldWindow) return;
    this.updateGoldWindowOpenness();
    this.updateGoldWindowPosition();
    this.updateGoldWindowOpacity();
};

Scene_Map.prototype.updateGoldWindowOpenness = function() {
    var win = this._messageWindow._goldWindow;
    if (SceneManager.isSceneChanging() && !win.isClosing()) {
      win.openness = 0;
    } else if (this.checkOpenMapGoldWindow()) {
      if (win.isOpening() || win.isOpen()) {
        this.updateGoldRefresh();
      } else {
        win.open();
      }
    } else {
      win.close();
    }
};

Scene_Map.prototype.checkOpenMapGoldWindow = function() {
    if ($gameSystem.isMapGoldWindowAutoOpen()) return true;
    if (this._messageWindow._goldWindowOpened) return true;
    return false;
};

Scene_Map.prototype.updateGoldRefresh = function() {
    if (this._goldWindowValue === $gameParty.gold()) return;
    this._goldWindowValue = $gameParty.gold();
    this._messageWindow._goldWindow.refresh();
};

Scene_Map.prototype.updateGoldWindowPosition = function() {
    var win = this._messageWindow._goldWindow;
    var pos = $gameSystem.getMapGoldWindowPosition();
    switch (pos) {
    case 1:
      win.x = 0;
      win.y = Graphics.boxHeight - win.height;
      break;
    case 2:
      win.x = (Graphics.boxWidth - win.width) / 2;
      win.y = Graphics.boxHeight - win.height;
      break;
    case 3:
      win.x = Graphics.boxWidth - win.width;
      win.y = Graphics.boxHeight - win.height;
      break;
    case 4:
      win.x = 0;
      win.y = (Graphics.boxHeight - win.height) / 2;
      break;
    case 5:
      win.x = (Graphics.boxWidth - win.width) / 2;
      win.y = (Graphics.boxHeight - win.height) / 2;
      break;
    case 6:
      win.x = Graphics.boxWidth - win.width;
      win.y = (Graphics.boxHeight - win.height) / 2;
      break;
    case 7:
      win.x = 0;
      win.y = 0;
      break;
    case 8:
      win.x = (Graphics.boxWidth - win.width) / 2;
      win.y = 0;
      break;
    case 9:
      win.x = Graphics.boxWidth - win.width;
      win.y = 0;
      break;
    }
};

Scene_Map.prototype.updateGoldWindowOpacity = function() {
    this._messageWindow._goldWindow.opacity = Yanfly.Param.MGWOpacity;
};

//=============================================================================
// Window_Message
//=============================================================================

Yanfly.MGW.Window_Message_processNewPage =
    Window_Message.prototype.processNewPage;
Window_Message.prototype.processNewPage = function(textState) {
    Yanfly.MGW.Window_Message_processNewPage.call(this, textState);
    this._goldWindowOpened = false;
};

Yanfly.MGW.Window_Message_pEC = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
    if (code === '$') {
      this._goldWindow.open();
      this._goldWindowOpened = true;
    } else {
      Yanfly.MGW.Window_Message_pEC.call(this, code, textState);
    }
};

Yanfly.MGW.Window_Message_terminateMessage =
    Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
    Yanfly.MGW.Window_Message_terminateMessage.call(this);
    if ($gameSystem.isMapGoldWindowAutoOpen() && !$gameParty.inBattle()) {
      this._goldWindow.open();
    }
    this._goldWindowOpened = false;
};

//=============================================================================
// End of File
//=============================================================================

﻿//=============================================================================
// Yanfly Engine Plugins - Save Extension - New Game+
// YEP_X_NewGamePlus.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_NewGamePlus = true;

var Yanfly = Yanfly || {};
Yanfly.NGP = Yanfly.NGP || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 新周目☁️
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @text ---全局---
 * @default
 *
 * @param Command Text
 * @text 命令文本
 * @desc 在“保存”菜单中显示的命令文本
 * 新周目+选项。
 * @default 新周目
 *
 * @param Command Help
 * @text 命令帮助
 * @desc 显示在“保存”菜单上的帮助文本
 * 新游戏+选项。
 * @default 开始新周目，从这个保存的游戏携带数据。
 *
 * @param --New Game+ Data--
 * @text --新游戏+数据--
 * @default
 *
 * @param Carried Switches
 * @text 携带开关
 * @desc 这是一个切换数据的列表。
 * 用逗号分隔每个开关ID。
 * @default 0
 *
 * @param Carried Variables
 * @text 携带变量
 * @desc 这是一个切换数据的列表。
 * 用逗号分隔每个开关ID。
 * @default 0
 *
 * @param Playtime
 * @text 游戏时间
 * @desc 将新游戏的游戏时间延长+？
 * NO - false     YES - true
 * @default true
 *
 * @param Save Count
 * @text 保存次数
 * @desc Carry over the save count for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param Step Count
 * @text 步行次数
 * @desc Carry over the step count for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param Battle Count
 * @text 战斗次数
 * @desc Carry over the battle count for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param Victory Count
 * @text 胜利次数
 * @desc Carry over the victory count for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param Escape Count
 * @text 逃跑次数
 * @desc Carry over the escape count for the New Game+?
 * NO - false     YES - true
 * @default true
 *
 * @param --New Game+ Actors--
 * @text --新周目+角色--
 * @default
 *
 * @param Copy Actor
 * @text 复制角色
 * @desc Carry over all of the actor's settings?
 * NO - false   YES - true
 * @default true
 *
 * @param EXP
 * @text 经验
 * @desc Carry over each actor's exp?
 * NO - false     YES - true
 * @default true
 *
 * @param JP
 * @text 技能点
 * @desc Requires YEP_JobPoints.js: Carry over each actor's JP?
 * NO - false     YES - true
 * @default true
 *
 * @param Skills
 * @text 技能
 * @desc Carry over each actor's skills?
 * NO - false     YES - true
 * @default true
 *
 * @param --New Game+ Party--
 * @text --新周目+队伍--
 * @default
 *
 * @param Gold
 * @text 金币
 * @desc Carry over the party's gold?
 * NO - false     YES - true
 * @default true
 *
 * @param Items
 * @text 物品
 * @desc Carry over the party's items?
 * NO - false     YES - true
 * @default true
 *
 * @param Weapons
 * @text 武器
 * @desc Carry over the party's weapons?
 * NO - false     YES - true
 * @default true
 *
 * @param Armors
 * @text 护甲
 * @desc Carry over the party's armors?
 * NO - false     YES - true
 * @default true
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * 这个插件需要YEP_SaveCore，确保它放在YEP_SaveCore下面
 *
 * 新游戏拓展是一个很好的方式来提供游戏重玩的初始值。它可以让玩家重新
 * 体验游戏，但是可以携带之前的物品，角色，技能，甚至开关或者变量。
 * 这里有很多游戏来设置你的二周目游戏。
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * 这里是一些你可以设置的标签
 *
 * Actor, Item, Weapon, Armor Notetag
 *
 *   <No New Game+ Carry Over>
 *   这可以阻止特定的物品，武器，护甲被携带到二周目。如果用于角色，
 *   则这个角色将会在游戏开始时初始化。
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * 你可以通过这个插件命令来设置插件:
 *
 * Plugin Commands:
 *
 *   EnableNewGamePlus
 *   开启二周目存档功能
 *
 *   DisableNewGamePlus
 *   关闭二周目存档功能
 */
//=============================================================================

if (Imported.YEP_SaveCore) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_NewGamePlus');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.NGPCmdText = String(Yanfly.Parameters['Command Text']);
Yanfly.Param.NGPCmdHelp = String(Yanfly.Parameters['Command Help']);

Yanfly.NGP.ConvertArray = function(str) {
    var data = str.split(',');
    var result = [];
    var length = data.length;
    for (var i = 0; i < length; ++i) {
      var line = data[i].trim();
      if (line.match(/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
          parseInt(RegExp.$2));
        result = result.concat(range);
      } else if (line.match(/(\d+)/i)) {
        result.push(parseInt(RegExp.$1));
      }
    }
    return result;
};

Yanfly.Param.NGPSwitches = String(Yanfly.Parameters['Carried Switches']);
Yanfly.Param.NGPSwitches = Yanfly.NGP.ConvertArray(Yanfly.Param.NGPSwitches);
Yanfly.Param.NGPVariables = String(Yanfly.Parameters['Carried Variables']);
Yanfly.Param.NGPVariables = Yanfly.NGP.ConvertArray(Yanfly.Param.NGPVariables);
Yanfly.Param.NGPPlaytime = eval(String(Yanfly.Parameters['Playtime']));
Yanfly.Param.NGPSaveCnt = eval(String(Yanfly.Parameters['Save Count']));
Yanfly.Param.NGPStepCnt = eval(String(Yanfly.Parameters['Step Count']));
Yanfly.Param.NGPBattleCnt = eval(String(Yanfly.Parameters['Battle Count']));
Yanfly.Param.NGPVictoryCnt = eval(String(Yanfly.Parameters['Victory Count']));
Yanfly.Param.NGPEscapeCnt = eval(String(Yanfly.Parameters['Escape Count']));

Yanfly.Param.NGPActorWhole = eval(String(Yanfly.Parameters['Copy Actor']));
Yanfly.Param.NGPActorExp = eval(String(Yanfly.Parameters['EXP']));
Yanfly.Param.NGPActorJp = eval(String(Yanfly.Parameters['JP']));
Yanfly.Param.NGPActorSkills = eval(String(Yanfly.Parameters['Skills']));

Yanfly.Param.NGPPartyGold = eval(String(Yanfly.Parameters['Gold']));
Yanfly.Param.NGPPartyItems = eval(String(Yanfly.Parameters['Items']));
Yanfly.Param.NGPPartyWeapons = eval(String(Yanfly.Parameters['Weapons']));
Yanfly.Param.NGPPartyArmors = eval(String(Yanfly.Parameters['Armors']));

//=============================================================================
// DataManager
//=============================================================================

Yanfly.NGP.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.NGP.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_X_NewGamePlus) {
    this.processNGPNotetags1($dataActors);
    this.processNGPNotetags1($dataItems);
    this.processNGPNotetags1($dataWeapons);
    this.processNGPNotetags1($dataArmors);
    Yanfly._loaded_YEP_X_NewGamePlus = true;
  }
  
  return true;
};

DataManager.processNGPNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.newGamePlusCarryOver = true;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<NO NEW GAME\+ CARRY OVER>/i)) {
        obj.newGamePlusCarryOver = false;
      }
    }
  }
};

Yanfly.NGP.DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
DataManager.makeSavefileInfo = function() {
  var info = Yanfly.NGP.DataManager_makeSavefileInfo.call(this);
  info.newGamePlus = $gameSystem.isNewGamePlusEnabled();
  return info;
};

DataManager.startNewGamePlus = function() {
  this.prepareNewGamePlusData();
  this.setupNewGame();
  this.carryOverNewGamePlusData();
};

DataManager.prepareNewGamePlusData = function() {
  var length = $gameActors._data.length;
  for (var i = 0; i < length; ++i) {
    var actor = $gameActors._data[i];
    if (actor) actor.clearEquipments();
  }
  this._ngpData = {
      switches:   JsonEx.makeDeepCopy($gameSwitches._data),
     variables:   JsonEx.makeDeepCopy($gameVariables._data),
         loops:   $gameSystem.getNewGamePlusLoops(),
      playtime:   $gameSystem._framesOnSave,
     savecount:   $gameSystem.saveCount(),
     stepcount:   $gameParty.steps(),
   battlecount:   $gameSystem._battleCount,
  victorycount:   $gameSystem._winCount,
   escapecount:   $gameSystem._escapeCount,
        actors:   JsonEx.makeDeepCopy($gameActors._data),
          gold:   $gameParty._gold,
         items:   JsonEx.makeDeepCopy($gameParty._items),
       weapons:   JsonEx.makeDeepCopy($gameParty._weapons),
        armors:   JsonEx.makeDeepCopy($gameParty._armors)
  };
  if (Imported.YEP_ItemCore) {
    if (Yanfly.Param.ItemMaxItems > 0) {
      this._ngpData.dataItems = JsonEx.makeDeepCopy($dataItems);
    }
    if (Yanfly.Param.ItemMaxWeapons > 0) {
      this._ngpData.dataWeapons = JsonEx.makeDeepCopy($dataWeapons);
    }
    if (Yanfly.Param.ItemMaxArmors > 0) {
      this._ngpData.dataArmors = JsonEx.makeDeepCopy($dataArmors);
    }
    this._ngpData.dmItems = JsonEx.makeDeepCopy(this._independentItems);
    this._ngpData.dmWeapons = JsonEx.makeDeepCopy(this._independentWeapons);
    this._ngpData.dmArmors = JsonEx.makeDeepCopy(this._independentArmors);
  }
};

DataManager.carryOverNewGamePlusData = function() {
  this.carryOverNewGamePlusSwitches();
  this.carryOverNewGamePlusVariables();
  this.carryOverNewGamePlusSystemData();
  this.carryOverNewGamePlusActors();
  this.carryOverNewGamePlusPartyData();
};

DataManager.carryOverNewGamePlusSwitches = function() {
  var length = Yanfly.Param.NGPSwitches.length;
  for (var i = 0; i < length; ++i) {
    var id = Yanfly.Param.NGPSwitches[i];
    if (id <= 0) continue;
    $gameSwitches.setValue(id, this._ngpData.switches[id]);
  }
};

DataManager.carryOverNewGamePlusVariables = function() {
  var length = Yanfly.Param.NGPVariables.length;
  for (var i = 0; i < length; ++i) {
    var id = Yanfly.Param.NGPVariables[i];
    if (id <= 0) continue;
    $gameVariables.setValue(id, this._ngpData.variables[id]);
  }
};

DataManager.carryOverNewGamePlusSystemData = function() {
  $gameSystem.setNewGamePlusLoops(this._ngpData.loops + 1);
  $gameSystem.setNewGamePlusLoaded(true);
  // Playtime
  if (Yanfly.Param.NGPPlaytime) {
    $gameSystem._framesOnSave = this._ngpData.playtime;
    Graphics.frameCount = this._ngpData.playtime;
  }
  // Save Count
  if (Yanfly.Param.NGPSaveCnt) {
    $gameSystem._saveCount = this._ngpData.savecount;
  }
  // Step Count
  if (Yanfly.Param.NGPStepCnt) {
    $gameParty._steps = this._ngpData.stepcount;
  }
  // Battle Count
  if (Yanfly.Param.NGPBattleCnt) {
    $gameSystem._battleCount = this._ngpData.battlecount;
  }
  // Victory Count
  if (Yanfly.Param.NGPVictoryCnt) {
    $gameSystem._winCount = this._ngpData.victorycount;
  }
  // Escape Count
  if (Yanfly.Param.NGPEscapeCnt) {
    $gameSystem._escapeCount = this._ngpData.escapecount;
  }
};

DataManager.carryOverNewGamePlusActors = function() {
  var length = $gameActors._data.length;
  for (var id = 0; id < length; ++id) {
    var actor = $gameActors.actor(id);
    if (actor) {
      actor = this.copyNewGamePlusActorData(actor, id);
      actor.newGamePlusRefresh();
    }
  }
};

DataManager.copyNewGamePlusActorData = function(actor, id) {
  if (!actor.actor().newGamePlusCarryOver) return actor;
  // Copy Actor
  if (Yanfly.Param.NGPActorWhole) {
    $gameActors._data[id] = JsonEx.makeDeepCopy(this._ngpData.actors[id]);
    actor = $gameActors._data[id];
  }
  // EXP
  if (Yanfly.Param.NGPActorExp) {
    actor._exp = JsonEx.makeDeepCopy(this._ngpData.actors[id]._exp);
    actor.newGamePlusAdjustLevel();
  } else {
    actor._exp = {};
    actor.initExp();
  }
  // JP
  if (Imported.YEP_JobPoints) {
    if (Yanfly.Param.NGPActorJp) {
      actor._jp = JsonEx.makeDeepCopy(this._ngpData.actors[id]._jp);
    } else {
      actor.initJp();
    }
  }
  // Skill
  if (Yanfly.Param.NGPActorSkills){
    actor._skills = JsonEx.makeDeepCopy(this._ngpData.actors[id]._skills);
  } else {
    actor.initSkills();
  }
  return actor;
};

DataManager.carryOverNewGamePlusPartyData = function() {
  // Gold
  if (Yanfly.Param.NGPPartyGold) {
    $gameParty._gold = this._ngpData.gold;
  }
  // Items
  if (Yanfly.Param.NGPPartyItems) {
    $gameParty._items = this._ngpData.items;
  }
  // Items
  if (Yanfly.Param.NGPPartyWeapons) {
    $gameParty._weapons = this._ngpData.weapons;
  }
  // Items
  if (Yanfly.Param.NGPPartyArmors) {
    $gameParty._armors = this._ngpData.armors;
  }
  // Item Core Independent Items
  if (Imported.YEP_ItemCore) {
    if (Yanfly.Param.ItemMaxItems > 0) {
      $dataItems = JsonEx.makeDeepCopy(this._ngpData.dataItems);
    }
    if (Yanfly.Param.ItemMaxWeapons > 0) {
      $dataWeapons = JsonEx.makeDeepCopy(this._ngpData.dataWeapons);
    }
    if (Yanfly.Param.ItemMaxArmors > 0) {
      $dataArmors = JsonEx.makeDeepCopy(this._ngpData.dataArmors);
    }
    this._independentItems = JsonEx.makeDeepCopy(this._ngpData.dmItems);
    this._independentWeapons = JsonEx.makeDeepCopy(this._ngpData.dmWeapons);
    this._independentArmors = JsonEx.makeDeepCopy(this._ngpData.dmArmors);
  }
  $gameParty.removeNewGamePlusNoCarryOverItems();
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.NGP.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
  Yanfly.NGP.Game_System_initialize.call(this);
  this.initNewGamePlusSettings();
};

Game_System.prototype.initNewGamePlusSettings = function() {
  this._newGamePlusEnabled = false;
  this._newGamePlusLoops = 0;
  this._newGamePlusLoaded = false;
};

Game_System.prototype.isNewGamePlusEnabled = function() {
  if (this._newGamePlusEnabled === undefined) this.initNewGamePlusSettings();
  return this._newGamePlusEnabled;
};

Game_System.prototype.setNewGamePlusEnabled = function(value) {
  if (this._newGamePlusEnabled === undefined) this.initNewGamePlusSettings();
  this._newGamePlusEnabled = true;
};

Game_System.prototype.getNewGamePlusLoops = function() {
  if (this._newGamePlusLoops === undefined) this.initNewGamePlusSettings();
  return this._newGamePlusLoops;
};

Game_System.prototype.setNewGamePlusLoops = function(value) {
  if (this._newGamePlusLoops === undefined) this.initNewGamePlusSettings();
  this._newGamePlusLoops = value;
};

Game_System.prototype.isNewGamePlusLoaded = function() {
  if (this._newGamePlusLoaded === undefined) this.initNewGamePlusSettings();
  return this._newGamePlusLoaded;
};

Game_System.prototype.setNewGamePlusLoaded = function(value) {
  if (this._newGamePlusLoaded === undefined) this.initNewGamePlusSettings();
  this._newGamePlusLoaded = true;
};

//=============================================================================
// Game_Actors
//=============================================================================

Game_Actor.prototype.newGamePlusAdjustLevel = function() {
    while (!this.isMaxLevel() && this.currentExp() >= this.nextLevelExp()) {
      this.levelUp();
    }
    while (this.currentExp() < this.currentLevelExp()) {
      this.levelDown();
    }
};

Game_Actor.prototype.newGamePlusRefresh = function() {
    var actor = $dataActors[this._actorId];
    this._classId = actor.classId;
    this.initEquips(actor.equips)
    this.refresh();
    this.recoverAll();
};

//=============================================================================
// Game_Party
//=============================================================================

Game_Party.prototype.removeNewGamePlusNoCarryOverItems = function() {
    var group = $gameParty.allItems();
    var length = group.length;
    for (var i = 0; i < length; ++i) {
      var item = group[i];
      if (!item) continue;
      if (item.newGamePlusCarryOver === undefined && item.baseItemId) {
        var baseItem = DataManager.getBaseItem(item);
        item.newGamePlusCarryOver = baseItem.newGamePlusCarryOver;
      }
      if (item.newGamePlusCarryOver) continue;
      var num = $gameParty.numItems(item);
      $gameParty.loseItem(item, num);
    }
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.NGP.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.NGP.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'EnableNewGamePlus') {
    $gameSystem.setNewGamePlusEnabled(true);
  } else if (command === 'DisableNewGamePlus') {
    $gameSystem.setNewGamePlusEnabled(false);
  }
};

//=============================================================================
// Window_SaveAction
//=============================================================================

Yanfly.NGP.Window_SaveAction_getCommandName =
    Window_SaveAction.prototype.getCommandName;
Window_SaveAction.prototype.getCommandName = function(type) {
    if (type === 'load' && this.isNewGamePlus()) {
      return Yanfly.Param.NGPCmdText;
    }
    return Yanfly.NGP.Window_SaveAction_getCommandName.call(this, type);
};

Yanfly.NGP.Window_SaveAction_updateHelp = 
    Window_SaveAction.prototype.updateHelp;
Window_SaveAction.prototype.updateHelp = function() {
    if (this.currentSymbol() === 'load' && this.isNewGamePlus()) {
      var text = Yanfly.Param.NGPCmdHelp;
      this._helpWindow.setText(text);
    } else {
      Yanfly.NGP.Window_SaveAction_updateHelp.call(this);
    }
};

Window_SaveAction.prototype.isNewGamePlus = function() {
    var id = this.savefileId();
    var data = DataManager.loadSavefileInfo(id);
    return (data && data.newGamePlus);
};

//=============================================================================
// Scene_File
//=============================================================================

Yanfly.NGP.Scene_File_onLoadSuccess = Scene_File.prototype.onLoadSuccess;
Scene_File.prototype.onLoadSuccess = function() {
    if (this._actionWindow.isNewGamePlus()) {
      this.startNewGamePlus();
    } else {
      Yanfly.NGP.Scene_File_onLoadSuccess.call(this);
    }
};

Scene_File.prototype.startNewGamePlus = function() {
    SoundManager.playLoad();
    DataManager.startNewGamePlus();
    this.fadeOutAll();
    SceneManager.goto(Scene_Map);
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.getRange = function(n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
};

//=============================================================================
// End of File
//=============================================================================
};
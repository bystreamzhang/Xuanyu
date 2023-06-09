﻿//=============================================================================
// Yanfly Engine Plugins - Buffs & States Extension - State Categories
// YEP_X_StateCategories.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_StateCategories = true;

var Yanfly = Yanfly || {};
Yanfly.StC = Yanfly.StC || {};
Yanfly.StC.version = 1.05;

//=============================================================================
 /*:
 * @plugindesc v1.05 状态分类★
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * 这个插件需要YEP_BuffsStatesCore，请把它放在YEP_BuffsStatesCore下面
 *
 * 这个插件允许你设置状态的分类，他们可以属于一个分类，也可以是多个
 * 甚至没有。这样，这个插件就可以提供通过分类来消除状态的功能，或者忽略
 * 特定状态，例如死亡自动移除或者全体恢复
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * 使用下面的标签来设置
 *
 * 状态注释:
 *
 *   <Category: text>
 *   设置分类，你可以插入多条此语句来设置多分类
 *
 *   <Category: Bypass Death Removal>
 *   设置状态忽略死亡
 *
 *   <Category: Bypass Recover All Removal>
 *   设置状态忽略全体恢复效果
 *
 *   <Category: Group Defeat>
 * 将“组失败”类别添加到状态。如果所有组成员
 * 受到有这种影响的国家的影响，这被认为是一场失败的战斗。
 *
 * Skill and Item Notetags:
 *
 *   <Remove State Category: text>
 *   移除分类下的状态
 *   Causes this action to remove all states from category 'text' from the
 *   action's target. This will not attempt to remove passive states.
 *
 *   <Remove x State Category: text>
 *   移除分类下的状态x个
 *   Causes this action to remove x states from category 'text' from the
 *   action's target. The states removed will be the front x states of highest
 *   to lowest priority with the matching category text. This will not attempt
 *   to remove passive states.
 *
 * ============================================================================
 * 疯狂模式-自定义状态类别删除
 *  ============================================================================
 * 
 * 对于那些有JavaScript经验并希望删除动态
 * 一个相关类别的状态数，您可以使用以下命令
 * 便签！
 * 
 * 技能和物品标签：
 *
 *   <Custom Remove State: category name>
 *    value += user.level;
 *    value -= target.level;
 *   </Custom Remove State: category name>
 * “value”变量是操作要删除的状态量。
 * 如果在技能/项目注释框中有<Remove x State Category:text>，
 * 然后“value”变量将从该数量开始。如果不是的话
 * “value”变量将从1开始。
 * 
 *  ============================================================================
 * 疯狂模式-新的JavaScript函数
 *  ============================================================================
 * 
 * 对于那些有JavaScript经验的用户，可以使用以下函数
 * 新添加的插件。“battler”变量指
 * 演员或敌人。
 * 
 * ---功能---
 * 
 * battler.removeStateCategoryAll('text',);
 * -这将从battler中删除“text”类别的所有状态。
 * 将“text”替换为类别名称，但保留引号。这不会的
 * 尝试移除被动状态。
 * 
 * battler.removeStateCategory('text', x);
 * -这将从战斗者中移除类别为“文本”的x个状态。替换
 * “text”带有类别名称，但保留引号。用数字替换x。
 * 这不会试图移除被动状态。
 * 
 * battler.isStateCategoryAffected('text',);
 * -这将返回一个'真'或'假'后，检查战舰是否受到影响
 * “文本”类别的状态。将“text”替换为类别名称，但
 * 保留报价。这将检查甚至是被动状态。
 * 
 * battler.getStateCategoryAffectedCount('text', x);
 * -这将返回一个数值，以查看有多少状态（包括被动状态）
 * 战斗者受到“文本”类别的影响。将“text”替换为
 * 类别名称，但保留引号。
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.05:
 * - Lunatic Mode fail safes added.
 *
 * Version 1.04:
 * - Compatibility update with Selection Control to not game over the player
 * while there are still members alive.
 *
 * Version 1.03:
 * - States with <Category: Bypass Death Removal> can now be added onto already
 * dead battlers.
 *
 * Version 1.02:
 * - When using the JavaScript functions, the categories will now automatically
 * be converted to uppercase to function with the rest of the plugin.
 *
 * Version 1.01:
 * - Added <Category: Group Defeat> effect.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.YEP_BuffsStatesCore) {

//=============================================================================
// DataManager
//=============================================================================

Yanfly.StC.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.StC.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_YEP_X_StateCategories) {
    this.processStCNotetags1($dataStates);
    this.processStCNotetags2($dataSkills);
    this.processStCNotetags2($dataItems);
    Yanfly._loaded_YEP_X_StateCategories = true;
  }
  
  return true;
};

DataManager.processStCNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.category = [];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<CATEGORY:[ ](.*)>/i)) {
        obj.category.push(String(RegExp.$1).toUpperCase())
      }
    }
  }
};

DataManager.processStCNotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.removeCategory = {};
    var evalMode = 'none';
    var evalLine = '';
    obj.removeCategoryEval = {};

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<REMOVE STATE CATEGORY:[ ](.*)>/i)) {
        var category = String(RegExp.$1).toUpperCase().trim();
        obj.removeCategory[category] = 'ALL';
      } else if (line.match(/<REMOVE[ ](\d+)[ ]STATE CATEGORY:[ ](.*)>/i)) {
        var value = parseInt(RegExp.$1);
        var category = String(RegExp.$2).toUpperCase().trim();
        obj.removeCategory[category] = value;
      } else if (line.match(/<CUSTOM REMOVE STATE CATEGORY:[ ](.*)>/i)) {
        var evalMode = 'custom remove state category';
        var evalLine = '';
      } else if (line.match(/<\/CUSTOM REMOVE STATE CATEGORY:[ ](.*)>/i)) {
        var category = String(RegExp.$1).toUpperCase().trim();
        obj.removeCategory[category] = obj.removeCategory[category] || 1;
        obj.removeCategoryEval[category] = evalLine;
        var evalMode = 'none';
        var evalLine = '';
      } else if (evalMode === 'custom remove state category') {
        evalLine = evalLine + line + '\n';
      }
    }
  }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.StC.Game_BattlerBase_die = Game_BattlerBase.prototype.die;
Game_BattlerBase.prototype.die = function() {
    $gameTemp._deathStateClear = true;
    Yanfly.StC.Game_BattlerBase_die.call(this);
    $gameTemp._deathStateClear = false;
};

Yanfly.StC.Game_BattlerBase_recoverAll = Game_BattlerBase.prototype.recoverAll;
Game_BattlerBase.prototype.recoverAll = function() {
    $gameTemp._recoverAllClear = true;
    Yanfly.StC.Game_BattlerBase_recoverAll.call(this);
    $gameTemp._recoverAllClear = false;
};

Yanfly.StC.Game_BattlerBase_clearStates =
    Game_BattlerBase.prototype.clearStates;
Game_BattlerBase.prototype.clearStates = function() {
  if (this.isCustomClearStates()) {
    var states = JsonEx.makeDeepCopy(this._states);
    var turns = JsonEx.makeDeepCopy(this._stateTurns);
  }
  Yanfly.StC.Game_BattlerBase_clearStates.call(this);
  if (this.isCustomClearStates()) this.retainCustomClearStates(states, turns);
};

Game_BattlerBase.prototype.isCustomClearStates = function() {
    if ($gameTemp._deathStateClear) return true;
    if ($gameTemp._recoverAllClear) return true;
    return false;
};

Game_BattlerBase.prototype.retainCustomClearStates = function(states, turns) {
    var length = states.length;
    var removed = false;
    for (var i = 0; i < length; ++i) {
      var id = states[i];
      var state = $dataStates[id];
      if (!state) continue;
      if ($gameTemp._deathStateClear) {
        if (state.category.contains('BYPASS DEATH REMOVAL')) {
          this._states.push(id);
          this._stateTurns[id] = turns[id];
          removed = true;
        }
      }
      if ($gameTemp._recoverAllClear) {
        if (state.category.contains('BYPASS RECOVER ALL REMOVAL')) {
          this._states.push(id);
          this._stateTurns[id] = turns[id];
          removed = true;
        }
      }
    }
    if (removed) this.sortStates();
};

//=============================================================================
// Game_Battler
//=============================================================================

Yanfly.StC.Game_Battler_refresh = Game_Battler.prototype.refresh;
Game_Battler.prototype.refresh = function() {
    this._groupDefeat = undefined;
    Yanfly.StC.Game_Battler_refresh.call(this);
};

Yanfly.StC.Game_Battler_isStateAddable = Game_Battler.prototype.isStateAddable;
Game_Battler.prototype.isStateAddable = function(stateId) {
  var state = $dataStates[stateId];
  if (state && state.category.contains('BYPASS DEATH REMOVAL')) {
    return (!this.isStateResist(stateId) &&
           !this._result.isStateRemoved(stateId) &&
           !this.isStateRestrict(stateId));
  }
  return Yanfly.StC.Game_Battler_isStateAddable.call(this, stateId);
};

Game_Battler.prototype.removeStateCategoryEffect = function(obj, user) {
    var categories = obj.removeCategory;
    for (var category in categories) {
      var value = categories[category];
      if (value === 'ALL') {
        this.removeStateCategoryAll(category);
      } else {
        value = this.removeStateCategoryEval(value, obj, category, user);
        this.removeStateCategory(category, value);
      }
    }
};

Game_Battler.prototype.removeStateCategoryEval = function(value, obj, c, user) {
    if (!obj.removeCategoryEval[c]) return value;
    var formula = obj.removeCategoryEval[c];
    var category = c;
    var item = obj;
    var skill = obj;
    var a = user;
    var subject = user;
    var b = this;
    var target = this;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    try {
      eval(formula);
    } catch (e) {
      Yanfly.Util.displayError(e, formula, 'REMOVE STATE CATEGORY ERROR');
    }
    return value;
};

Game_Battler.prototype.removeStateCategoryAll = function(category) {
    category = category.toUpperCase().trim();
    var states = JsonEx.makeDeepCopy(this._states);
    var length = states.length;
    for (var i = 0; i < length; ++i) {
      var id = states[i];
      var state = $dataStates[id];
      if (!state) continue;
      if (state.category.contains(category)) this.removeState(id);
    }
};

Game_Battler.prototype.removeStateCategory = function(category, count) {
    category = category.toUpperCase().trim();
    count = count || 0;
    var states = JsonEx.makeDeepCopy(this._states);
    var length = states.length;
    var value = 0;
    for (var i = 0; i < length; ++i) {
      if (value >= count) return;
      var id = states[i];
      var state = $dataStates[id];
      if (!state) continue;
      if (state.category.contains(category)) {
        this.removeState(id);
        value += 1;
      }
    }
};

Game_Battler.prototype.isStateCategoryAffected = function(category) {
    category = category.toUpperCase().trim();
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.category.contains(category.toUpperCase())) return true;
    }
    return false;
};

Game_Battler.prototype.getStateCategoryAffectedCount = function(category) {
    category = category.toUpperCase().trim();
    var count = 0;
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.category.contains(category.toUpperCase())) count += 1;
    }
    return count;
};

Game_Battler.prototype.isGroupDefeatAffected = function() {
    if (this._groupDefeat !== undefined) return this._groupDefeat;
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var state = this.states()[i];
      if (state.category.contains('GROUP DEFEAT')) {
        this._groupDefeat = true;
        return this._groupDefeat;
      }
    }
    this._groupDefeat = false;
    return this._groupDefeat;
};

//=============================================================================
// Game_Unit
//=============================================================================

Yanfly.StC.Game_Unit_isAllDead = Game_Unit.prototype.isAllDead;
Game_Unit.prototype.isAllDead = function() {
  $gameTemp._checkAllAliveMembers = true;
  var length = this.aliveMembers().length;
  var count = 0;
  for (var i = 0; i < length; ++i) {
    var member = this.aliveMembers()[i];
    if (member && member.isGroupDefeatAffected()) {
      count += 1;
    }
  }
  if (count >= length) {
    $gameTemp._checkAllAliveMembers = undefined;
    return true;
  }
  var value = Yanfly.StC.Game_Unit_isAllDead.call(this);
  $gameTemp._checkAllAliveMembers = undefined;
  return value;
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.StC.Game_Action_applyItemUserEffect =
    Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function(target) {
    Yanfly.StC.Game_Action_applyItemUserEffect.call(this, target);
    if (this.item() && this.item().removeCategory) {
      this.applyStateCategoryRemovalEffect(target);
    }
};

Game_Action.prototype.applyStateCategoryRemovalEffect = function(target) {
  target.removeStateCategoryEffect(this.item(), this.subject());
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.displayError = function(e, code, message) {
  console.log(message);
  console.log(code || 'NON-EXISTENT');
  console.error(e);
  if (Utils.isNwjs() && Utils.isOptionValid('test')) {
    if (!require('nw.gui').Window.get().isDevToolsOpen()) {
      require('nw.gui').Window.get().showDevTools();
    }
  }
};

//=============================================================================
// End of File
//=============================================================================
};
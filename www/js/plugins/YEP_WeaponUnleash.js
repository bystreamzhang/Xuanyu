﻿//=============================================================================
// Yanfly Engine Plugins - Weapon Unleash
// YEP_WeaponUnleash.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_WeaponUnleash = true;

var Yanfly = Yanfly || {};
Yanfly.WUL = Yanfly.WUL || {};
Yanfly.WUL.version = 1.04;

//=============================================================================
 /*:
 * @plugindesc v1.04 武器技能☁️
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * 这个插件可以让你的游戏代替攻击和防御命令，或者放入技能的选项。
 * 这个插件参考了Golden Sun的插件
 *
 * 当替代攻击和防御命令，可以改变命令的名字。这些替换不仅仅在装备，
 * 也可以是角色，职业，敌人，状态等等
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * 这里有一些标签，你可以使用它们来替代默认的攻击命令，提供武器发动效果。
 * 注意：如果你使用了标签写了技能名字，并且你有多个重复名字的技能，
 * 那么将会优先自行ID最高的技能。
 *
 * Actor, Class, Enemy, Weapon, Armor, State notetags:
 *
 *   --- Replace Attack ---
 *
 *   <Replace Attack: x>
 *   <Replace Attack: name>
 *   这个将会替代攻击技能。如果你的攻击命令有多个替代，会按照下面的顺序
 *   ，先进先生效:
 *
 *   States - Highest to Lowest Priority 状态 从高到低
 *   Equipment - In order of equip list  装备 装备列表顺序
 *   Enemy Aspect        敌人
 *   Class Aspect        职业
 *   Actor Aspect        角色 
 *
 *   --- Replace Guard ---
 *
 *   <Replace Guard: x>
 *   <Replace Guard: name>
 *   这个将会替代防御技能。如果你的防御命令有多个替代，会按照下面的顺序，
 *   先进先生效
 *
 *   States - Highest to Lowest Priority  状态 从高到低
 *   Equipment - In order of equip list   装备 装备列表顺序
 *   Enemy Aspect   敌人
 *   Class Aspect   职业
 *   Actor Aspect   角色
 *
 *   --- Weapon Unleash ---
 *
 *   <Weapon Unleash x%: y>
 *   <Weapon Unleash x%: name>
 *   这会造成攻击技能有x%的概率使用技能y。这仅仅在攻击命令生效。
 *   你可以插入多个副本来生成更多的武器发动技能。如果一个战斗者
 *   有多个武器发动技能，会按照下面顺序随机计算
 *
 *   States - Highest to Lowest Priority  状态 从高到低
 *   Equipment - In order of equip list   装备 装备列表顺序
 *   Enemy Aspect  敌人
 *   Class Aspect  职业
 *   Actor Aspect  角色
 *
 *   如果武器发动效果在列表中较早通过，并且后续列表还有武器发动效果，
 *   那么后续发动效果会被优先重写。
 *
 *   --- Guard Unleash ---
 *
 *   <Guard Unleash x%: y>
 *   <Guard Unleash x%: name>
 *   这会造成防御技能有x%的概率使用技能y。这仅仅在防御命令生效。
 *   你可以插入多个副本来生成更多的武器发动技能。如果一个战斗者有
 *   面顺序随机计多个武器发动技能，会按照下算:
 *
 *   States - Highest to Lowest Priority
 *   Equipment - In order of equip list
 *   Enemy Aspect
 *   Class Aspect
 *   Actor Aspect
 *
 *   如果防御发动效果在列表中较早通过，并且后续列表还有防御发动效果，
 *   那么后续发动效果会被优先重写。
 *
 *   --- Unleash Rate Modifiers ---
 *
 *   <Weapon Unleash: +x%>
 *   <Weapon Unleash: -x%> 对于所有武器发动效果概率增加或者减少x%
 *   This alters the weapon unleash rate for all weapon unleashes by +x%/-x%.
 *
 *   <Weapon Unleash x: +y%>
 *   <Weapon Unleash x: -y%>
 *   <Weapon Unleash name: +y%>
 *   <Weapon Unleash name: -y%>
 *   改变武器发动效果为技能x的概率增加或者减少y%。
 *   如果你使用了名字标签并且拥有
 *   多个重复的名字，优先执行ID最高的
 *
 *   <Guard Unleash: +x%>
 *   <Guard Unleash: -x%>  对于所有防御发动效果概率增加或者减少x%
 *   This alters the weapon unleash rate for all weapon unleashes by +x%/-x%.
 *
 *   <Guard Unleash x: +y%>
 *   <Guard Unleash x: -y%>
 *   <Guard Unleash name: +y%>
 *   <Guard Unleash name: -y%>
 *   改变防御发动效果为技能x的概率增加或者减少y%。
 *   如果你使用了名字标签并且拥有
 *   多个重复的名字，优先执行ID最高的
 *
 * Skill Notetags:
 * 
 *   <Command Text: x>
 *   <Attack Text: x>
 *   <Guard Text: x>
 *   如果你替代了攻击或者防御命令，你可以改变显示的命令名字。
 *   如果你使用<Command Text: x>的标签，这将应用于攻击和防御。
 *
 * ============================================================================
 * Lunatic Mode - Conditional Replace Attack & Guard
 * ============================================================================
 *
 * For those who have JavaScript proficiency and would like to make attack or
 * guard replacement work off conditional means, you can use the following
 * Lunatic Mode notetags:
 *
 * Actor, Class, Enemy, Weapon, Armor, State notetags:
 *
 *   --- Replace Attack ---
 *
 *   <Custom Replace Attack>
 *   if (user.level > 50) {
 *     id = 50;
 *   } else {
 *     id = 0;
 *   }
 *   </Custom Replace Attack>
 *   This will run a custom conditional check to see if the Attack command gets
 *   replaced. The 'id' variable is the skill ID that it will change to. If the
 *   'id' variable is 0, the check has failed and will continue on with the
 *   list to the next target.
 *
 *   --- Replace Guard ---
 *
 *   <Custom Replace Guard>
 *   if (user.level > 50) {
 *     id = 50;
 *   } else {
 *     id = 0;
 *   }
 *   </Custom Replace Guard>
 *   This will run a custom conditional check to see if the Guard command gets
 *   replaced. The 'id' variable is the skill ID that it will change to. If the
 *   'id' variable is 0, the check has failed and will continue on with the
 *   list to the next target.
 *
 * ============================================================================
 * Lunatic Mode - Conditional Weapon Unleash and Guard Unleash
 * ============================================================================
 *
 * For those who have JavaScript proficiency and would like to add Weapon or
 * Guard Unleashes with conditional success rates, you can use the following
 * Lunatic Mode notetags:
 *
 * Actor, Class, Enemy, Weapon, Armor, State notetags:
 *
 *   --- Weapon Unleash ---
 *
 *   <Custom Weapon Unleash: x>
 *   rate = user.hp / user.mhp;
 *   </Custom Weapon Unleash: x>
 *
 *   <Custom Weapon Unleash: name>
 *   rate = user.hp / user.mhp;
 *   </Custom Weapon Unleash: name>
 *
 *   This causes the Attack skill to have a chance to randomly use skill x
 *   (or named). The 'rate' variable will determine the success rate of the
 *   unleash. This will apply only to the Attack Command. Insert multiple
 *   copies of this notetag to give more weapon unleashes. If a battler would
 *   have multiple weapon unleashes, the randomization check will occur in the
 *   following order:
 *
 *   States - Highest to Lowest Priority
 *   Equipment - In order of equip list
 *   Enemy Aspect
 *   Class Aspect
 *   Actor Aspect
 *
 *   If a weapon unleash check passes earlier in the list while there are still
 *   weapon unleashes later in the list, that weapon unleash will take priority
 *   and override all the following weapon unleashes.
 *
 *   --- Guard Unleash ---
 *
 *   <Custom Guard Unleash: x>
 *   rate = user.hp / user.mhp;
 *   </Custom Guard Unleash: x>
 *
 *   <Custom Guard Unleash: name>
 *   rate = user.hp / user.mhp;
 *   </Custom Guard Unleash: name>
 *
 *   This causes the Guard skill to have a chance to randomly use skill x
 *   (or named). The 'rate' variable will determine the success rate of the
 *   unleash. This will apply only to the Guard Command. Insert multiple
 *   copies of this notetag to give more guard unleashes. If a battler would
 *   have multiple guard unleashes, the randomization check will occur in the
 *   following order:
 *
 *   States - Highest to Lowest Priority
 *   Equipment - In order of equip list
 *   Enemy Aspect
 *   Class Aspect
 *   Actor Aspect
 *
 *   If a guard unleash check passes earlier in the list while there are still
 *   guard unleashes later in the list, that guard unleash will take priority
 *   and override all the following guard unleashes.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.04:
 * - Bug fixed for replaced attacks that do not have a selection target.
 *
 * Version 1.03:
 * - Lunatic Mode fail safes added.
 *
 * Verison 1.02:
 * - If a battler is afflicted with berserk, charm, or confusion and they use a
 * scope other than a single target action, the scope will now be adjusted to
 * fit the scope of the action if it targets multiple enemies or allies.
 *
 * Version 1.01:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_WeaponUnleash');
Yanfly.Param = Yanfly.Param || {};

//=============================================================================
// DataManager
//=============================================================================

Yanfly.WUL.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.WUL.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_WeaponUnleash) {
    this.processWULNotetagsS($dataSkills);
    this.processWULNotetags1($dataActors);
    this.processWULNotetags1($dataClasses);
    this.processWULNotetags1($dataEnemies);
    this.processWULNotetags1($dataWeapons);
    this.processWULNotetags1($dataArmors);
    this.processWULNotetags1($dataStates);
    this.processWULNotetags2($dataSkills);
    Yanfly._loaded_YEP_WeaponUnleash = true;
  }
  return true;
};

DataManager.processWULNotetagsS = function(group) {
  if (Yanfly.SkillIdRef) return;
  Yanfly.SkillIdRef = {};
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    if (obj.name.length <= 0) continue;
    Yanfly.SkillIdRef[obj.name.toUpperCase()] = n;
  }
};

DataManager.processWULNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.attackReplace = 0;
    obj.attackReplaceEval = '';
    obj.guardReplace = 0;
    obj.guardReplaceEval = '';
    obj.weaponUnleash = [];
    obj.guardUnleash = [];
    obj.weaponUnleashRate = { all: 0 };
    obj.guardUnleashRate = { all: 0 };
    var evalMode = 'none';
    var evalLine = '';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:ATTACK REPLACE|REPLACE ATTACK):[ ](.*)>/i)) {
        var name = String(RegExp.$1).toUpperCase();
        if (name.match(/(\d+)/i)) {
          var id = parseInt(RegExp.$1);
        } else if (Yanfly.SkillIdRef[name]) {
          var id = Yanfly.SkillIdRef[name];
        } else {
          continue;
        }
        obj.attackReplace = parseInt(id);
      } else if (line.match(/<(?:GUARD REPLACE|REPLACE GUARD):[ ](.*)>/i)) {
        var name = String(RegExp.$1).toUpperCase();
        if (name.match(/(\d+)/i)) {
          var id = parseInt(RegExp.$1);
        } else if (Yanfly.SkillIdRef[name]) {
          var id = Yanfly.SkillIdRef[name];
        } else {
          continue;
        }
        obj.guardReplace = parseInt(id);
      } else if (line.match(/<WEAPON UNLEASH[ ](\d+)([%％]):[ ](.*)>/i)) {
        var rate = parseFloat(RegExp.$1) * 0.01;
        var name = String(RegExp.$3).toUpperCase();
        if (name.match(/(\d+)/i)) {
          var id = parseInt(RegExp.$1);
        } else if (Yanfly.SkillIdRef[name]) {
          var id = Yanfly.SkillIdRef[name];
        } else {
          continue;
        }
        var arr = [id, rate, ''];
        obj.weaponUnleash.push(arr);
      } else if (line.match(/<GUARD UNLEASH[ ](\d+)([%％]):[ ](.*)>/i)) {
        var rate = parseFloat(RegExp.$1) * 0.01;
        var name = String(RegExp.$3).toUpperCase();
        if (name.match(/(\d+)/i)) {
          var id = parseInt(RegExp.$1);
        } else if (Yanfly.SkillIdRef[name]) {
          var id = Yanfly.SkillIdRef[name];
        } else {
          continue;
        }
        var arr = [id, rate, ''];
        obj.guardUnleash.push(arr);
      } else if (line.match(/<WEAPON UNLEASH:[ ]([\+\-]\d+)([%％])>/i)) {
        obj.weaponUnleashRate['all'] = parseFloat(RegExp.$1) * 0.01;
      } else if (line.match(/<GUARD UNLEASH:[ ]([\+\-]\d+)([%％])>/i)) {
        obj.guardUnleashRate['all'] = parseFloat(RegExp.$1) * 0.01;
      } else if (line.match(/<WEAPON UNLEASH[ ](.*):[ ]([\+\-]\d+)([%％])>/i)) {
        var name = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(RegExp.$2) * 0.01;
        if (name.match(/(\d+)/i)) {
          var id = parseInt(RegExp.$1);
        } else if (Yanfly.SkillIdRef[name]) {
          var id = Yanfly.SkillIdRef[name];
        } else {
          continue;
        }
        obj.weaponUnleashRate[id] = rate;
      } else if (line.match(/<GUARD UNLEASH[ ](.*):[ ]([\+\-]\d+)([%％])>/i)) {
        var name = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(RegExp.$2) * 0.01;
        if (name.match(/(\d+)/i)) {
          var id = parseInt(RegExp.$1);
        } else if (Yanfly.SkillIdRef[name]) {
          var id = Yanfly.SkillIdRef[name];
        } else {
          continue;
        }
        obj.guardUnleashRate[id] = rate;
      } else if (line.match(/<(?:CUSTOM REPLACE ATTACK)>/i)) {
        evalMode = 'replaceAttack';
      } else if (line.match(/<\/(?:CUSTOM REPLACE ATTACK)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'replaceAttack') {
        obj.attackReplaceEval = obj.attackReplaceEval + line + '\n';
      } else if (line.match(/<(?:CUSTOM REPLACE GUARD)>/i)) {
        evalMode = 'replaceGuard';
      } else if (line.match(/<\/(?:CUSTOM REPLACE GUARD)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'replaceGuard') {
        obj.guardReplaceEval = obj.guardReplaceEval + line + '\n';
      } else if (line.match(/<(?:CUSTOM WEAPON UNLEASH):[ ](.*)>/i)) {
        evalMode = 'weaponUnleash';
        evalLine = '';
      } else if (line.match(/<\/(?:CUSTOM WEAPON UNLEASH):[ ](.*)>/i)) {
        var rate = 0;
        var name = String(RegExp.$1).toUpperCase();
        if (name.match(/(\d+)/i)) {
          var id = parseInt(RegExp.$1);
        } else if (Yanfly.SkillIdRef[name]) {
          var id = Yanfly.SkillIdRef[name];
        } else {
          continue;
        }
        var arr = [id, rate, evalLine];
        obj.weaponUnleash.push(arr);
        evalMode = 'none';
        evalLine = '';
      } else if (evalMode === 'weaponUnleash') {
        evalLine = evalLine + line + '\n';
      } else if (line.match(/<(?:CUSTOM GUARD UNLEASH):[ ](.*)>/i)) {
        evalMode = 'guardUnleash';
        evalLine = '';
      } else if (line.match(/<\/(?:CUSTOM GUARD UNLEASH):[ ](.*)>/i)) {
        var rate = 0;
        var name = String(RegExp.$1).toUpperCase();
        if (name.match(/(\d+)/i)) {
          var id = parseInt(RegExp.$1);
        } else if (Yanfly.SkillIdRef[name]) {
          var id = Yanfly.SkillIdRef[name];
        } else {
          continue;
        }
        var arr = [id, rate, evalLine];
        obj.guardUnleash.push(arr);
        evalMode = 'none';
        evalLine = '';
      } else if (evalMode === 'guardUnleash') {
        evalLine = evalLine + line + '\n';
      }
    }
  }
};

DataManager.processWULNotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.commandAttackText = obj.name;
    obj.commandGuardText = obj.name;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:COMMAND NAME|COMMAND TEXT):[ ](.*)>/i)) {
        var name = String(RegExp.$1);
        obj.commandAttackText = name;
        obj.commandGuardText = name;
      } else if (line.match(/<(?:ATTACK NAME|ATTACK TEXT):[ ](.*)>/i)) {
        var name = String(RegExp.$1);
        obj.commandAttackText = name;
      } else if (line.match(/<(?:GUARD NAME|GUARD TEXT):[ ](.*)>/i)) {
        var name = String(RegExp.$1);
        obj.commandGuardText = name;
      }
    }
  }
};

//=============================================================================
// BattleManager
//=============================================================================

Yanfly.WUL.BattleManager_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
    var subject = this._subject;
    if (subject) var action = subject.currentAction();
    if (action) action.processUnleash();
    Yanfly.WUL.BattleManager_startAction.call(this);
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.WUL.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
Game_BattlerBase.prototype.refresh = function() {
    this.clearReplaceAttackGuard();
    Yanfly.WUL.Game_BattlerBase_refresh.call(this);
};

Game_BattlerBase.prototype.clearReplaceAttackGuard = function() {
    this._replaceAttackSkillId = undefined;
    this._replaceGuardSkillId = undefined;
};

Yanfly.WUL.Game_BattlerBase_attackSkillId = 
    Game_BattlerBase.prototype.attackSkillId;
Game_BattlerBase.prototype.attackSkillId = function() {
    if (this._replaceAttackSkillId) return this._replaceAttackSkillId;
    if (this.replaceAttackSkillId() > 0) return this.replaceAttackSkillId();
    return Yanfly.WUL.Game_BattlerBase_attackSkillId.call(this);
};

Yanfly.WUL.Game_BattlerBase_guardSkillId =
    Game_BattlerBase.prototype.guardSkillId;
Game_BattlerBase.prototype.guardSkillId = function() {
    if (this._replaceGuardSkillId) return this._replaceGuardSkillId;
    if (this.replaceGuardSkillId() > 0) return this.replaceGuardSkillId();
    return Yanfly.WUL.Game_BattlerBase_guardSkillId.call(this);
};

//=============================================================================
// Game_Battler
//=============================================================================

Game_Battler.prototype.isReplaceAttackSkillId = function(obj) {
  if (!obj) return false;
  if (obj.attackReplace === undefined) return false;
  if (obj.attackReplaceEval === undefined) return false;
  var id = obj.attackReplace;
  var a = this;
  var user = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  if (obj.attackReplaceEval !== '') {
    var code = obj.attackReplaceEval;
    try {
      eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'REPLACE ATTACK SKILL ID ERROR');
    }
  }
  if (id !== 0) this._replaceAttackSkillId = id;
  return this._replaceAttackSkillId > 0;
};

Game_Battler.prototype.isReplaceGuardSkillId = function(obj) {
  if (!obj) return false;
  if (obj.guardReplace === undefined) return false;
  if (obj.guardReplaceEval === undefined) return false;
  var id = obj.guardReplace;
  var a = this;
  var user = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  if (obj.guardReplaceEval !== '') {
    var code = obj.guardReplaceEval;
    try {
      eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'REPLACE GUARD SKILL ID ERROR');
    }
  }
  if (id !== 0) this._replaceGuardSkillId = id;
  return this._replaceGuardSkillId > 0;
};

Game_Battler.prototype.replaceAttackSkillId = function() {
  var length = this.states().length;
  for (var i = 0; i < length; ++i) {
    var obj = this.states()[i];
    if (this.isReplaceAttackSkillId(obj)) return this._replaceAttackSkillId;
  }
  return 0;
};

Game_Battler.prototype.replaceGuardSkillId = function() {
  var length = this.states().length;
  for (var i = 0; i < length; ++i) {
    var obj = this.states()[i];
    if (this.isReplaceGuardSkillId(obj)) return this._replaceGuardSkillId;
  }
  return 0;
};

Game_Battler.prototype.weaponUnleashes = function() {
    var arr = [];
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.weaponUnleash && obj.weaponUnleash.length > 0) {
        arr = arr.concat(obj.weaponUnleash);
      }
    }
    return arr;
};

Game_Battler.prototype.guardUnleashes = function() {
    var arr = [];
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.guardUnleash && obj.guardUnleash.length > 0) {
        arr = arr.concat(obj.guardUnleash);
      }
    }
    return arr;
};

Game_Battler.prototype.weaponUnleashBonusRate = function(skillId) {
    var rate = 0;
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.weaponUnleashRate) {
        rate += obj.weaponUnleashRate['all'];
        rate += obj.weaponUnleashRate[skillId] || 0;
      }
    }
    return rate;
};

Game_Battler.prototype.guardUnleashBonusRate = function(skillId) {
    var rate = 0;
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.guardUnleashRate) {
        rate += obj.guardUnleashRate['all'] || 0;
        rate += obj.guardUnleashRate[skillId] || 0;
      }
    }
    return rate;
};

Game_Battler.prototype.getWeaponUnleashRate = function(unleash) {
  var skillId = unleash[0];
  var skill = $dataSkills[skillId];
  var item = $dataSkills[skillId];
  var rate = unleash[1];
  var evalLine = unleash[2];
  var a = this;
  var user = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  rate += this.weaponUnleashBonusRate(skillId);
  if (evalLine !== '') {
    try {
      eval(evalLine);
    } catch (e) {
      Yanfly.Util.displayError(e, evalLine, 'WEAPON UNLEASH RATE ERROR');
    }
  }
  return rate;
};

Game_Battler.prototype.getGuardUnleashRate = function(unleash) {
  var skillId = unleash[0];
  var skill = $dataSkills[skillId];
  var item = $dataSkills[skillId];
  var rate = unleash[1];
  var evalLine = unleash[2];
  var a = this;
  var user = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
  rate += this.guardUnleashBonusRate(skillId)
  if (evalLine !== '') {
    try {
      eval(evalLine);
    } catch (e) {
      Yanfly.Util.displayError(e, evalLine, 'GUARD UNLEASH RATE ERROR');
    }
  }
  return rate;
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.replaceAttackSkillId = function() {
  var id = Game_Battler.prototype.replaceAttackSkillId.call(this);
  if (id > 0) return id;
  var length = this.equips().length;
  for (var i = 0; i < length; ++i) {
    var obj = this.equips()[i];
    if (this.isReplaceAttackSkillId(obj)) return this._replaceAttackSkillId;
  }
  if (this.isReplaceAttackSkillId(this.currentClass())) {
    return this._replaceAttackSkillId;
  }
  if (this.isReplaceAttackSkillId(this.actor())) {
    return this._replaceAttackSkillId;
  }
  return this._replaceAttackSkillId = 0;
};

Game_Actor.prototype.replaceGuardSkillId = function() {
  var id = Game_Battler.prototype.replaceGuardSkillId.call(this);
  if (id > 0) return id;
  var length = this.equips().length;
  for (var i = 0; i < length; ++i) {
    var obj = this.equips()[i];
    if (this.isReplaceGuardSkillId(obj)) return this._replaceGuardSkillId;
  }
  if (this.isReplaceGuardSkillId(this.currentClass())) {
    return this._replaceGuardSkillId;
  }
  if (this.isReplaceGuardSkillId(this.actor())) {
    return this._replaceGuardSkillId;
  }
  return this._replaceGuardSkillId = 0;
};

Game_Actor.prototype.weaponUnleashes = function() {
    var arr = Game_Battler.prototype.weaponUnleashes.call(this);
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.weaponUnleash && obj.weaponUnleash.length > 0) {
        arr = arr.concat(obj.weaponUnleash);
      }
    }
    if (this.currentClass().weaponUnleash.length > 0) {
      arr = arr.concat(this.currentClass().weaponUnleash);
    }
    if (this.actor().weaponUnleash.length > 0) {
      arr = arr.concat(this.actor().weaponUnleash);
    }
    return arr;
};

Game_Actor.prototype.guardUnleashes = function() {
    var arr = Game_Battler.prototype.guardUnleashes.call(this);
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.guardUnleash && obj.guardUnleash.length > 0) {
        arr = arr.concat(obj.guardUnleash);
      }
    }
    if (this.currentClass().guardUnleash.length > 0) {
      arr = arr.concat(this.currentClass().guardUnleash);
    }
    if (this.actor().guardUnleash.length > 0) {
      arr = arr.concat(this.actor().guardUnleash);
    }
    return arr;
};

Game_Actor.prototype.weaponUnleashBonusRate = function(skillId) {
  var rate = Game_Battler.prototype.weaponUnleashBonusRate.call(this, skillId);
  if (this.actor().weaponUnleashRate) {
    rate += this.actor().weaponUnleashRate['all'] || 0;
    rate += this.actor().weaponUnleashRate[skillId] || 0;
  }
  if (this.currentClass().weaponUnleashRate) {
    rate += this.currentClass().weaponUnleashRate['all'] || 0;
    rate += this.currentClass().weaponUnleashRate[skillId] || 0;
  }
  var length = this.equips().length;
  for (var i = 0; i < length; ++i) {
    var obj = this.equips()[i];
    if (obj && obj.weaponUnleashRate) {
      rate += obj.weaponUnleashRate['all'] || 0;
      rate += obj.weaponUnleashRate[skillId] || 0;
    }
  }
  return rate;
};

Game_Actor.prototype.guardUnleashBonusRate = function(skillId) {
  var rate = Game_Battler.prototype.guardUnleashBonusRate.call(this, skillId);
  if (this.actor().guardUnleashRate) {
    rate += this.actor().guardUnleashRate['all'] || 0;
    rate += this.actor().guardUnleashRate[skillId] || 0;
  }
  if (this.currentClass().guardUnleashRate) {
    rate += this.currentClass().guardUnleashRate['all'] || 0;
    rate += this.currentClass().guardUnleashRate[skillId] || 0;
  }
  var length = this.equips().length;
  for (var i = 0; i < length; ++i) {
    var obj = this.equips()[i];
    if (obj && obj.guardUnleashRate) {
      rate += obj.guardUnleashRate['all'] || 0;
      rate += obj.guardUnleashRate[skillId] || 0;
    }
  }
  return rate;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.replaceAttackSkillId = function() {
    var id = Game_Battler.prototype.replaceAttackSkillId.call(this);
    if (id > 0) return id;
    if (this.isReplaceAttackSkillId(this.enemy())) {
      return this._replaceAttackSkillId;
    }
    return this._replaceAttackSkillId = 0;
};

Game_Enemy.prototype.replaceGuardSkillId = function() {
    var id = Game_Battler.prototype.replaceGuardSkillId.call(this);
    if (id > 0) return id;
    if (this.isReplaceGuardSkillId(this.enemy())) {
      return this._replaceGuardSkillId;
    }
    return this._replaceGuardSkillId = 0;
};

Game_Enemy.prototype.weaponUnleashes = function() {
    var arr = Game_Battler.prototype.weaponUnleashes.call(this);
    if (this.enemy().weaponUnleash.length > 0) {
      arr = arr.concat(this.enemy().weaponUnleash);
    }
    return arr;
};

Game_Enemy.prototype.guardUnleashes = function() {
    var arr = Game_Battler.prototype.guardUnleashes.call(this);
    if (this.enemy().guardUnleash.length > 0) {
      arr = arr.concat(this.enemy().guardUnleash);
    }
    return arr;
};

//=============================================================================
// Game_Action
//=============================================================================

Game_Action.prototype.processUnleash = function() {
    if (!this.subject()) return;
    if (!this.item()) return;
    if (!this.isSkill()) return this.subject().clearReplaceAttackGuard();;
    var id = this.item().id;
    if (id === this.subject().attackSkillId()) this.processWeaponUnleash();
    if (id === this.subject().guardSkillId()) this.processGuardUnleash();
    this.subject().clearReplaceAttackGuard();
};

Game_Action.prototype.processWeaponUnleash = function() {
    var unleashes = this.subject().weaponUnleashes();
    if (unleashes.length <= 0) return;
    this.switchUnleashSkill(unleashes, true);
};

Game_Action.prototype.processGuardUnleash = function() {
    var unleashes = this.subject().guardUnleashes();
    if (unleashes.length <= 0) return;
    this.switchUnleashSkill(unleashes, false);
};

Game_Action.prototype.switchUnleashSkill = function(unleashes, isWeapon) {
    var length = unleashes.length;
    for (var i = 0; i < length; ++i) {
      var unleash = unleashes[i];
      if (unleash.length < 3) continue;
      var skillId = unleash[0];
      var skill = $dataSkills[skillId];
      if (!skill) continue;
      if (!this.subject().canUse(skill)) continue;
      if (isWeapon) {
        var rate = this.subject().getWeaponUnleashRate(unleash);
      } else {
        var rate = this.subject().getGuardUnleashRate(unleash);
      }
      if (Math.random() > rate) continue;
      this.setSkill(skillId);
      return;
    }
};

Yanfly.WUL.Game_Action_makeTargets = Game_Action.prototype.makeTargets;
Game_Action.prototype.makeTargets = function() {
  if (!this._forcing && this.subject().isConfused()) {
    return this.makeConfusionTargets();
  } else {
    return Yanfly.WUL.Game_Action_makeTargets.call(this);
  }
};

Game_Action.prototype.makeConfusionTargets = function() {
  if (this.isForOne()) return [this.confusionTarget()];
  switch (this.subject().confusionLevel()) {
  case 1:
    if (this.isForAll()) {
      return this.opponentsUnit().aliveMembers();
    } else {
      return this.opponentsUnit().randomTarget();
    }
  case 2:
    if (this.isForAll()) {
      if (Math.randomInt(2) === 0) return this.opponentsUnit().aliveMembers();
      return this.friendsUnit().aliveMembers();
    } else {
      if (Math.randomInt(2) === 0) return this.opponentsUnit().randomTarget();
      return this.friendsUnit().randomTarget();
    }
  default:
    if (this.isForAll()) {
      return this.friendsUnit().aliveMembers();
    } else {
      return this.friendsUnit().randomTarget();
    }
  }
};

//=============================================================================
// Window_ActorCommand
//=============================================================================

Yanfly.WUL.Window_ActorCommand_addAttackCommand =
    Window_ActorCommand.prototype.addAttackCommand;
Window_ActorCommand.prototype.addAttackCommand = function() {
    Yanfly.WUL.Window_ActorCommand_addAttackCommand.call(this);
    var index = this.findSymbol('attack');
    if (index < 0) return;
    var name = $dataSkills[this._actor.attackSkillId()].commandAttackText;
    this._list[index].name = name;
};

Yanfly.WUL.Window_ActorCommand_addGuardCommand =
    Window_ActorCommand.prototype.addGuardCommand;
Window_ActorCommand.prototype.addGuardCommand = function() {
    Yanfly.WUL.Window_ActorCommand_addGuardCommand.call(this);
    var index = this.findSymbol('guard');
    if (index < 0) return;
    var name = $dataSkills[this._actor.guardSkillId()].commandGuardText;
    this._list[index].name = name;
};

//=============================================================================
// Scene_Battle
//=============================================================================

Yanfly.WUL.Scene_Battle_commandAttack = Scene_Battle.prototype.commandAttack;
Scene_Battle.prototype.commandAttack = function() {
    var skill = $dataSkills[BattleManager.actor().attackSkillId()];
    var action = BattleManager.inputtingAction();
    action.setSkill(skill.id);
    if (action.needsSelection()) {
      BattleManager.actor().setLastBattleSkill(skill);
      this.onSelectAction();
    } else {
      BattleManager.actor().setLastBattleSkill(skill);
      this.selectNextCommand();
    }
};

Yanfly.WUL.Scene_Battle_commandGuard = Scene_Battle.prototype.commandGuard;
Scene_Battle.prototype.commandGuard = function() {
    var skill = $dataSkills[BattleManager.actor().guardSkillId()];
    var action = BattleManager.inputtingAction();
    action.setSkill(skill.id);
    if (action.needsSelection()) {
      BattleManager.actor().setLastBattleSkill(skill);
      this.onSelectAction();
    } else {
      BattleManager.actor().setLastBattleSkill(skill);
      this.selectNextCommand();
    }
};

Yanfly.WUL.Scene_Battle_onActorCancel = Scene_Battle.prototype.onActorCancel;
Scene_Battle.prototype.onActorCancel = function() {
  Yanfly.WUL.Scene_Battle_onActorCancel.call(this);
  if (this.isAnyInputWindowActive()) return;
  if (['attack', 'guard'].contains(this._actorCommandWindow.currentSymbol())) {
    this._actorCommandWindow.activate();
  }
};

Yanfly.WUL.Scene_Battle_onEnemyCancel = Scene_Battle.prototype.onEnemyCancel;
Scene_Battle.prototype.onEnemyCancel = function() {
  Yanfly.WUL.Scene_Battle_onEnemyCancel.call(this);
  if (this.isAnyInputWindowActive()) return;
  if (['attack', 'guard'].contains(this._actorCommandWindow.currentSymbol())) {
    this._actorCommandWindow.activate();
  }
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

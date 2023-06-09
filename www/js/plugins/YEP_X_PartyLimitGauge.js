﻿//=============================================================================
// Yanfly Engine Plugins - Skill Core Extension - Party Limit Gauge
// YEP_X_PartyLimitGauge.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_PartyLimitGauge = true;

var Yanfly = Yanfly || {};
Yanfly.PLG = Yanfly.PLG || {};
Yanfly.PLG.version = 1.09;

//=============================================================================
 /*:
 * @plugindesc v1.09 队伍限制槽☁️
 * @author Yanfly Engine Plugins
 *
 * @param ---全局---
 * @default
 *
 * @param Gauge Increments
 * @text Gauge增量
 * @desc How much is each gauge increment?
 * @default 100
 *
 * @param Party Text Size
 * @text 队伍文本大小
 * @desc Text size used for the Party Gauge.
 * Default: 28
 * @default 28
 *
 * @param Draw Cost Icon
 * @text 绘制成本图标
 * @desc Draw the cost icon for Party Limit costs?
 * NO - false     YES - true
 * @default true
 *
 * @param Cost Color
 * @text 成本颜色
 * @desc The text color used for Party Limit costs.
 * @default 6
 *
 * @param Cost Format
 * @text 成本格式
 * @desc The text format used for Party Limit costs.
 * %1 - Cost     %2 - Current     %3 - Max
 * @default %1
 *
 * @param Cost Font Size
 * @text 成本字体大小
 * @desc The text font size used for Party Limit costs.
 * Default: 28
 * @default 20
 *
 * @param ---队伍---
 * @default
 *
 * @param Show Party Gauge
 * @text 显示队伍槽
 * @desc Show the player's party gauge in battle?
 * NO - false     YES - true
 * @default true
 *
 * @param Per Party Member
 * @text 每位队友
 * @desc Amount of Party Limit Gauge Max granted per party member.
 * This is a formula.
 * @default 100
 *
 * @param Party Max Bonus
 * @text 队伍最大奖金
 * @desc This is a maximum bonus added independent of party size.
 * This is a formula.
 * @default 0
 *
 * @param Party Gauge X
 * @text 队伍槽X位置
 * @desc Formula for the gauge x position for the player party.
 * @default Graphics.boxWidth - width - 4
 *
 * @param Party Gauge Y
 * @text 队伍槽Y位置
 * @desc Formula for the gauge y position for the player party.
 * @default Graphics.boxHeight - statusHeight - height - 4
 *
 * @param Party Width
 * @text 队伍宽度
 * @desc Formula for the gauge width for the player party.
 * @default max.clamp(100, 400)
 *
 * @param Party Gauge Color 1
 * @text 队伍槽 颜色1
 * @desc Color 1 used for the Party Limit Gauge.
 * @default 14
 *
 * @param Party Gauge Color 2
 * @text 队伍槽 颜色2
 * @desc Color 2 used for the Party Limit Gauge.
 * @default 6
 *
 * @param Party Gauge Icon
 * @text 队伍槽图标
 * @desc Icon used for the player party.
 * @default 310
 *
 * @param Party Icon Align
 * @text 队伍图标对齐
 * @desc Where do you want the icon to be aligned?
 * left     center     right
 * @default right
 *
 * @param Party Text Buffer X
 * @text 队伍文本缓冲区X
 * @desc How much do you want to buffer the text X by?
 * @default 0
 *
 * @param Party Text Buffer Y
 * @text 队伍文本缓冲区Y
 * @desc How much do you want to buffer the text Y by?
 * @default 8
 *
 * @param ---敌群---
 * @default
 *
 * @param Show Troop Gauge
 * @text 显示敌人条
 * @desc Show the enemy's party gauge in battle?
 * NO - false     YES - true
 * @default true
 *
 * @param Per Troop Member
 * @text 每名敌人
 * @desc Amount of Party Limit Gauge Max granted per enemy member.
 * This is a formula.
 * @default 100
 *
 * @param Troop Max Bonus
 * @text 敌人最高奖金
 * @desc This is a maximum bonus added independent of troop size.
 * This is a formula.
 * @default 0
 *
 * @param Troop Gauge X
 * @text 部队仪表X
 * @desc Formula for the gauge x position for the enemy party.
 * @default 4
 *
 * @param Troop Gauge Y
 * @text 部队仪表Y
 * @desc Formula for the gauge y position for the enemy party.
 * @default Graphics.boxHeight - statusHeight - height - 4
 *
 * @param Troop Width
 * @text 部队宽度
 * @desc Formula for the gauge width for the enemy party.
 * @default max.clamp(100, 400)
 *
 * @param Troop Gauge Color 1
 * @text 部队仪表颜色1
 * @desc Color 1 used for the Party Limit Gauge.
 * @default 10
 *
 * @param Troop Gauge Color 2
 * @text 部队仪表颜色2
 * @desc Color 2 used for the Party Limit Gauge.
 * @default 2
 *
 * @param Troop Gauge Icon
 * @text 部队仪表图标
 * @desc Icon used for the player party.
 * @default 309
 *
 * @param Troop Icon Align
 * @text 部队图标对齐
 * @desc Where do you want the icon to be aligned?
 * left     center     right
 * @default left
 *
 * @param Troop Text Buffer X
 * @text 部队文本缓冲区X
 * @desc How much do you want to buffer the text X by?
 * @default 0
 *
 * @param Troop Text Buffer Y
 * @text 部队文本缓冲区Y
 * @desc How much do you want to buffer the text Y by?
 * @default 8
 *
 * @param ---极限增益---
 * @default
 *
 * @param Reset Gauge
 * @text 重置队伍限制
 * @desc Reset the Party Limit Gauge each battle?
 * NO - false     YES - true
 * @default false
 *
 * @param Battle Start
 * @text 战斗开始
 * @desc Formula for how much Party Limit Gauge is gained
 * at the start of each battle.
 * @default 0
 *
 * @param Take HP Damage
 * @text 受到HP伤害
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever a party member takes HP damage.
 * @default Math.floor(25 * damage / user.mhp).clamp(10, 25)
 *
 * @param Deal HP Damage
 * @text 造成HP伤害
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever a party member deals HP damage.
 * @default Math.floor(10 * damage / target.mhp).clamp(5, 10)
 *
 * @param Heal HP Damage
 * @text 治疗HP伤害
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever a party member heals HP.
 * @default Math.floor(-5 * damage / target.mhp).clamp(3, 5)
 *
 * @param Take MP Damage
 * @text 受到MP伤害
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever a party member takes MP damage.
 * @default Math.floor(25 * damage / user.mmp).clamp(10, 25)
 *
 * @param Deal MP Damage
 * @text 造成MP伤害
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever a party member deals MP damage.
 * @default Math.floor(10 * damage / target.mmp).clamp(5, 10)
 *
 * @param Heal MP Damage
 * @text 治疗MP伤害
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever a party member heals MP.
 * @default Math.floor(-5 * damage / target.mmp).clamp(3, 5)
 *
 * @param Gain State
 * @text 给予状态
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever a party member receives a state from a foe.
 * @default 5
 *
 * @param Deal State
 * @text 造成状态
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever a party member inflicts a state on a foe.
 * @default 3
 *
 * @param Killed Ally
 * @text 被杀的队友
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever a party member is killed.
 * @default 50
 *
 * @param Killed Foe
 * @text 杀死敌人
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever a foe is killed.
 * @default 5
 *
 * @param Win Battle
 * @text 胜仗
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever the player party wins the battle.
 * @default 10
 *
 * @param Flee Battle
 * @text 逃离战场
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever the player party flees the battle.
 * @default -100
 *
 * @param Lose Battle
 * @text 败仗
 * @desc Formula for how much Party Limit Gauge is gained
 * whenever the player party loses the battle.
 * @default -1000
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * 这个插件需要YEP_SkillCore。确保它放在YEP_SkillCore下面
 *
 * 这个插件开启了队伍限制槽，适用于玩家和敌方。这些槽将会根据行动增加
 * 和减少。你可以用插件参数更改增长数值。只要队伍充满槽，队伍成员
 * 就可以使用更加强大的战斗行动
 *
 * ============================================================================
 * Instructions - Limit Gain
 * ============================================================================
 *
 * 这里有很多增加队伍限制槽的方式，你可以用插件参数调整，
 * 这里有一个详细的参数说明
 *
 *   Reset Gauge
 *   如果设置为true,队伍限制槽将会在战斗后重置为空。如果是false，
 *   队伍限制槽将会保留。敌方限制槽将总是为空。
 *
 *   Battle Start
 *   - This determines how much of the Party Limit Gauge will be gained when a
 *   new battle has been started.开始战斗时增加数值
 *
 *   Take HP Damage
 *   - This is how much the Party Limit Gauge will increase when an ally takes
 *   HP damage dealt by the opposing team.遭受伤害时增加数值
 *
 *   Deal HP Damage
 *   - This is how much the Party Limit Gauge will increase when an ally deals
 *   HP damage to the opposing team.造成伤害时增加数值
 *
 *   Heal HP Damage
 *   - This is how much the Party Limit Gauge will increase whenever an ally
 *   receives HP healing through actions. Healing done through trait effects
 *   will not apply here.治疗血量时增加数值。通过特性影响治疗不在此范围
 *
 *   Take MP Damage
 *   - This is how much the Party Limit Gauge will increase when an ally takes
 *   MP damage dealt by the opposing team.遭受魔法损失时增加数值
 *
 *   Deal MP Damage
 *   - This is how much the Party Limit Gauge will increase when an ally deals
 *   MP damage to the opposing team.造成魔法损失时增加数值
 *
 *   Heal MP Damage
 *   - This is how much the Party Limit Gauge will increase whenever an ally
 *   receives MP healing through actions. Healing done through trait effects
 *   will not apply here.治疗魔法时增加数值。通过特性影响治疗不在此范围
 *
 *   Gain State
 *   - This is how much the Party Limit Gauge will increase whenever an ally
 *   receives a non-death state from the opposing team.获得状态时增加数值
 *
 *   Deal State
 *   - This is how much the Party Limit Gauge will increase whenever an ally
 *   inflicts a non-death state to the opposing team.给对方施加状态增加数值
 *
 *   Killed Ally
 *   - This is how much the Party Limit Gauge will increase whenever an ally
 *   dies in battle.友军死亡增加数值
 *
 *   Killed Foe
 *   - This is how much the Party Limit Gauge will increase whenever a foe
 *   dies in battle.敌军死亡增加数值
 *
 *   Win Battle
 *   - This is how much the Party Limit Gauge will increase for the player's
 *   party when the player wins a battle.战斗胜利增加数值
 *
 *   Flee Battle
 *   - This is how much the Party Limit Gauge will increase for the player's
 *   party when the player escapes a battle.战斗逃跑增加数值
 *
 *   Lose Battle
 *   - This is how much the Party Limit Gauge will increase for the player's
 *   party when the player loses a battle.战斗失败增加数值
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * 你可以使用下面的标签来调整
 *
 * Skill Notetags:
 *
 *   <Party Limit Cost: x>
 *   Adds a Party Limit Gauge cost to this skill. This skill will require x
 *   of the Party Limit Gauge to be able to use it.消耗队伍限制槽数值
 *
 *   <Party Limit Cost: x%>
 *   Adds a party Limit Gauge cost to this skill equal to x% of the total max
 *   gauge size of the battler's party max limit gauge size. The cost is always
 *   rounded upward.消耗队伍限制槽数值百分比，这个数值是向上取值
 *
 * Skill and Item Notetags:
 *
 *   <Ally Party Limit Gauge: +x>
 *   <Ally Party Limit Gauge: -x>
 *   使用技能队伍限制槽增加或减少x
 *
 *   <Foe Party Limit Gauge: +x>
 *   <Foe Party Limit Gauge: -x>
 *   使用技能敌军限制槽增加或减少x
 *
 * Actor and Enemy Notetag:
 *
 *   <Party Limit: x>
 *   当角色在战斗队伍时，增加队伍限制槽x，如果没有使用这个标签，
 *   则采用插件默认设置
 *
 * Actor, Class, Enemy, Weapon, Armor, and State Notetags:
 *
 *   <Party Limit: +x>
 *   <Party Limit: -x>
 *   如果角色装备有特点武器，装备或者处于特点状态，则增加或者减少
 *   队伍限制槽
 * 
 *   <Party Limit Cost: x%>
 *   队伍限制槽通过这个角色花费x%
 *
 * ============================================================================
 * Lunatic Mode - Custom Party Limit Changes
 * ============================================================================
 *
 * For those with JavaScript experience, you can implement conditional costs
 * for the Party Limit costs of skills, how much is gained or lost for user
 * and/or target(s).
 *
 * Skill Notetags:
 *
 *   <Custom Party Limit Cost>
 *    cost = user.friendsUnit().members().length;
 *   </Custom Party Limit Cost>
 *   The 'cost' variable will reference the original cost of the skill, and can
 *   be modified to add more or less than original amount. The cost value will
 *   be the finalized amount for the skill but rounded upward if the cost is a
 *   decimal value. This is the increment cost.
 *
 *   <Custom Ally Party Limit Gauge>
 *    value += user.level;
 *   </Custom Ally Party Limit Gauge>
 *   The 'value' variable determines how much of the gauge will be added to the
 *   user's Party Limit Gauge. This is not an increment value but the raw value
 *   added to the amount.
 *
 *   <Custom Foe Party Limit Gauge>
 *    value -= target.level;
 *   </Custom Foe Party Limit Gauge>
 *   The 'value' variable determines how much of the gauge will be added to the
 *   target's Party Limit Gauge. This is not an increment value but the raw
 *   value added to the amount.
 *
 * ============================================================================
 * Lunatic Mode - New JavaScript Functions
 * ============================================================================
 *
 * Those using JavaScript functions can make some use out of some new functions
 * added with this plugin. Whenever the word "unit" appears, replace it with
 * either $gameParty or $gameTroop depending on which you want to affect.
 *
 * unit.partyLimitGauge()
 * - Returns the raw value of the unit's Party Limit Gauge.
 *
 * unit.partyLimitGaugeMax()
 * - Returns the raw maximum cap of the Party Limit Gauge.
 *
 * unit.setPartyLimitGauge(x)
 * - Sets the raw value of the Party Limit Gauge to x for that unit.
 *
 * unit.gainPartyLimitGauge(x)
 * - Causes the unit to gain x Party Limit Gauge in raw value.
 *
 * unit.losePartyLimitGauge(x)
 * - Causes the unit to lose x Party Limit Gauge in raw value.
 *
 * unit.partyLimitGaugeCurrent()
 * - Returns the unit's number of usable increments of the Party Limit Gauge.
 *
 * unit.partyLimitGaugeIncrements()
 * - Returns the unit's number of max increments of the Party Limit Gauge.
 *
 * unit.setPartyLimitGaugeIncrement(x)
 * - Sets the unit's Party Limit Gauge to exactly x increments.
 *
 * unit.gainPartyLimitGaugeIncrement(x)
 * - Causes the unit to gain exactly x increments of the Party Limit Gauge.
 *
 * unit.losePartyLimitGaugeIncrement(x)
 * - Causes the unit to lose exactly x increments of the Party Limit Gauge.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * You can use plugin commands inside events to alter the amount of Party Limit
 * Gauge the player's party or enemy party has.
 *
 * Plugin Command
 *
 *   SetPartyLimitGaugeValue x
 *   SetTroopLimitGaugeValue x
 *   - Sets the player party's or enemy party's raw Party Limit Gauge
 *   value to x.
 *
 *   GainPartyLimitGaugeValue x
 *   GainTroopLimitGaugeValue x
 *   - The player party's or enemy party's raw Party Limit Gauge gains
 *   x value.
 *
 *   LosePartyLimitGaugeValue x
 *   LoseTroopLimitGaugeValue x
 *   - The player party's or enemy party's raw Party Limit Gauge gains
 *   x value.
 *
 *   SetPartyLimitGaugeIncrement x
 *   SetTroopLimitGaugeIncrement x
 *   - Sets the player party's or enemy party's Party Limit Gauge value
 *   to x increments.
 *
 *   GainPartyLimitGaugeIncrement x
 *   GainTroopLimitGaugeIncrement x
 *   - The player party's or enemy party's Party Limit Gauge gains
 *   x increments.
 *
 *   LosePartyLimitGaugeIncrement x
 *   LoseTroopLimitGaugeIncrement x
 *   - The player party's or enemy party's Party Limit Gauge gains
 *   x increments.
 *
 *   ShowPartyLimitGauge
 *   HidePartyLimitGauge
 *   ShowTroopLimitGauge
 *   HideTroopLimitGauge
 *   - Shows or hides the Party/Troop Limit Gauge.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.09:
 * - Lunatic Mode fail safes added.
 *
 * Version 1.08:
 * - Calculations for Party Limit Gauge increasing for HP and MP values are now
 * calculated based on the actual HP and MP damage taken as per the results
 * rather than based off of the raw incoming value (in the event that raw value
 * gets modified as per the effects of other plugins).
 *
 * Version 1.07:
 * - Fixed a bug that didn't apply the 'Party Max Bonus' parameter properly.
 *
 * Version 1.06:
 * - Fixed a bug that caused some of the Plugin Commands to not work properly.
 *
 * Version 1.05:
 * - Fixed a bug that caused the enemy troops to have the same settings as the
 * player team.
 *
 * Version 1.04:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.03:
 * - Fixed a bug with some damage formulas being unable to use 'user'.
 *
 * Version 1.02a:
 * - Fixed a bug that caused certain notetags to crash the game.
 * - Battle Engine Core's 'Hide Battle HUD' will now hide the Party Limit Gauge
 * as well.
 *
 * Version 1.01:
 * - Added 'ShowPartyLimitGauge', 'HidePartyLimitGauge', 'ShowTroopLimitGauge',
 * 'HideTroopLimitGauge' Plugin Commands to hide/show the Party Limit Gauges
 * while midgame.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.YEP_SkillCore) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_PartyLimitGauge');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.PLGIncrements = Number(Yanfly.Parameters['Gauge Increments']);
Yanfly.Param.PLGIncrements = Math.max(1, Yanfly.Param.PLGIncrements);
Yanfly.Param.PLGIncrements = Math.floor(Yanfly.Param.PLGIncrements);
Yanfly.Param.PLGTextSize = Number(Yanfly.Parameters['Party Text Size']);
Yanfly.Param.PLGDrawIcon = eval(String(Yanfly.Parameters['Draw Cost Icon']));
Yanfly.Param.PLGCostColor = Number(Yanfly.Parameters['Cost Color']);
Yanfly.Param.PLGCostFmt = String(Yanfly.Parameters['Cost Format']);
Yanfly.Param.PLGCostSize = Number(Yanfly.Parameters['Cost Font Size']);

Yanfly.Param.PLGShowParty = eval(String(Yanfly.Parameters['Show Party Gauge']));
Yanfly.Param.PLGPerParty = String(Yanfly.Parameters['Per Party Member']);
Yanfly.Param.PLGPartyBonus = String(Yanfly.Parameters['Party Max Bonus']);
Yanfly.Param.PLGPartyX = String(Yanfly.Parameters['Party Gauge X']);
Yanfly.Param.PLGPartyY = String(Yanfly.Parameters['Party Gauge Y']);
Yanfly.Param.PLGPartyWidth = String(Yanfly.Parameters['Party Width']);
Yanfly.Param.PLGPartyColor1 = Number(Yanfly.Parameters['Party Gauge Color 1']);
Yanfly.Param.PLGPartyColor2 = Number(Yanfly.Parameters['Party Gauge Color 2']);
Yanfly.Param.PLGPartyIcon = Number(Yanfly.Parameters['Party Gauge Icon']);
Yanfly.Param.PLGPartyAlign = String(Yanfly.Parameters['Party Icon Align']);
Yanfly.Param.PLGPartyBufferX = Number(Yanfly.Parameters['Party Text Buffer X']);
Yanfly.Param.PLGPartyBufferY = Number(Yanfly.Parameters['Party Text Buffer Y']);

Yanfly.Param.PLGShowTroop = eval(String(Yanfly.Parameters['Show Troop Gauge']));
Yanfly.Param.PLGPerTroop = String(Yanfly.Parameters['Per Troop Member']);
Yanfly.Param.PLGTroopBonus = String(Yanfly.Parameters['Troop Max Bonus']);
Yanfly.Param.PLGTroopX = String(Yanfly.Parameters['Troop Gauge X']);
Yanfly.Param.PLGTroopY = String(Yanfly.Parameters['Troop Gauge Y']);
Yanfly.Param.PLGTroopWidth = String(Yanfly.Parameters['Troop Width']);
Yanfly.Param.PLGTroopColor1 = Number(Yanfly.Parameters['Troop Gauge Color 1']);
Yanfly.Param.PLGTroopColor2 = Number(Yanfly.Parameters['Troop Gauge Color 2']);
Yanfly.Param.PLGTroopIcon = Number(Yanfly.Parameters['Troop Gauge Icon']);
Yanfly.Param.PLGTroopAlign = String(Yanfly.Parameters['Troop Icon Align']);
Yanfly.Param.PLGTroopBufferX = Number(Yanfly.Parameters['Troop Text Buffer X']);
Yanfly.Param.PLGTroopBufferY = Number(Yanfly.Parameters['Troop Text Buffer Y']);

Yanfly.Param.PLGReset = eval(String(Yanfly.Parameters['Reset Gauge']));
Yanfly.Param.PLGBattleStart = String(Yanfly.Parameters['Battle Start']);
Yanfly.Param.PLGTakeHpDmg = String(Yanfly.Parameters['Take HP Damage']);
Yanfly.Param.PLGDealHpDmg = String(Yanfly.Parameters['Deal HP Damage']);
Yanfly.Param.PLGHealHpDmg = String(Yanfly.Parameters['Heal HP Damage']);
Yanfly.Param.PLGTakeMpDmg = String(Yanfly.Parameters['Take MP Damage']);
Yanfly.Param.PLGDealMpDmg = String(Yanfly.Parameters['Deal MP Damage']);
Yanfly.Param.PLGHealMpDmg = String(Yanfly.Parameters['Heal MP Damage']);
Yanfly.Param.PLGGainState = String(Yanfly.Parameters['Gain State']);
Yanfly.Param.PLGDealState = String(Yanfly.Parameters['Deal State']);
Yanfly.Param.PLGKillAlly = String(Yanfly.Parameters['Killed Ally']);
Yanfly.Param.PLGKillFoe = String(Yanfly.Parameters['Killed Foe']);
Yanfly.Param.PLGBattleWin = String(Yanfly.Parameters['Win Battle']);
Yanfly.Param.PLGBattleFlee = String(Yanfly.Parameters['Flee Battle']);
Yanfly.Param.PLGBattleLose = String(Yanfly.Parameters['Lose Battle']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.PLG.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.PLG.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_X_PartyLimitGauge) {
    this.processPLGNotetags1($dataActors, true);
    this.processPLGNotetags1($dataEnemies, false);
    this.processPLGNotetags2($dataActors);
    this.processPLGNotetags2($dataClasses);
    this.processPLGNotetags2($dataEnemies);
    this.processPLGNotetags2($dataWeapons);
    this.processPLGNotetags2($dataArmors);
    this.processPLGNotetags2($dataStates);
    this.processPLGNotetags3($dataSkills);
    this.processPLGNotetags3($dataItems);
    Yanfly._loaded_YEP_X_PartyLimitGauge = true;
  }
  return true;
};

DataManager.processPLGNotetags1 = function(group, isActor) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    if (isActor) {
      obj.partyLimitGaugeMax = Yanfly.Param.PLGPerParty;
    } else {
      obj.partyLimitGaugeMax = Yanfly.Param.PLGPerTroop;
    }

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:PARTY LIMIT):[ ](\d+)>/i)) {
        obj.partyLimitGaugeMax = String(RegExp.$1);
      }
    }
  }
};

DataManager.processPLGNotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.partyLimitGaugePlus = 0;
    obj.partyLimitGaugeRate = 1;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:PARTY LIMIT):[ ]([\+\-]\d+)>/i)) {
        obj.partyLimitGaugePlus = parseInt(RegExp.$1);
      } else if (line.match(/<(?:PARTY LIMIT COST):[ ](\d+)([%％])>/i)) {
        obj.partyLimitGaugeRate = parseFloat(RegExp.$1) * 0.01;
      }
    }
  }
};

DataManager.processPLGNotetags3 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.partyLimitCost = 0;
    obj.partyLimitCostPer = 0;
    obj.partyLimitCostEval = '';
    obj.partyLimitGainAlly = 0;
    obj.partyLimitGainAllyEval = '';
    obj.partyLimitGainFoe = 0;
    obj.partyLimitGainFoeEval = '';
    var evalMode = 'none';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:PARTY LIMIT COST):[ ](\d+)>/i)) {
        obj.partyLimitCost = parseInt(RegExp.$1);
      } else if (line.match(/<(?:PARTY LIMIT COST):[ ](\d+)([%％])>/i)) {
        obj.partyLimitCostPer = parseFloat(RegExp.$1) * 0.01;
      } else if (line.match(/<(?:CUSTOM PARTY LIMIT COST)>/i)) {
        evalMode = 'custom party limit cost';
      } else if (line.match(/<\/(?:CUSTOM PARTY LIMIT COST)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'custom party limit cost') {
        obj.partyLimitCostEval = obj.partyLimitCostEval + line + '\n';
      } else if (line.match(/<(?:ALLY PARTY LIMIT GAUGE):[ ]([\+\-]\d+)>/i)) {
        obj.partyLimitGainAlly = parseInt(RegExp.$1);
      } else if (line.match(/<(?:FOE PARTY LIMIT GAUGE):[ ]([\+\-]\d+)>/i)) {
        obj.partyLimitGainFoe = parseInt(RegExp.$1);
      } else if (line.match(/<(?:CUSTOM ALLY PARTY LIMIT GAUGE)>/i)) {
        evalMode = 'custom ally party limit gauge';
      } else if (line.match(/<\/(?:CUSTOM ALLY PARTY LIMIT GAUGE)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'custom ally party limit gauge') {
        obj.partyLimitGainAllyEval = obj.partyLimitGainAllyEval + line + '\n';
      } else if (line.match(/<(?:CUSTOM FOE PARTY LIMIT GAUGE)>/i)) {
        evalMode = 'custom foe party limit gauge';
      } else if (line.match(/<\/(?:CUSTOM FOE PARTY LIMIT GAUGE)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'custom foe party limit gauge') {
        obj.partyLimitGainFoeEval = 
          obj.partyLimitGainFoeEval + line + '\n';
      }
    }
  }
};

//=============================================================================
// BattleManager
//=============================================================================

Yanfly.PLG.BattleManager_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result) {
    if (result === 0) {
      var formula = Yanfly.Param.PLGBattleWin;
    } else if (result === 1) {
      var formula = Yanfly.Param.PLGBattleFlee;
    } else {
      var formula = Yanfly.Param.PLGBattleLose;
    }
    $gameParty.processPartyLimitGaugeEval(formula, null, null, null, 0);
    Yanfly.PLG.BattleManager_endBattle.call(this, result);
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.PLG.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.PLG.Game_System_initialize.call(this);
    this.initPartyLimitGauge();
};

Game_System.prototype.initPartyLimitGauge = function() {
    this._showPartyLimitGauge = Yanfly.Param.PLGShowParty;
    this._showTroopLimitGauge = Yanfly.Param.PLGShowTroop;
};

Game_System.prototype.isShowPartyLimitGauge = function() {
    if (this._showPartyLimitGauge === undefined) this.initPartyLimitGauge();
    return this._showPartyLimitGauge;
};

Game_System.prototype.isShowTroopLimitGauge = function() {
    if (this._showTroopLimitGauge === undefined) this.initPartyLimitGauge();
    return this._showTroopLimitGauge;
};

Game_System.prototype.setShowPartyLimitGauge = function(value) {
    if (this._showPartyLimitGauge === undefined) this.initPartyLimitGauge();
    this._showPartyLimitGauge = value;
};

Game_System.prototype.setShowTroopLimitGauge = function(value) {
    if (this._showTroopLimitGauge === undefined) this.initPartyLimitGauge();
    this._showTroopLimitGauge = value;
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.PLG.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
Game_BattlerBase.prototype.refresh = function() {
    this._partyLimitGaugeMax = undefined;
    Yanfly.PLG.Game_BattlerBase_refresh.call(this);
};

Yanfly.PLG.Game_BattlerBase_canPaySkillCost =
    Game_BattlerBase.prototype.canPaySkillCost;
Game_BattlerBase.prototype.canPaySkillCost = function(skill) {
    if (!this.canPayPartyLimitCost(skill)) return false;
    return Yanfly.PLG.Game_BattlerBase_canPaySkillCost.call(this, skill);
};

Game_BattlerBase.prototype.canPayPartyLimitCost = function(skill) {
    var unit = this.friendsUnit();
    return unit.partyLimitGaugeCurrent() >= this.partyLimitCost(skill);
};

Game_BattlerBase.prototype.partyLimitCost = function(skill) {
    var cost = skill.partyLimitCost;
    var unit = this.friendsUnit();
    var increments = unit.partyLimitGaugeIncrements();
    var item = skill;
    var a = this;
    var user = this;
    var subject = this;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    cost += Math.ceil(increments * skill.partyLimitCostPer);
    var code = skill.partyLimitCostEval;
    try {
      eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'PARTY LIMIT COST ERROR');
    }
    return Math.ceil(cost * this.partyLimitCostRate());
};

Yanfly.PLG.Game_BattlerBase_paySkillCost =
    Game_BattlerBase.prototype.paySkillCost;
Game_BattlerBase.prototype.paySkillCost = function(skill) {
    Yanfly.PLG.Game_BattlerBase_paySkillCost.call(this, skill);
    this.payPartyLimitCost(skill);
};

Game_BattlerBase.prototype.payPartyLimitCost = function(skill) {
    var cost = this.partyLimitCost(skill);
    this.friendsUnit().payPartyLimitGauge(cost);
};

//=============================================================================
// Game_Battler
//=============================================================================

Game_Battler.prototype.basePartyLimitGaugeMax = function() {
    return 100;
};

Game_Battler.prototype.partyLimitGaugeMax = function() {
    if (this._partyLimitGaugeMax !== undefined) return this._partyLimitGaugeMax;
    var value = this.basePartyLimitGaugeMax();
    value += this.partyLimitGaugeMaxPlus();
    return this._partyLimitGaugeMax = value;
};

Game_Battler.prototype.partyLimitGaugeMaxPlus = function() {
    var value = 0;
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.partyLimitGaugePlus) value += obj.partyLimitGaugePlus;
    }
    return value;
};

Game_Battler.prototype.partyLimitCostRate = function() {
    var rate = 1;
    var length = this.states().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.states()[i];
      if (obj && obj.partyLimitGaugeRate !== undefined) {
        rate *= obj.partyLimitGaugeRate;
      }
    }
    return rate;
};

Yanfly.PLG.Game_Battler_addState = Game_Battler.prototype.addState;
Game_Battler.prototype.addState = function(stateId) {
  if ($gameParty.inBattle()) {
    var deathState = (stateId === this.deathStateId());
    var lifeState = this.isAlive();
    var affected = this.isStateAffected(stateId);
  }
  Yanfly.PLG.Game_Battler_addState.call(this, stateId);
  if ($gameParty.inBattle()) {
    var landed = this.isStateAffected(stateId);
    if (!deathState && !affected && landed) this.chargePlgByAddState();
    if (deathState && lifeState !== this.isAlive()) this.chargePlGByDeath();
  }
};

Game_Battler.prototype.chargePlgByAddState = function() {
    var user = BattleManager._subject;
    var target = this;
    if (user && target && user.isActor() && target.isActor()) return;
    if (user && target && user.isEnemy() && target.isEnemy()) return;
    if (target) {
      formula = Yanfly.Param.PLGGainState;
      var unit = target.friendsUnit();
      unit.processPartyLimitGaugeEval(formula, user, target, null, 0);
    }
    if (user) {
      formula = Yanfly.Param.PLGDealState;
      var unit = user.friendsUnit();
      unit.processPartyLimitGaugeEval(formula, user, target, null, 0);
    }
};

Game_Battler.prototype.chargePlGByDeath = function() {
    var user = BattleManager._subject;
    var target = this;
    if (user && target && user.isActor() && target.isActor()) return;
    if (user && target && user.isEnemy() && target.isEnemy()) return;
    if (target) {
      formula = Yanfly.Param.PLGKillAlly;
      var unit = target.friendsUnit();
      unit.processPartyLimitGaugeEval(formula, user, target, null, 0);
    }
    if (user) {
      formula = Yanfly.Param.PLGKillFoe;
      var unit = user.friendsUnit();
      unit.processPartyLimitGaugeEval(formula, user, target, null, 0);
    }
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.basePartyLimitGaugeMax = function() {
    var unit = this.friendsUnit();
    var a = this;
    var user = this;
    var subject = this;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var code = this.actor().partyLimitGaugeMax;
    try {
      return eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'BASE PARTY LIMIT GAUGE FORMULA ERROR');
      return 0;
    }
};

Game_Actor.prototype.partyLimitGaugeMaxPlus = function() {
    var value = Game_Battler.prototype.partyLimitGaugeMaxPlus.call(this);
    value += this.actor().partyLimitGaugePlus;
    value += this.currentClass().partyLimitGaugePlus;
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.partyLimitGaugePlus) value += obj.partyLimitGaugePlus;
    }
    return value;
};

Game_Actor.prototype.partyLimitCostRate = function() {
    var rate = Game_Battler.prototype.partyLimitCostRate.call(this);
    rate *= this.actor().partyLimitGaugeRate;
    rate *= this.currentClass().partyLimitGaugeRate;
    var length = this.equips().length;
    for (var i = 0; i < length; ++i) {
      var obj = this.equips()[i];
      if (obj && obj.partyLimitGaugeRate !== undefined) {
        rate *= obj.partyLimitGaugeRate;
      }
    }
    return rate;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.basePartyLimitGaugeMax = function() {
    var unit = this.friendsUnit();
    var a = this;
    var user = this;
    var subject = this;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var code = this.enemy().partyLimitGaugeMax;
    try {
      return eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'PARTY LIMIT GAUGE FORMULA MAX ERROR');
      return 0;
    }
};

Game_Enemy.prototype.partyLimitGaugeMaxPlus = function() {
    var value = Game_Battler.prototype.partyLimitGaugeMaxPlus.call(this);
    value += this.enemy().partyLimitGaugePlus;
    return value;
};

Game_Enemy.prototype.partyLimitCostRate = function() {
    var rate = Game_Battler.prototype.partyLimitCostRate.call(this);
    rate *= this.enemy().partyLimitGaugeRate;
    return rate;
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.PLG.Game_Action_executeHpDamage = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function(target, value) {
    Yanfly.PLG.Game_Action_executeHpDamage.call(this, target, value);
    var user = this.subject();
    var dmg = target.result().hpDamage;
    if (dmg > 0) {
      target.friendsUnit().processPartyLimitGaugeEval(Yanfly.Param.PLGTakeHpDmg,
        user, target, this.item(), dmg);
      user.friendsUnit().processPartyLimitGaugeEval(Yanfly.Param.PLGDealHpDmg,
        user, target, this.item(), dmg);
    } else {
      target.friendsUnit().processPartyLimitGaugeEval(Yanfly.Param.PLGHealHpDmg,
        user, target, this.item(), dmg);
    }
};

Yanfly.PLG.Game_Action_executeMpDamage = Game_Action.prototype.executeMpDamage;
Game_Action.prototype.executeMpDamage = function(target, value) {
    Yanfly.PLG.Game_Action_executeMpDamage.call(this, target, value);
    var user = this.subject();
    var dmg = target.result().mpDamage;
    if (dmg > 0) {
      target.friendsUnit().processPartyLimitGaugeEval(Yanfly.Param.PLGTakeMpDmg,
        user, target, this.item(), dmg);
      user.friendsUnit().processPartyLimitGaugeEval(Yanfly.Param.PLGDealMpDmg,
        user, target, this.item(), dmg);
    } else {
      target.friendsUnit().processPartyLimitGaugeEval(Yanfly.Param.PLGHealMpDmg,
        user, target, this.item(), dmg);
    }
};

Yanfly.PLG.Game_Action_applyItemUserEffect =
    Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function(target) {
    Yanfly.PLG.Game_Action_applyItemUserEffect.call(this, target);
    if (this.item()) this.applyItemPartyGaugeEffect(target);
};

Game_Action.prototype.applyItemPartyGaugeEffect = function(target) {
    var unit = this.subject().friendsUnit();
    var value = this.item().partyLimitGainAlly;
    value = this.partyGaugeGainEval(this.item().partyLimitGainAllyEval,
      this.subject(), target, value);
    unit.gainPartyLimitGauge(value);
    var unit = this.subject().opponentsUnit();
    var value = this.item().partyLimitGainFoe;
    value = this.partyGaugeGainEval(this.item().partyLimitGainFoeEval,
      this.subject(), target, value);
    unit.gainPartyLimitGauge(value);
};

Game_Action.prototype.partyGaugeGainEval = function(f1, c1, c2, value) {
    if (f1 === '') return value;
    var item = this.item();
    var skill = this.item();
    var user = c1;
    var a = c1;
    var attacker = c1;
    var target = c2;
    var b = c2;
    var defender = c2;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    try {
      eval(f1);
    } catch (e) {
      Yanfly.Util.displayError(e, f1, 'PARTY GAUGE GAIN EVAL ERROR');
    }
    return value;
};

//=============================================================================
// Game_Unit
//=============================================================================

Yanfly.PLG.Game_Unit_initialize = Game_Unit.prototype.initialize;
Game_Unit.prototype.initialize = function() {
    Yanfly.PLG.Game_Unit_initialize.call(this);
    this.initPartyLimitGauge();
};

Yanfly.PLG.Game_Unit_onBattleStart = Game_Unit.prototype.onBattleStart;
Game_Unit.prototype.onBattleStart = function() {
    Yanfly.PLG.Game_Unit_onBattleStart.call(this);
    this._needPartyLimitRefresh = true;
    if (this.resetPartyLimitGauge()) this.setPartyLimitGauge(0);
    this.processPartyLimitGaugeEval(Yanfly.Param.PLGBattleStart);
};

Game_Unit.prototype.resetPartyLimitGauge = function() {
    return true;
};

Game_Unit.prototype.initPartyLimitGauge = function() {
    this._partyLimit = 0;
    this.clearNeedPartyLimitRefresh();
};

Game_Unit.prototype.isNeedPartyLimitRefresh = function() {
    return this._needPartyLimitRefresh;
};

Game_Unit.prototype.clearNeedPartyLimitRefresh = function() {
    this._needPartyLimitRefresh = false;
    this._partyLimitGaugeMaxBonus = undefined;
};

Game_Unit.prototype.partyLimitGauge = function() {
    if (this._partyLimit === undefined) this.initPartyLimitGauge();
    return this._partyLimit;
};

Game_Unit.prototype.setPartyLimitGauge = function(value) {
    this._partyLimitGaugeMaxBonus = undefined;
    if (this._partyLimit === undefined) this.initPartyLimitGauge();
    value = Math.floor(value);
    var max = this.partyLimitGaugeIncrements();
    max *= Yanfly.Param.PLGIncrements;
    this._partyLimit = value.clamp(0, max);
    this._needPartyLimitRefresh = true;
};

Game_Unit.prototype.gainPartyLimitGauge = function(value) {
    if (this._partyLimit === undefined) this.initPartyLimitGauge();
    this.setPartyLimitGauge(this.partyLimitGauge() + value);
};

Game_Unit.prototype.losePartyLimitGauge = function(value) {
    if (this._partyLimit === undefined) this.initPartyLimitGauge();
    this.setPartyLimitGauge(this.partyLimitGauge() - value);
};

Game_Unit.prototype.setPartyLimitGaugeIncrement = function(value) {
    if (this._partyLimit === undefined) this.initPartyLimitGauge();
    value *= Yanfly.Param.PLGIncrements;
    this.setPartyLimitGauge(value);
};

Game_Unit.prototype.gainPartyLimitGaugeIncrement = function(value) {
    if (this._partyLimit === undefined) this.initPartyLimitGauge();
    value *= Yanfly.Param.PLGIncrements;
    this.gainPartyLimitGauge(value);
};

Game_Unit.prototype.losePartyLimitGaugeIncrement = function(value) {
    if (this._partyLimit === undefined) this.initPartyLimitGauge();
    value *= Yanfly.Param.PLGIncrements;
    this.losePartyLimitGauge(value);
};

Game_Unit.prototype.payPartyLimitGauge = function(value) {
    this.losePartyLimitGaugeIncrement(value);
};

Game_Unit.prototype.partyLimitGaugeMax = function(value) {
    var length = this.members().length;
    var value = 0;
    for (var i = 0; i < length; ++i) {
      var member = this.members()[i];
      if (member && member.isAppeared()) value += member.partyLimitGaugeMax();
    }
    value += this.partyLimitGaugeMaxBonus();
    return Math.max(value, Yanfly.Param.PLGIncrements);
};

Game_Unit.prototype.partyLimitGaugeRate = function() {
    return this.partyLimitGaugeCurrent() / this.partyLimitGaugeIncrements();
};

Game_Unit.prototype.partyLimitGaugeCurrent = function() {
    var value = this.partyLimitGauge();
    value = Math.floor(value / Yanfly.Param.PLGIncrements);
    return value;
};

Game_Unit.prototype.partyLimitGaugeIncrements = function() {
    var value = this.partyLimitGaugeMax();
    value = Math.floor(value / Yanfly.Param.PLGIncrements);
    return value;
};

Game_Unit.prototype.partyLimitGaugeLastRates = function() {
    var rates = [];
    var value = this.partyLimitGauge();
    var current = this.partyLimitGaugeCurrent();
    var length = this.partyLimitGaugeCurrent();
    for (var i = 0; i < length; ++i) {
      rates.push(1);
    }
    value -= this.partyLimitGaugeCurrent() * Yanfly.Param.PLGIncrements;
    value /= Yanfly.Param.PLGIncrements;
    rates.push(value);
    var length = this.partyLimitGaugeIncrements();
    for (var i = 0; i < length; ++i) {
      rates.push(0);
    }
    return rates;
};

Game_Unit.prototype.processPartyLimitGaugeEval = function(f1, c1, c2, c3, dmg) {
    var user = c1;
    var a = c1;
    var attacker = c1;
    var target = c2;
    var b = c2;
    var defender = c2;
    var item = c3;
    var skill = c3;
    var damage = dmg;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    try {
      var value = eval(f1);
    } catch (e) {
      Yanfly.Util.displayError(e, f1, 'PARTY LIMIT GAUGE GAIN ERROR');
      var value = 0;
    }
    this.gainPartyLimitGauge(value)
};

//=============================================================================
// Game_Party
//=============================================================================

Game_Party.prototype.partyLimitGaugeMax = function(value) {
    var length = this.battleMembers().length;
    var value = 0;
    for (var i = 0; i < length; ++i) {
      var member = this.battleMembers()[i];
      if (member) value += member.partyLimitGaugeMax();
    }
    value += this.partyLimitGaugeMaxBonus();
    return value;
};

Game_Party.prototype.partyLimitGaugeVisible = function() {
    return $gameSystem.isShowPartyLimitGauge();
};

Game_Party.prototype.partyLimitGaugePosX = function() {
    return Yanfly.Param.PLGPartyX;
};

Game_Party.prototype.partyLimitGaugePosY = function() {
    return Yanfly.Param.PLGPartyY;
};

Game_Party.prototype.partyLimitGaugePosWidth = function() {
    return Yanfly.Param.PLGPartyWidth;
};

Game_Party.prototype.partyLimitGaugeColor1 = function() {
    return Yanfly.Param.PLGPartyColor1;
};

Game_Party.prototype.partyLimitGaugeColor2 = function() {
    return Yanfly.Param.PLGPartyColor2;
};

Game_Party.prototype.partyLimitGaugeIcon = function() {
    return Yanfly.Param.PLGPartyIcon;
};

Game_Party.prototype.partyLimitGaugeIconAlign = function() {
    return Yanfly.Param.PLGPartyAlign.toLowerCase();
};

Game_Party.prototype.partyLimitGaugeBufferX = function() {
    return Yanfly.Param.PLGPartyBufferX;
};

Game_Party.prototype.partyLimitGaugeBufferY = function() {
    return Yanfly.Param.PLGPartyBufferY;
};

Game_Party.prototype.resetPartyLimitGauge = function() {
    return Yanfly.Param.PLGReset;
};

Game_Party.prototype.partyLimitGaugeMaxBonus = function() {
  if (this._partyLimitGaugeMaxBonus === undefined) {
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var code = Yanfly.Param.PLGPartyBonus;
    try {
      this._partyLimitGaugeMaxBonus = eval(code);
    } catch (e) {
      this._partyLimitGaugeMaxBonus = 0;
      Yanfly.Util.displayError(e, code, 'PARTY LIMIT GAUGE MAX ERROR');
    }
  }
  return this._partyLimitGaugeMaxBonus;
};

//=============================================================================
// Game_Troop
//=============================================================================

Game_Troop.prototype.partyLimitGaugeVisible = function() {
    return $gameSystem.isShowTroopLimitGauge();
};

Game_Troop.prototype.partyLimitGaugePosX = function() {
    return Yanfly.Param.PLGTroopX;
};

Game_Troop.prototype.partyLimitGaugePosY = function() {
    return Yanfly.Param.PLGTroopY;
};

Game_Troop.prototype.partyLimitGaugePosWidth = function() {
    return Yanfly.Param.PLGTroopWidth;
};

Game_Troop.prototype.partyLimitGaugeColor1 = function() {
    return Yanfly.Param.PLGTroopColor1;
};

Game_Troop.prototype.partyLimitGaugeColor2 = function() {
    return Yanfly.Param.PLGTroopColor2;
};

Game_Troop.prototype.partyLimitGaugeIcon = function() {
    return Yanfly.Param.PLGTroopIcon;
};

Game_Troop.prototype.partyLimitGaugeIconAlign = function() {
    return Yanfly.Param.PLGTroopAlign.toLowerCase();
};

Game_Troop.prototype.partyLimitGaugeBufferX = function() {
    return Yanfly.Param.PLGTroopBufferX;
};

Game_Troop.prototype.partyLimitGaugeBufferY = function() {
    return Yanfly.Param.PLGTroopBufferY;
};

Game_Troop.prototype.partyLimitGaugeMaxBonus = function() {
  if (this._partyLimitGaugeMaxBonus === undefined) {
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var code = Yanfly.Param.PLGTroopBonus;
    try {
      this._partyLimitGaugeMaxBonus = eval(code);
    } catch (e) {
      this._partyLimitGaugeMaxBonus = 0;
      Yanfly.Util.displayError(e, code, 'PARTY LIMIT GAUGE MAX BONUS ERROR');
    }
  }
  return this._partyLimitGaugeMaxBonus;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.PLG.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.PLG.Game_Interpreter_pluginCommand.call(this, command, args);
  if (command === 'SetPartyLimitGaugeValue') {
    $gameParty.setPartyLimitGauge(parseInt(args[0]));
  } else if (command === 'GainPartyLimitGaugeValue') {
    $gameParty.gainPartyLimitGauge(parseInt(args[0]));
  } else if (command === 'LosePartyLimitGaugeValue') {
    $gameParty.losePartyLimitGauge(parseInt(args[0]));
  } else if (command === 'SetPartyLimitGaugeIncrement') {
    $gameParty.setPartyLimitGaugeIncrement(parseInt(args[0]));
  } else if (command === 'GainPartyLimitGaugeIncrement') {
    $gameParty.gainPartyLimitGaugeIncrement(parseInt(args[0]));
  } else if (command === 'LosePartyLimitGaugeIncrement') {
    $gameParty.losePartyLimitGaugeIncrement(parseInt(args[0]));
  } else if (command === 'SetTroopLimitGaugeValue') {
    $gameTroop.setPartyLimitGauge(parseInt(args[0]));
  } else if (command === 'GainTroopLimitGaugeValue') {
    $gameTroop.gainPartyLimitGauge(parseInt(args[0]));
  } else if (command === 'LoseTroopLimitGaugeValue') {
    $gameTroop.losePartyLimitGauge(parseInt(args[0]));
  } else if (command === 'SetTroopLimitGaugeIncrement') {
    $gameTroop.setPartyLimitGaugeIncrement(parseInt(args[0]));
  } else if (command === 'GainTroopLimitGaugeIncrement') {
    $gameTroop.gainPartyLimitGaugeIncrement(parseInt(args[0]));
  } else if (command === 'LoseTroopLimitGaugeIncrement') {
    $gameTroop.losePartyLimitGaugeIncrement(parseInt(args[0]));
  } else if (command === 'ShowPartyLimitGauge') {
    $gameSystem.setShowPartyLimitGauge(true);
  } else if (command === 'HidePartyLimitGauge') {
    $gameSystem.setShowPartyLimitGauge(false);
  } else if (command === 'ShowTroopLimitGauge') {
    $gameSystem.setShowTroopLimitGauge(true);
  } else if (command === 'HideTroopLimitGauge') {
    $gameSystem.setShowTroopLimitGauge(false);
  }
};

//=============================================================================
// Window_Base
//=============================================================================

Window_Base.prototype.drawPartyLimitSet = function(unit, x, y, w, h) {
    var height = Math.min(Window_Base._iconHeight * 2, h);
    this.drawPartyLimitIcon(this._unit, x, y, w, height);
    this.drawPartyLimitValue(this._unit, x, y, w, height);
    this.drawPartyLimitGauge(this._unit, x, h - this.lineHeight(), w);
};

Window_Base.prototype.drawPartyLimitIcon = function(unit, x, y, w, h) {
    var icon = unit.partyLimitGaugeIcon();
    if (icon <= 0) return;
    var size = h;
    if (unit.partyLimitGaugeIconAlign() === 'center') {
      x += (w - size) / 2;
    } else if (unit.partyLimitGaugeIconAlign() === 'right') {
      x += w - size;
    }
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = icon % 16 * pw;
    var sy = Math.floor(icon / 16) * ph;
    this.contents._context.imageSmoothingEnabled = false;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, size, size);
    this.contents._context.imageSmoothingEnabled = true;
};

Window_Base.prototype.drawPartyLimitValue = function(unit, x, y, w, h) {
    var size = h;
    if (unit.partyLimitGaugeIconAlign() === 'center') {
      x += (w - size) / 2;
    } else if (unit.partyLimitGaugeIconAlign() === 'right') {
      x += w - size;
    }
    x += unit.partyLimitGaugeBufferX();
    y += unit.partyLimitGaugeBufferY();
    var value = Yanfly.Util.toGroup(unit.partyLimitGaugeCurrent());
    this.drawText(value, x, y, size, 'center');
};

Window_Base.prototype.drawPartyLimitGauge = function(unit, x, y, w) {
    var gauges = unit.partyLimitGaugeIncrements();
    var rates = unit.partyLimitGaugeLastRates();
    var c1 = this.textColor(unit.partyLimitGaugeColor1());
    var c2 = this.textColor(unit.partyLimitGaugeColor2());
    var gw = Math.floor(this.width / gauges);
    if (gw >= 5) {
      for (var i = 0; i < gauges; ++i) {
        var rate = rates[i] || 0;
        this.drawGauge(x, y, gw, rate, c1, c2);
        x += gw;
      }
    } else {
      var rate = unit.partyLimitGaugeRate();
      this.drawGauge(x, y, w, rate, c1, c2);
    }
};

//=============================================================================
// Window_PartyLimitGauge
//=============================================================================

function Window_PartyLimitGauge() {
    this.initialize.apply(this, arguments);
}

Window_PartyLimitGauge.prototype = Object.create(Window_Base.prototype);
Window_PartyLimitGauge.prototype.constructor = Window_PartyLimitGauge;

Window_PartyLimitGauge.prototype.initialize = function(unit) {
    this._unit = unit;
    var wx = this.getPositionX();
    var wy = this.getPositionY();
    var ww = this.windowWidth();
    var wh = this.windowHeight();
    if (Imported.YEP_BattleEngineCore) {
      this._lowerWindows = Yanfly.Param.BECLowerWindows;
    } else {
      this._lowerWindows = false;
    }
    this._windowLayer = SceneManager._scene._windowLayer;
    Window_Base.prototype.initialize.call(this, wx, wy, ww, wh);
    this._visibleSetting = false;
    this.visible = false;
    this.opacity = 0;
    this.refresh();
};

Window_PartyLimitGauge.prototype.standardFontSize = function() {
    return Yanfly.Param.PLGTextSize;
};

Window_PartyLimitGauge.prototype.standardPadding = function() {
    return 0;
};

Window_PartyLimitGauge.prototype.getPositionX = function() {
    var width = this.windowWidth();
    var x = eval(this._unit.partyLimitGaugePosX());
    return x;
};

Window_PartyLimitGauge.prototype.getPositionY = function() {
    if (Imported.YEP_BattleEngineCore) {
      var statusHeight = Yanfly.Param.BECCommandRows;
    } else {
      var statusHeight = 4;
    }
    statusHeight *= Window_Base.prototype.lineHeight.call(this);
    statusHeight += Window_Base.prototype.standardPadding.call(this) * 2;
    var height = this.windowHeight();
    return eval(this._unit.partyLimitGaugePosY());
};

Window_PartyLimitGauge.prototype.windowWidth = function() {
    var max = this._unit.partyLimitGaugeMax();
    return eval(this._unit.partyLimitGaugePosWidth());
};

Window_PartyLimitGauge.prototype.windowHeight = function() {
    var gaugeHeight = 6;
    if (Imported.YEP_CoreEngine) gaugeHeight = Yanfly.Param.GaugeHeight;
    var height = gaugeHeight + Window_Base._iconHeight * 2;
    return Math.max(height, this.fittingHeight(2));
};

Window_PartyLimitGauge.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    this.updateVisible();
    if (this._unit.isNeedPartyLimitRefresh()) this.refresh();
    this.updateOpacity();
};

Window_PartyLimitGauge.prototype.refresh = function() {
    this.contents.clear();
    this._unit.clearNeedPartyLimitRefresh();
    this.drawPartyLimitSet(this._unit, 0, 0, this.width, this.height);
};

Window_PartyLimitGauge.prototype.updateVisible = function() {
    if (this._visibleSetting === this._unit.partyLimitGaugeVisible()) return;
    this._visibleSetting = this._unit.partyLimitGaugeVisible();
    this.visible = this._unit.partyLimitGaugeVisible();
};

Window_PartyLimitGauge.prototype.updateOpacity = function() {
    var visible = this._unit.partyLimitGaugeVisible();
    if (this._permInvisible) {
      visible = false;
    } else if (BattleManager._victoryPhase) {
      visible = false;
      this._permInvisible = true;
    } else if (this._windowLayer && this._windowLayer.x !== 0) {
      visible = false;
    } else if (!this._lowerWindows) {
      if (SceneManager._scene._itemWindow.visible) visible = false;
      if (SceneManager._scene._skillWindow.visible) visible = false;
    } else if (this._lowerWindows) {
      if (SceneManager._scene._itemWindow.visible) {
        var win = SceneManager._scene._itemWindow;
      } else if (SceneManager._scene._skillWindow.visible) {
        var win = SceneManager._scene._skillWindow;
      }
      if (win && win.y < this.y + this.height) visible = false;
    }
    this.visible = visible;
};

//=============================================================================
// Window_SkillType
//=============================================================================

Yanfly.PLG.Window_SkillList_drawTpCost = Window_SkillList.prototype.drawTpCost;
Window_SkillList.prototype.drawTpCost = function(skill, wx, wy, dw) {
    dw = this.drawPartyLimitCost(skill, wx, wy, dw);
    return Yanfly.PLG.Window_SkillList_drawTpCost.call(this, skill, wx, wy, dw);
};

Window_SkillList.prototype.drawPartyLimitCost = function(skill, wx, wy, dw) {
    if (this._actor.partyLimitCost(skill) <= 0) return dw;
    var unit = this._actor.friendsUnit();
    if (Yanfly.Param.PLGDrawIcon && unit.partyLimitGaugeIcon() > 0) {
      var iw = wx + dw - Window_Base._iconWidth;
      var icon = unit.partyLimitGaugeIcon();
      this.drawIcon(icon, iw, wy + 2);
      dw -= Window_Base._iconWidth + 2;
    }
    this.changeTextColor(this.textColor(Yanfly.Param.PLGCostColor));
    var fmt = Yanfly.Param.PLGCostFmt;
    var cost = this._actor.partyLimitCost(skill);
    var text = fmt.format(Yanfly.Util.toGroup(cost),
      unit.partyLimitGaugeCurrent(), unit.partyLimitGaugeIncrements());
    this.contents.fontSize = Yanfly.Param.PLGCostSize;
    this.drawText(text, wx, wy, dw, 'right');
    var returnWidth = dw - this.textWidth(text) - Yanfly.Param.SCCCostPadding;
    this.resetFontSettings();
    return returnWidth;
};

//=============================================================================
// Scene_Battle
//=============================================================================

Yanfly.PLG.Scene_Battle_createAllWindows =
    Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
    Yanfly.PLG.Scene_Battle_createAllWindows.call(this);
    this.createPartyLimitGauges();
};

Scene_Battle.prototype.createPartyLimitGauges = function() {
    this._partyLimitGaugeWindow = new Window_PartyLimitGauge($gameParty);
    this.addChild(this._partyLimitGaugeWindow);
    this._troopLimitGaugeWindow = new Window_PartyLimitGauge($gameTroop);
    this.addChild(this._troopLimitGaugeWindow);
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (!Yanfly.Util.toGroup) {
    Yanfly.Util.toGroup = function(inVal) {
        return inVal;
    }
};

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
//=============================================================================
// Yanfly Engine Plugins - Enemy Levels
// YEP_EnemyLevels.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_EnemyLevels = true;

var Yanfly = Yanfly || {};
Yanfly.ELV = Yanfly.ELV || {};
Yanfly.ELV.version = 1.08;

//=============================================================================
 /*:
 * @plugindesc v1.08 敌人等级☁️
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @text ---全局---
 * @default
 *
 * @param Show Level
 * @parent ---General---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show enemy levels by default?
 * NO - false     YES - true
 * @default true
 *
 * @param Level Format
 * @parent ---General---
 * @desc How to format enemy names with levels.
 * %1 - Level     %2 - Name
 * @default Lv%1 %2
 *
 * @param Minimum Level
 * @parent ---General---
 * @type number
 * @min 1
 * @desc Default lowest level an enemy can be.
 * @default 1
 *
 * @param Maximum Level
 * @parent ---General---
 * @type number
 * @min 1
 * @desc Default highest level an enemy can be.
 * @default 9999
 *
 * @param Maximum Cap
 * @text 最大上限
 * @parent ---General---
 * @type number
 * @min 1
 * @desc Highest possible level an enemy can be.
 * @default 9999
 *
 * @param Preserve Rate
 * @text 保存率
 * @parent ---General---
 * @type boolean
 * @on Preserve
 * @off Don't Preserve
 * @desc 如果等级改变，保持敌人的气血值？
 * If level changing, preserve the enemy's HP/MP rates?
 * NO - false     YES - true
 * @default true
 *
 * @param ---Level Setup---
 * @text ---等级设置---
 * @default
 *
 * @param Default Type
 * @text 默认类型
 * @parent ---Level Setup---
 * @type select
 * @option Lowest level of all actors that have joined the player party.
 * @value 0
 * @option Lowest level of all actors that are in the battling party.
 * @value 1
 * @option Average level of all actors that have joined the player party.
 * @value 2
 * @option Average level of all actors that are in the battling party.
 * @value 3
 * @option Highest level of all actors that have joined the player party.
 * @value 4
 * @option Highest level of all actors that are in the battling party.
 * @value 5
 * @desc Default level calculated relative to the player party:
 * Refer to the Help File for Default Level Types.
 * @default 5
 *
 * @param Positive Fluctuation
 * @text 正波动
 * @parent ---Level Setup---
 * @type number
 * @min 0
 * @desc  Default positive level fluctuation for all enemies.
 * Default positive level fluctuation for all enemies.
 * @default 2
 *
 * @param Negative Fluctuation
 * @text 负波动
 * @parent ---Level Setup---
 * @type number
 * @min 0
 * @desc Default negative level fluctuation for all enemies.
 * @default 2
 *
 * @param ---MaxHP Growth---
 * @default
 *
 * @param MaxHP Formula
 * @text MaxHP 公式
 * @parent ---MaxHP Growth---
 * @desc The formula used for this parameter's calculations.
 * @default base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *
 * @param MaxHP Rate Growth
 * @text MaxHP 升级增长率
 * @parent ---MaxHP Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The growth rate for this parameter per level.
 * @default 0.15
 *
 * @param MaxHP Flat Growth
 * @text MaxHP 升级属性
 * @parent ---MaxHP Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The flat growth value for this parameter per level.
 * @default 50.0
 *
 * @param ---MaxMP Growth---
 * @default
 *
 * @param MaxMP Formula
 * @parent ---MaxMP Growth---
 * @desc The formula used for this parameter's calculations.
 * @default base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *
 * @param MaxMP Rate Growth
 * @parent ---MaxMP Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The growth rate for this parameter per level.
 * @default 0.10
 *
 * @param MaxMP Flat Growth
 * @parent ---MaxMP Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The flat growth value for this parameter per level.
 * @default 10.0
 *
 * @param ---ATK Growth---
 * @default
 *
 * @param ATK Formula
 * @parent ---ATK Growth---
 * @desc The formula used for this parameter's calculations.
 * @default base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *
 * @param ATK Rate Growth
 * @parent ---ATK Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The growth rate for this parameter per level.
 * @default 0.05
 *
 * @param ATK Flat Growth
 * @parent ---ATK Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The flat growth value for this parameter per level.
 * @default 2.5
 *
 * @param ---DEF Growth---
 * @default
 *
 * @param DEF Formula
 * @parent ---DEF Growth---
 * @desc The formula used for this parameter's calculations.
 * @default base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *
 * @param DEF Rate Growth
 * @parent ---DEF Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The growth rate for this parameter per level.
 * @default 0.05
 *
 * @param DEF Flat Growth
 * @parent ---DEF Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The flat growth value for this parameter per level.
 * @default 2.5
 *
 * @param ---MAT Growth---
 * @default
 *
 * @param MAT Formula
 * @parent ---MAT Growth---
 * @desc The formula used for this parameter's calculations.
 * @default base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *
 * @param MAT Rate Growth
 * @parent ---MAT Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The growth rate for this parameter per level.
 * @default 0.05
 *
 * @param MAT Flat Growth
 * @parent ---MAT Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The flat growth value for this parameter per level.
 * @default 2.5
 *
 * @param ---MDF Growth---
 * @default
 *
 * @param MDF Formula
 * @parent ---MDF Growth---
 * @desc The formula used for this parameter's calculations.
 * @default base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *
 * @param MDF Rate Growth
 * @parent ---MDF Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The growth rate for this parameter per level.
 * @default 0.05
 *
 * @param MDF Flat Growth
 * @parent ---MDF Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The flat growth value for this parameter per level.
 * @default 2.5
 *
 * @param ---AGI Growth---
 * @default
 *
 * @param AGI Formula
 * @parent ---AGI Growth---
 * @desc The formula used for this parameter's calculations.
 * @default base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *
 * @param AGI Rate Growth
 * @parent ---AGI Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The growth rate for this parameter per level.
 * @default 0.05
 *
 * @param AGI Flat Growth
 * @parent ---AGI Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The flat growth value for this parameter per level.
 * @default 2.5
 *
 * @param ---LUK Growth---
 * @default
 *
 * @param LUK Formula
 * @parent ---LUK Growth---
 * @desc The formula used for this parameter's calculations.
 * @default base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *
 * @param LUK Rate Growth
 * @parent ---LUK Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The growth rate for this parameter per level.
 * @default 0.05
 *
 * @param LUK Flat Growth
 * @parent ---LUK Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The flat growth value for this parameter per level.
 * @default 2.5
 *
 * @param ---EXP Growth---
 * @default
 *
 * @param EXP Formula
 * @parent ---EXP Growth---
 * @desc The formula used for this parameter's calculations.
 * @default base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *
 * @param EXP Rate Growth
 * @parent ---EXP Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The growth rate for this parameter per level.
 * @default 0.15
 *
 * @param EXP Flat Growth
 * @parent ---EXP Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The flat growth value for this parameter per level.
 * @default 10.0
 *
 * @param ---Gold Growth---
 * @default
 *
 * @param Gold Formula
 * @parent ---Gold Growth---
 * @desc The formula used for this parameter's calculations.
 * @default base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *
 * @param Gold Rate Growth
 * @parent ---Gold Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The growth rate for this parameter per level.
 * @default 0.15
 *
 * @param Gold Flat Growth
 * @parent ---Gold Growth---
 * @type number
 * @min 0
 * @decimals 2
 * @desc The flat growth value for this parameter per level.
 * @default 10.0
 *
 * @help
 * ============================================================================
 * 导言
 *  ============================================================================
 * 
 * 这个插件允许敌人在一个水平系统之外工作。敌人的
 * 在特定的规则和规则下，等级将相对于玩家增加
 * 将根据其等级增加其属性。
 * 
 *  ============================================================================
 * 默认级别类型
 *  ============================================================================
 * 
 * 当一个敌人在战斗中被制造出来时，它会制造出它的初始水平线
 * 一套规则。以下是您可以更改“默认类型”的各种规则
 * 要反映的插件参数。
 *
 * 类型：
 *
 * - Type 0 - 已加入玩家方的所有演员的最低级别。
 * - Type 1 - 战斗队中所有演员的最低级别。
 * - Type 2 - 加入玩家方的所有演员的平均水平。
 * - Type 3 - 战斗队伍中所有演员的平均水平。
 * - Type 4 - 加入玩家党的所有演员的最高级别。
 * - Type 5 - 战斗队中所有演员的最高级别。
 *
 * 在确定了敌人的等级类型之后，随机的等级波动就会被添加进去。
 *
 * ============================================================================
*便签
* ============================================================================
*
*你可以用这些标签来调整每个敌人的等级。
*
*敌方便签：
 *
 *   <Show Level>
 *   <Hide Level>
 *   这将导致敌人在选择目标时显示或隐藏其等级。
 *
 *   <Minimum Level: x>
 *   <Maximum Level: x>
 *   这会将敌人的最低和最高等级分别设置为x。这个
 * 会使敌人在战斗开始时，调整自己的等级
 * 这个特殊的范围。任何改变敌人等级的技能都可以
 * 绕过这些限制，除非绕过最大上限。
 *
 *   <Static Level: x>
 *   这将使敌人的起始高度精确到x。这将导致
 * 敌人，在战斗开始时，在这个特定的范围内调整等级
 * 射程。任何改变敌人等级的技能都可以绕过这些限制
 * 除非绕过最高上限。
 *
 *   <Starting Level Type: x>
 *   将敌人的起始等级类型从0到5设置为x。参考
 * 帮助文件的“默认级别类型”参与方。
 *
 *   <Positive Level Fluctuation: x>
 *   <Negative Level Fluctuation: x>
 *   这将设置敌人的正/负电平波动。任何级别
 * 波动是在战斗开始时计算的，但在战斗开始后计算
 * 级别类型已确定。
 *
 *   <Level Fluctuation: x>
 *   这为敌人设置了正负电平波动
 * 到x。任何级别的波动都是在战斗开始时计算的，但是
 * 确定起始标高类型后。
 *
 *   <stat Rate: +x% per level>
 *   <stat Rate: -x% per level>
 *   <stat Rate: +x.y per level>
 *   <stat Rate: -x.y per level>
 *   将“stat”替换为“maxhp”、“maxmp”、“atk”、“def”、“mat”、“mdf”、“agi”，
 * “luk”、“exp”或“gold”。这将使这个敌人有一个增加或减少的机会
 * 每级降低x%。如果你用x.y公式，它会有一个
 * 每级速率增加+x.y或-x.y。
 *
 *   <stat Flat: +x per level>
 *   <stat Flat: -x per level>
 *   <stat Flat: +x.y per level>
 *   <stat Flat: -x.y per level>
 *   将“stat”替换为“maxhp”、“maxmp”、“atk”、“def”、“mat”、“mdf”、“agi”，
 * “luk”、“exp”或“gold”。这将使这个敌人有一个增加或减少的机会
 * 每级扁平x值减少。如果你用x.y公式，它会
 * 每级平均增加+x.y或-x.y。
 *
 *   <Resist Level Change>
 *   这将使敌人免疫任何形式的等级变化
 * 通过技能和物品。但是，敌人也不能免疫任何等级
 * 通过脚本调用更改。
 *
 *   <Skill x Require Level: y>
 *   <Skill name Require Level: y>
 *   如果这个敌人使用技能x（或命名技能），它必须至少
 * y级才能使用它。如果敌人在y级以下，技能
 * 将被密封，不能使用。
 *
 *   <Ignore Level Bonus>
 *   这将使敌人忽略所有等级增加的属性变化
 * 并使用它的基础属性作为当前等级属性。对其进行的任何更改
 * 当前等级不会改变敌人的属性。
 *
 * 技能和物品标签：
 *
 *   <Reset Enemy Level>
 *   这将使目标敌人的等级恢复到战斗开始时的水平。
 *
 *   <Change Enemy Level: +x>
 *   <Change Enemy Level: -x>
 *   如果这个动作是用来对付敌人的，它会改变敌人的等级
 * 通过+x或-x。如果操作同时包含重置和级别更改，则
 * 重置将首先发生在级别更改之前。
 *
 * ============================================================================
 * 疯狂模式-自定义起始级别
 * ============================================================================
 *
 * For those with JavaScript experience, you can have enemies have conditional
 * starting levels. Place these Lunatic Mode notetags into the enemy notebox:
 *
 * Enemy Notetags:
 *
 *   <Custom Starting Level>
 *    level = $gameActors.actor(1).level + 5;
 *   </Custom Starting Level>
 *   The 'level' variable will become the enemy's starting level. This level is
 *   still affected by the enemy's minimum and maximum starting level barriers.
 *   After the starting levels are decided, it will still be affected by the
 *   random level fluctuation.
 *
 * ============================================================================
 * Lunatic Mode - Custom Parameter Formulas
 * ============================================================================
 *
 * For those with JavaScript experience, you can have different formulas for
 * the ways parameters are calculated in regards to the enemy's level. Use the
 * notetags below:
 *
 * Enemy Notetags:
 *
 *   <Custom Parameter stat Formula>
 *    base * (1 + (level - 1) * rate) + (flat * (level - 1))
 *   </Custom Parameter stat Formula>
 *   Replace 'stat' with 'maxhp', 'maxmp', 'atk', 'def', 'mat', 'mdf', 'agi',
 *   'luk', 'exp', or 'gold'. Whatever is calculated for the formula on the
 *   last line will become the parameter value for the stat.
 *
 * ============================================================================
 * Lunatic Mode - Custom Change Enemy Level
 * ============================================================================
 *
 * For those with JavaScript experience and would like to have more dynamic
 * ways of altering enemy levels instead of flat values, you can use these
 * notetags to do so:
 *
 * Skill and Item Notetags:
 *
 *   <Custom Change Enemy Level>
 *    level += user.atk;
 *    level -= target.agi;
 *   </Custom Change Enemy Level>
 *   The 'level' variable will be the enemy's current level. Any changes made
 *   to the 'level' variable will be what the enemy's level will become after
 *   this effect finishes taking place. If the skill has a reset level effect,
 *   it is applied first. If the skill has a flat level changing effect, that
 *   effect is applied next. After those two effects are applied, this custom
 *   enemy level change will take place.
 *
 * ============================================================================
 * Lunatic Mode - New JavaScript Functions
 * ============================================================================
 *
 * Here are some new JavaScript functions that have been added by this plugin.
 *
 * enemy.level
 * - This will return the enemy's current level.
 *
 * enemy.originalLevel()
 * - This will return the enemy's original level from the start of battle.
 *
 * enemy.changeLevel(x)
 * - This will change the enemy's level to x.
 *
 * enemy.gainLevel(x)
 * - This will cause the enemy to gain x levels.
 *
 * enemy.loseLevel(x)
 * - This will cause the enemy to lose x levels.
 *
 * enemy.resetLevel()
 * - Changes the enemy's level back to what it was at the start of battle.
 *
 * $gameParty.lowestLevelAllMembers()
 * - This will return the lowest level of all party members.
 *
 * $gameParty.lowestLevelBattleMembers()
 * - This will return the lowest level of all battle members.
 *
 * $gameParty.averageLevelAllMembers()
 * - This will return the average level of all party members.
 *
 * $gameParty.averageLevelBattleMembers()
 * - This will return the average level of all battle members.
 *
 * $gameParty.highestLevelAllMembers()
 * - This will return the highest level of all party members.
 *
 * $gameParty.highestLevelBattleMembers()
 * - This will return the highest level of all battle members.
 *
 * $gameTroop.changeLevel(x)
 * - Changes the levels of all enemies to x.
 *
 * $gameTroop.gainLevel(x)
 * - Raises the levels of all enemies by x.
 *
 * $gameTroop.loseLevel(x)
 * - Lowers the levels of all enemies by x.
 *
 * $gameTroop.resetLevel()
 * - Resets the levels of all enemies to their original levels at battle start.
 *
 * $gameTroop.lowestLevel()
 * - This will return the lowest level of the enemy party.
 *
 * $gameTroop.averageLevel()
 * - This will return the lowest level of the enemy party.
 *
 * $gameTroop.highestLevel()
 * - This will return the lowest level of the enemy party.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * If you wish to change enemy levels through plugin commands, you can use the
 * following plugin commands to alter them. These plugin commands are only used
 * inside battle.
 *
 * Plugin Command:
 *
 *   EnemyLevelChange 2 to 50
 *   - This will reset the enemy in position 2's level to 50.
 *
 *   EnemyLevelChangeAll 50
 *   - This will change the levels of all enemies to 50.
 *
 *   EnemyGainLevel 3 by 20
 *   - This will cause the enemy in positon 3 to gain 20 levels.
 *
 *   EnemyGainLevelAll 20
 *   - This will cause all enemies to gain 20 levels.
 *
 *   EnemyLoseLevel 4 by 10
 *   - This will cause the enemy in positon 4 to lose 10 levels.
 *
 *   EnemyLoseLevelAll 10
 *   - This will cause all enemies to lose 10 levels.
 *
 *   EnemyLevelReset 5
 *   - This will reset the enemy in position 5's level to the level it had at
 *   the start of battle.
 *
 *   EnemyLevelResetAll
 *   - This will reset all enemy levels to their original levels.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.08:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.07:
 * - Enemy Transform event now adjusts for stat changes when transforming into
 * a different enemy.
 *
 * Version 1.06:
 * - Lunatic Mode fail safes added.
 *
 * Version 1.05:
 * - Updated the custom level formula to have the formulas 'b', 'r', and 'f' to
 * be able to use the formulas from FlyingDream's calculator.
 *
 * Version 1.04:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.03:
 * - Fixed a bug with average level calculation types for enemies.
 *
 * Version 1.02:
 * - Fixed a bug regarding a line of code that wasn't added properly.
 *
 * Version 1.01:
 * - Added <Ignore Level Bonus> notetag. This causes enemies to maintain their
 * current level but ignore any bonus stats applied by the level difference. If
 * the enemy's level is altered, its stats remain static and unchanging.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_EnemyLevels');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.ELVShow = eval(String(Yanfly.Parameters['Show Level']));
Yanfly.Param.ELVFmt = String(Yanfly.Parameters['Level Format']);
Yanfly.Param.ELVMinLv = Number(Yanfly.Parameters['Minimum Level']);
Yanfly.Param.ELVMaxLv = Number(Yanfly.Parameters['Maximum Level']);
Yanfly.Param.ELVMaxCap = Number(Yanfly.Parameters['Maximum Cap']);
Yanfly.Param.ELVPreserveRate = eval(String(Yanfly.Parameters['Preserve Rate']));

Yanfly.Param.ELVDefaultType = Number(Yanfly.Parameters['Default Type']);
Yanfly.Param.ELVPosFluc = Number(Yanfly.Parameters['Positive Fluctuation']);
Yanfly.Param.ELVNegFluc = Number(Yanfly.Parameters['Negative Fluctuation']);
Yanfly.Param.ELVFormula = [
  String(Yanfly.Parameters['MaxHP Formula']),
  String(Yanfly.Parameters['MaxMP Formula']),
  String(Yanfly.Parameters['ATK Formula']),
  String(Yanfly.Parameters['DEF Formula']),
  String(Yanfly.Parameters['MAT Formula']),
  String(Yanfly.Parameters['MDF Formula']),
  String(Yanfly.Parameters['AGI Formula']),
  String(Yanfly.Parameters['LUK Formula']),
  String(Yanfly.Parameters['EXP Formula']),
  String(Yanfly.Parameters['Gold Formula'])
];
Yanfly.Param.ELVRate = [
  Number(Yanfly.Parameters['MaxHP Rate Growth']),
  Number(Yanfly.Parameters['MaxMP Rate Growth']),
  Number(Yanfly.Parameters['ATK Rate Growth']),
  Number(Yanfly.Parameters['DEF Rate Growth']),
  Number(Yanfly.Parameters['MAT Rate Growth']),
  Number(Yanfly.Parameters['MDF Rate Growth']),
  Number(Yanfly.Parameters['AGI Rate Growth']),
  Number(Yanfly.Parameters['LUK Rate Growth']),
  Number(Yanfly.Parameters['EXP Rate Growth']),
  Number(Yanfly.Parameters['Gold Rate Growth'])
];
Yanfly.Param.ELVFlat = [
  Number(Yanfly.Parameters['MaxHP Flat Growth']),
  Number(Yanfly.Parameters['MaxMP Flat Growth']),
  Number(Yanfly.Parameters['ATK Flat Growth']),
  Number(Yanfly.Parameters['DEF Flat Growth']),
  Number(Yanfly.Parameters['MAT Flat Growth']),
  Number(Yanfly.Parameters['MDF Flat Growth']),
  Number(Yanfly.Parameters['AGI Flat Growth']),
  Number(Yanfly.Parameters['LUK Flat Growth']),
  Number(Yanfly.Parameters['EXP Flat Growth']),
  Number(Yanfly.Parameters['Gold Flat Growth'])
];

//=============================================================================
// DataManager
//=============================================================================

Yanfly.ELV.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.ELV.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_EnemyLevels) {
    this.processELVNotetagsS($dataSkills);
    this.processELVNotetags1($dataEnemies);
    this.processELVNotetags2($dataSkills);
    this.processELVNotetags2($dataItems);
    Yanfly._loaded_YEP_EnemyLevels = true;
  }
  return true;
};

DataManager.processELVNotetagsS = function(group) {
  if (Yanfly.SkillIdRef) return;
  Yanfly.SkillIdRef = {};
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    if (obj.name.length <= 0) continue;
    Yanfly.SkillIdRef[obj.name.toUpperCase()] = n;
  }
};

DataManager.processELVNotetags1 = function(group) {
  var note1a = /<(.*)[ ]RATE:[ ]([\+\-]\d+)([%％])[ ]PER LEVEL>/i;
  var note1b = /<(.*)[ ]RATE:[ ]([\+\-]\d+).(\d+)[ ]PER LEVEL>/i;
  var note2a = /<(.*)[ ]FLAT:[ ]([\+\-]\d+)[ ]PER LEVEL>/i;
  var note2b = /<(.*)[ ]FLAT:[ ]([\+\-]\d+).(\d+)[ ]PER LEVEL>/i;
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.showLevel = Yanfly.Param.ELVShow;
    obj.ignoreLevelBonuses = false;
    obj.minLevel = Yanfly.Param.ELVMinLv;
    obj.maxLevel = Yanfly.Param.ELVMaxLv;
    obj.levelType = Yanfly.Param.ELVDefaultType;
    obj.positiveLevelFluctuation = Yanfly.Param.ELVPosFluc;
    obj.negativeLevelFluctuation = Yanfly.Param.ELVPosFluc;
    obj.baseParamFormula = Yanfly.Param.ELVFormula.slice();
    obj.baseParamRate = Yanfly.Param.ELVRate.slice();
    obj.baseParamFlat = Yanfly.Param.ELVFlat.slice();
    obj.resistLevelChange = false;
    obj.skillLevelRequirements = {};
    var evalMode = 'none';
    var evalParam = 0;

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:SHOW LEVEL)>/i)) {
        obj.showLevel = true;
      } else if (line.match(/<(?:HIDE LEVEL)>/i)) {
        obj.showLevel = false;
      } else if (line.match(/<(?:IGNORE LEVEL BONUS|IGNORE LEVEL BONUSES)>/i)) {
        obj.ignoreLevelBonuses = true;
      } else if (line.match(/<(?:MIN LEVEL|MINIMUM LEVEL):[ ](\d+)>/i)) {
        obj.minLevel = parseInt(RegExp.$1);
      } else if (line.match(/<(?:MAX LEVEL|MAXIMUM LEVEL):[ ](\d+)>/i)) {
        obj.maxLevel = parseInt(RegExp.$1);
      } else if (line.match(/<(?:SET LEVEL|STATIC LEVEL):[ ](\d+)>/i)) {
        obj.minLevel = parseInt(RegExp.$1);
        obj.maxLevel = parseInt(RegExp.$1);
      } else if (line.match(/<(?:LEVEL TYPE|STARTING LEVEL TYPE):[ ](\d+)>/i)) {
        obj.levelType = parseInt(RegExp.$1).clamp(0, 5);
      } else if (line.match(/<POSITIVE LEVEL FLUCTUATION:[ ](\d+)>/i)) {
        obj.positiveLevelFluctuation = parseInt(RegExp.$1);
      } else if (line.match(/<NEGATIVE LEVEL FLUCTUATION:[ ](\d+)>/i)) {
        obj.negativeLevelFluctuation = parseInt(RegExp.$1);
      } else if (line.match(/<LEVEL FLUCTUATION:[ ](\d+)>/i)) {
        obj.positiveLevelFluctuation = parseInt(RegExp.$1);
        obj.negativeLevelFluctuation = parseInt(RegExp.$1);
      } else if (line.match(note1a)) {
        var param = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(RegExp.$2)  * 0.01;
        if (['MAXHP', 'MAX HP', 'MHP', 'HP'].contains(param)) {
          param = 0;
        } else if (['MAXMP', 'MAX MP', 'MMP', 'MP', 'MAXSP', 'MAX SP', 'MSP',
        'SP'].contains(param)) {
          param = 1;
        } else if (['ATK', 'STR'].contains(param)) {
          param = 2;
        } else if (['DEF'].contains(param)) {
          param = 3;
        } else if (['MAT', 'INT', 'SPI'].contains(param)) {
          param = 4;
        } else if (['MDF', 'RES'].contains(param)) {
          param = 5;
        } else if (['AGI', 'SPD'].contains(param)) {
          param = 6;
        } else if (['LUK'].contains(param)) {
          param = 7;
        } else if (['EXP', 'XP'].contains(param)) {
          param = 8;
        } else if (['GOLD'].contains(param)) {
          param = 9;
        } else {
          continue;
        }
        obj.baseParamRate[param] = rate;
      } else if (line.match(note1b)) {
        var param = String(RegExp.$1).toUpperCase();
        var rate = parseFloat(String(RegExp.$2) + '.' + String(RegExp.$3));
        if (['MAXHP', 'MAX HP', 'MHP', 'HP'].contains(param)) {
          param = 0;
        } else if (['MAXMP', 'MAX MP', 'MMP', 'MP', 'MAXSP', 'MAX SP', 'MSP',
        'SP'].contains(param)) {
          param = 1;
        } else if (['ATK', 'STR'].contains(param)) {
          param = 2;
        } else if (['DEF'].contains(param)) {
          param = 3;
        } else if (['MAT', 'INT', 'SPI'].contains(param)) {
          param = 4;
        } else if (['MDF', 'RES'].contains(param)) {
          param = 5;
        } else if (['AGI', 'SPD'].contains(param)) {
          param = 6;
        } else if (['LUK'].contains(param)) {
          param = 7;
        } else if (['EXP', 'XP'].contains(param)) {
          param = 8;
        } else if (['GOLD'].contains(param)) {
          param = 9;
        } else {
          continue;
        }
        obj.baseParamRate[param] = rate;
      } else if (line.match(note2a)) {
        var param = String(RegExp.$1).toUpperCase();
        var flat = parseFloat(RegExp.$2);
        if (['MAXHP', 'MAX HP', 'MHP', 'HP'].contains(param)) {
          param = 0;
        } else if (['MAXMP', 'MAX MP', 'MMP', 'MP', 'MAXSP', 'MAX SP', 'MSP',
        'SP'].contains(param)) {
          param = 1;
        } else if (['ATK', 'STR'].contains(param)) {
          param = 2;
        } else if (['DEF'].contains(param)) {
          param = 3;
        } else if (['MAT', 'INT', 'SPI'].contains(param)) {
          param = 4;
        } else if (['MDF', 'RES'].contains(param)) {
          param = 5;
        } else if (['AGI', 'SPD'].contains(param)) {
          param = 6;
        } else if (['LUK'].contains(param)) {
          param = 7;
        } else if (['EXP', 'XP'].contains(param)) {
          param = 8;
        } else if (['GOLD'].contains(param)) {
          param = 9;
        } else {
          continue;
        }
        obj.baseParamFlat[param] = flat;
      } else if (line.match(note2b)) {
        var param = String(RegExp.$1).toUpperCase();
        var flat = parseFloat(String(RegExp.$2) + '.' + String(RegExp.$3));
        if (['MAXHP', 'MAX HP', 'MHP', 'HP'].contains(param)) {
          param = 0;
        } else if (['MAXMP', 'MAX MP', 'MMP', 'MP', 'MAXSP', 'MAX SP', 'MSP',
        'SP'].contains(param)) {
          param = 1;
        } else if (['ATK', 'STR'].contains(param)) {
          param = 2;
        } else if (['DEF'].contains(param)) {
          param = 3;
        } else if (['MAT', 'INT', 'SPI'].contains(param)) {
          param = 4;
        } else if (['MDF', 'RES'].contains(param)) {
          param = 5;
        } else if (['AGI', 'SPD'].contains(param)) {
          param = 6;
        } else if (['LUK'].contains(param)) {
          param = 7;
        } else if (['EXP', 'XP'].contains(param)) {
          param = 8;
        } else if (['GOLD'].contains(param)) {
          param = 9;
        } else {
          continue;
        }
        obj.baseParamFlat[param] = flat;
      } else if (line.match(/<\/CUSTOM PARAMETER[ ](.*)[ ]FORMULA>/i)) {
        evalMode = 'none';
        evalParam = 0;
      } else if (line.match(/<CUSTOM PARAMETER[ ](.*)[ ]FORMULA>/i)) {
        var param = String(RegExp.$1).toUpperCase();
        if (['MAXHP', 'MAX HP', 'MHP', 'HP'].contains(param)) {
          param = 0;
        } else if (['MAXMP', 'MAX MP', 'MMP', 'MP', 'MAXSP', 'MAX SP', 'MSP',
        'SP'].contains(param)) {
          evalParam = 1;
        } else if (['ATK', 'STR'].contains(param)) {
          evalParam = 2;
        } else if (['DEF'].contains(param)) {
          evalParam = 3;
        } else if (['MAT', 'INT', 'SPI'].contains(param)) {
          evalParam = 4;
        } else if (['MDF', 'RES'].contains(param)) {
          evalParam = 5;
        } else if (['AGI', 'SPD'].contains(param)) {
          evalParam = 6;
        } else if (['LUK'].contains(param)) {
          evalParam = 7;
        } else if (['EXP', 'XP'].contains(param)) {
          evalParam = 8;
        } else if (['GOLD'].contains(param)) {
          evalParam = 9
        } else {
          continue;
        }
        obj.baseParamFormula[evalParam] = '';
        evalMode = 'custom param level formula';
      } else if (evalMode === 'custom param level formula') {
        var pId = evalParam;
        obj.baseParamFormula[pId] = obj.baseParamFormula[pId] + line + '\n';
      } else if (line.match(/<(?:RESIST LEVEL CHANGE)>/i)) {
        obj.resistLevelChange = true;
      } else if (line.match(/<SKILL[ ](\d+)[ ]REQUIRE LEVEL:[ ](\d+)>/i)) {
        var skillId = parseInt(RegExp.$1);
        var level = parseInt(RegExp.$2);
        obj.skillLevelRequirements[skillId] = level;
      } else if (line.match(/<SKILL[ ](.*)[ ]REQUIRE LEVEL:[ ](\d+)>/i)) {
        var name = String(RegExp.$1).toUpperCase();
        var level = parseInt(RegExp.$2);
        if (Yanfly.SkillIdRef[name]) {
          var skillId = Yanfly.SkillIdRef[name];
        } else {
          continue;
        }
        obj.skillLevelRequirements[skillId] = level;
      }
    }

    evalMode = 'none';

    if (obj.levelType === 0) {
      obj.startingLevel = 'level = $gameParty.lowestLevelAllMembers()';
    } else if (obj.levelType === 1) {
      obj.startingLevel = 'level = $gameParty.lowestLevelBattleMembers()';
    } else if (obj.levelType === 2) {
      obj.startingLevel = 'level = $gameParty.averageLevelAllMembers()';
    } else if (obj.levelType === 3) {
      obj.startingLevel = 'level = $gameParty.averageLevelBattleMembers()';
    } else if (obj.levelType === 4) {
      obj.startingLevel = 'level = $gameParty.highestLevelAllMembers()';
    } else if (obj.levelType === 5) {
      obj.startingLevel = 'level = $gameParty.highestLevelBattleMembers()';
    }
    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:CUSTOM STARTING LEVEL)>/i)) {
        obj.startingLevel = '';
        evalMode = 'custom starting level';
      } else if (line.match(/<\/(?:CUSTOM STARTING LEVEL)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'custom starting level') {
        obj.startingLevel = obj.startingLevel + line + '\n';
      }
    }
  }
};

DataManager.processELVNotetags2 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    obj.resetEnemyLevel = false;
    obj.changeEnemyLevel = 0;
    obj.enemyLevelEval = '';
    var evalMode = 'none';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(/<(?:CHANGE ENEMY LEVEL):[ ]([\+\-]\d+)>/i)) {
        obj.changeEnemyLevel = parseInt(RegExp.$1);
      } else if (line.match(/<(?:RESET ENEMY LEVEL)>/i)) {
        obj.resetEnemyLevel = true;
      } else if (line.match(/<(?:CUSTOM CHANGE ENEMY LEVEL)>/i)) {
        var evalMode = 'custom change enemy level';
      } else if (line.match(/<\/(?:CUSTOM CHANGE ENEMY LEVEL)>/i)) {
        var evalMode = 'none';
      } else if (evalMode === 'custom change enemy level') {
        obj.enemyLevelEval = obj.enemyLevelEval + line + '\n';
      }
    }
  }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.ELV.Game_BattlerBase_isSkillSealed =
    Game_BattlerBase.prototype.isSkillSealed;
Game_BattlerBase.prototype.isSkillSealed = function(skillId) {
    if (this.isEnemySkillLevelSealed(skillId)) return true;
    return Yanfly.ELV.Game_BattlerBase_isSkillSealed.call(this, skillId);
};

Game_BattlerBase.prototype.isEnemySkillLevelSealed = function(skillId) {
    if (!this.isEnemy()) return false;
    if (!this.enemy().skillLevelRequirements[skillId]) return false;
    var reqLevel = this.enemy().skillLevelRequirements[skillId];
    return this.level < reqLevel;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Object.defineProperty(Game_Enemy.prototype, 'level', {
    get: function() {
        return this._level;
    },
    configurable: true
});

Yanfly.ELV.Game_Enemy_initMembers = Game_Enemy.prototype.initMembers;
Game_Enemy.prototype.initMembers = function() {
    Yanfly.ELV.Game_Enemy_initMembers.call(this);
    this._level = 0;
};

Yanfly.ELV.Game_Enemy_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
    this._enemyId = enemyId;
    this.setupEnemyLevel();
    Yanfly.ELV.Game_Enemy_setup.call(this, enemyId, x, y);
};

Game_Enemy.prototype.setupEnemyLevel = function() {
    var min = this.setupMinimumLevel();
    var max = this.setupMaximumLevel();
    this._level = this.getSetupLevel().clamp(min, max);
    this.applySetupLevelFluctuation();
    this._level = this._level.clamp(1, Yanfly.Param.ELVMaxCap);
    this._originalLevel = this._level;
};

Game_Enemy.prototype.setupMinimumLevel = function() {
    return this.enemy().minLevel;
};

Game_Enemy.prototype.setupMaximumLevel = function() {
    return this.enemy().maxLevel;
};

Game_Enemy.prototype.originalLevel = function() {
    return this._originalLevel;
};

Game_Enemy.prototype.getSetupLevel = function() {
    var level = 0;
    var code = this.enemy().startingLevel;
    try {
      eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'ENEMY STARTING LEVEL ERROR');
    }
    return Math.floor(level);
};

Game_Enemy.prototype.applySetupLevelFluctuation = function() {
    var min = this._level - this.negativeLevelFluctuation();
    var max = this._level + this.positiveLevelFluctuation();
    this._level = Math.floor(Math.random() * (max - min + 1) + min);
};

Game_Enemy.prototype.negativeLevelFluctuation = function() {
    return this.enemy().negativeLevelFluctuation;
};

Game_Enemy.prototype.positiveLevelFluctuation = function() {
    return this.enemy().positiveLevelFluctuation;
};

Yanfly.ELV.Game_Enemy_name = Game_Enemy.prototype.name;
Game_Enemy.prototype.name = function() {
    var name = Yanfly.ELV.Game_Enemy_name.call(this);
    if (this.enemy().showLevel) {
      var fmt = Yanfly.Param.ELVFmt;
      name = fmt.format(this.level, name);
    }
    return name;
};

Yanfly.ELV.Game_Enemy_paramBase = Game_Enemy.prototype.paramBase;
Game_Enemy.prototype.paramBase = function(paramId) {
    this._cacheBaseParam = this._cacheBaseParam || {};
    if (this._cacheBaseParam[paramId]) return this._cacheBaseParam[paramId];
    var base = Yanfly.ELV.Game_Enemy_paramBase.call(this, paramId);
    if (this.enemy().ignoreLevelBonuses) {
      this._cacheBaseParam[paramId] = base;
      return this._cacheBaseParam[paramId];
    }
    var level = this.level;
    var formula = this.enemy().baseParamFormula[paramId];
    var rate = this.enemy().baseParamRate[paramId];
    var flat = this.enemy().baseParamFlat[paramId];
    var user = this;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    try {
      this._cacheBaseParam[paramId] = eval(formula);
    } catch (e) {
      this._cacheBaseParam[paramId] = 0;
      Yanfly.Util.displayError(e, formula, 'ENEMY PARAM BASE FORMULA ERROR');
    }
    return this._cacheBaseParam[paramId];
};

Yanfly.ELV.Game_Enemy_exp = Game_Enemy.prototype.exp;
Game_Enemy.prototype.exp = function() {
    var paramId = 8;
    this._cacheBaseParam = this._cacheBaseParam || {};
    if (this._cacheBaseParam[paramId]) return this._cacheBaseParam[paramId];
    var base = Yanfly.ELV.Game_Enemy_exp.call(this);
    if (this.enemy().ignoreLevelBonuses) {
      this._cacheBaseParam[paramId] = base;
      return this._cacheBaseParam[paramId];
    }
    var level = this.level;
    var formula = this.enemy().baseParamFormula[paramId];
    var rate = this.enemy().baseParamRate[paramId];
    var flat = this.enemy().baseParamFlat[paramId];
    var user = this;
    var b = base;
    var l = level;
    var f = flat;
    var r = rate;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    try {
      this._cacheBaseParam[paramId] = Math.floor(eval(formula));
    } catch (e) {
      this._cacheBaseParam[paramId] = 0;
      Yanfly.Util.displayError(e, formula, 'ENEMY EXP FORMULA ERROR');
    }
    return this._cacheBaseParam[paramId];
};

Yanfly.ELV.Game_Enemy_gold = Game_Enemy.prototype.gold;
Game_Enemy.prototype.gold = function() {
    var paramId = 9;
    this._cacheBaseParam = this._cacheBaseParam || {};
    if (this._cacheBaseParam[paramId]) return this._cacheBaseParam[paramId];
    var base = Yanfly.ELV.Game_Enemy_gold.call(this);
    if (this.enemy().ignoreLevelBonuses) {
      this._cacheBaseParam[paramId] = base;
      return this._cacheBaseParam[paramId];
    }
    var level = this.level;
    var formula = this.enemy().baseParamFormula[paramId];
    var rate = this.enemy().baseParamRate[paramId];
    var flat = this.enemy().baseParamFlat[paramId];
    var user = this;
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    try {
      this._cacheBaseParam[paramId] = Math.floor(eval(formula));
    } catch (e) {
      this._cacheBaseParam[paramId] = 0;
      Yanfly.Util.displayError(e, formula, 'ENEMY GOLD FORMULA ERROR');
    }
    return this._cacheBaseParam[paramId];
};

Game_Enemy.prototype.changeLevel = function(level) {
    if (level === this._level) return;
    if (Yanfly.Param.ELVPreserveRate) {
      var hpRate = this.hp / Math.max(1, this.mhp);
      var mpRate = this.mp / Math.max(1, this.mmp);
      var prevHp = Math.min(this.hp, 1);
    }
    this._level = level.clamp(1, Yanfly.Param.ELVMaxCap);
    this._cacheBaseParam = {};
    this.refresh();
    if (Yanfly.Param.ELVPreserveRate) {
      var max = this.isDead() ? 0 : prevHp;
      var hpAmount = Math.max(max, parseInt(this.mhp * hpRate));
      this.setHp(hpAmount);
      this.setMp(parseInt(this.mmp * mpRate));
    }
};

Game_Enemy.prototype.gainLevel = function(value) {
    this.changeLevel(this.level + value)
};

Game_Enemy.prototype.loseLevel = function(value) {
    this.changeLevel(this.level - value)
};

Game_Enemy.prototype.isResistLevelChange = function() {
    return this.enemy().resistLevelChange;
};

Game_Enemy.prototype.resetLevel = function() {
    this.changeLevel(this.originalLevel());
};

Yanfly.ELV.Game_Enemy_transform = Game_Enemy.prototype.transform;
Game_Enemy.prototype.transform = function(enemyId) {
  Yanfly.ELV.Game_Enemy_transform.call(this, enemyId);
  this._cacheBaseParam = {};
};

//=============================================================================
// Game_Party
//=============================================================================

Game_Party.prototype.lowestLevelAllMembers = function() {
    var length = this.allMembers().length;
    var value = Yanfly.Param.ELVMaxCap;
    for (var i = 0; i < length; ++i) {
      var member = this.allMembers()[i];
      value = Math.min(value, member.level);
    }
    return value;
};

Game_Party.prototype.lowestLevelBattleMembers = function() {
    var length = this.battleMembers().length;
    var value = Yanfly.Param.ELVMaxCap;
    for (var i = 0; i < length; ++i) {
      var member = this.battleMembers()[i];
      value = Math.min(value, member.level);
    }
    return value;
};

Game_Party.prototype.averageLevelAllMembers = function() {
    var length = this.allMembers().length;
    var value = 0;
    for (var i = 0; i < length; ++i) {
      var member = this.allMembers()[i];
      value += member.level;
    }
    return Math.ceil(value / length);
};

Game_Party.prototype.averageLevelBattleMembers = function() {
    var length = this.battleMembers().length;
    var value = 0;
    for (var i = 0; i < length; ++i) {
      var member = this.battleMembers()[i];
      value += member.level;
    }
    return Math.ceil(value / length);
};

Game_Party.prototype.highestLevelAllMembers = function() {
    var length = this.allMembers().length;
    var value = 0;
    for (var i = 0; i < length; ++i) {
      var member = this.allMembers()[i];
      value = Math.max(value, member.level);
    }
    return value;
};

Game_Party.prototype.highestLevelBattleMembers = function() {
    var length = this.battleMembers().length;
    var value = 0;
    for (var i = 0; i < length; ++i) {
      var member = this.battleMembers()[i];
      value = Math.max(value, member.level);
    }
    return value;
};

//=============================================================================
// Game_Troop
//=============================================================================

Game_Troop.prototype.changeLevel = function(value) {
    var length = this.members().length;
    for (var i = 0; i < length; ++i) {
      var member = this.members()[i];
      if (member) member.changeLevel(value);
    }
};

Game_Troop.prototype.gainLevel = function(value) {
    var length = this.members().length;
    for (var i = 0; i < length; ++i) {
      var member = this.members()[i];
      if (member) member.gainLevel(value);
    }
};

Game_Troop.prototype.loseLevel = function(value) {
    var length = this.members().length;
    for (var i = 0; i < length; ++i) {
      var member = this.members()[i];
      if (member) member.loseLevel(value);
    }
};

Game_Troop.prototype.resetLevel = function() {
    var length = this.members().length;
    for (var i = 0; i < length; ++i) {
      var member = this.members()[i];
      if (member) member.resetLevel();
    }
};

Game_Troop.prototype.lowestLevel = function() {
    var length = this.members().length;
    var value = Yanfly.Param.ELVMaxCap;
    for (var i = 0; i < length; ++i) {
      var member = this.members()[i];
      value = Math.min(value, member.level);
    }
    return value;
};

Game_Troop.prototype.averageLevel = function() {
    var length = this.members().length;
    var value = 0;
    for (var i = 0; i < length; ++i) {
      var member = this.members()[i];
      value = member.level;
    }
    return Math.ceil(value / length);
};

Game_Troop.prototype.highestLevel = function() {
    var length = this.members().length;
    var value = 0;
    for (var i = 0; i < length; ++i) {
      var member = this.members()[i];
      value = Math.max(value, member.level);
    }
    return value;
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.ELV.Game_Action_applyItemUserEffect =
    Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function(target) {
    Yanfly.ELV.Game_Action_applyItemUserEffect.call(this, target);
    if (target && target.isEnemy()) this.applyItemEnemyLevelEffects(target);
};

Game_Action.prototype.applyItemEnemyLevelEffects = function(target) {
    if (!this.item()) return;
    if (target.isResistLevelChange()) return;
    if (this.item().resetEnemyLevel) target.resetLevel();
    var level = target.level + this.item().changeEnemyLevel;
    if (this.item().enemyLevelEval !== '') {
      level = this.itemEnemyLevelEval(target, level);
    }
    target.changeLevel(level);
};

Game_Action.prototype.itemEnemyLevelEval = function(target, level) {
    var item = this.item();
    var a = this.subject();
    var b = target;
    var user = this.subject();
    var subject = this.subject();
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    var code = this.item().enemyLevelEval;
    try {
      eval(code);
    } catch (e) {
      Yanfly.Util.displayError(e, code, 'ENEMY LEVEL ITEM ALTER CODE ERROR');
    }
    return level;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.ELV.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
  Yanfly.ELV.Game_Interpreter_pluginCommand.call(this, command, args);
  if (!$gameParty.inBattle()) return;
  if (command === 'EnemyLevelReset') this.resetEnemyLevel(args);
  if (command === 'EnemyLevelResetAll') $gameTroop.resetLevel();
  if (command === 'EnemyLevelChange') this.changeEnemyLevel(args);
  if (command === 'EnemyLevelChangeAll') this.changeEnemyLevelAll(args);
  if (command === 'EnemyGainLevel') this.gainEnemyLevel(args);
  if (command === 'EnemyGainLevelAll') this.gainEnemyLevelAll(args);
  if (command === 'EnemyLoseLevel') this.loseEnemyLevel(args);
  if (command === 'EnemyLoseLevelAll') this.loseEnemyLevelAll(args);
};

Game_Interpreter.prototype.resetEnemyLevel = function(args) {
  if (!args) return;
  var index = parseInt(args[0]) - 1;
  var enemy = $gameTroop.members()[index];
  if (enemy) enemy.resetLevel();
};

Game_Interpreter.prototype.changeEnemyLevel = function(args) {
  if (!args) return;
  var index = parseInt(args[0]) - 1;
  var level = parseInt(args[2]);
  var enemy = $gameTroop.members()[index];
  if (enemy) enemy.changeLevel(level);
};

Game_Interpreter.prototype.changeEnemyLevelAll = function(args) {
  if (!args) return;
  var level = parseInt(args[0]);
  $gameTroop.changeLevel(level);
};

Game_Interpreter.prototype.gainEnemyLevel = function(args) {
  if (!args) return;
  var index = parseInt(args[0]) - 1;
  var level = parseInt(args[2]);
  var enemy = $gameTroop.members()[index];
  if (enemy) enemy.gainLevel(level);
};

Game_Interpreter.prototype.gainEnemyLevelAll = function(args) {
  if (!args) return;
  var level = parseInt(args[0]);
  $gameTroop.gainLevel(level)
};

Game_Interpreter.prototype.loseEnemyLevel = function(args) {
  if (!args) return;
  var index = parseInt(args[0]) - 1;
  var level = parseInt(args[2]);
  var enemy = $gameTroop.members()[index];
  if (enemy) enemy.loseLevel(level);
};

Game_Interpreter.prototype.loseEnemyLevelAll = function(args) {
  if (!args) return;
  var level = parseInt(args[0]);
  $gameTroop.loseLevel(level)
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

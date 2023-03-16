//=============================================================================
// Yanfly Engine Plugins + TheGreenKel - DragonBones Battle Integration
// KELYEP_DragonBones.js
//=============================================================================

var Imported = Imported || {};
Imported.KELYEP_DragonBones = true;

var Yanfly = Yanfly || {};
Yanfly.KelBattle = Yanfly.KelBattle || {};
Yanfly.KelBattle.version = 1.09;

//=============================================================================
 /*:
 * @plugindesc v1.09 龙骨插件☁️
 * @author Yanfly Engine Plugins + TheGreenKel Collaboration
 *
 * @param ---General---
 * @text ---全局---
 * @default
 * 
 * @param Assets Path
 * @text 资产路径
 * @parent ---General---
 * @desc 存储从导出的所有文件的文件夹
 * 龙骨软件5.2(或更高版本)
 * @default ./dragonbones_assets/
 * 
 * @param Support UpperCase Animation Names
 * @text 大写动画名称
 * @parent ---General---
 * @type boolean
 * @on Support
 * @off Don't
 * @desc 如果你的动画名字都是小写的，那就打开这个
 * 提供更好的性能. ON - true   OFF - false
 * @default true
 *
 * @param Debug Console Text
 * @text 调试控制台文本
 * @parent ---General---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc 在控制台上显示各种状态更新?
 * SHOW - true   HIDE - false
 * @default false
 *
 * @param ---Preload---
 * @text ---预加载---
 * @default
 * 
 * @param Preload Assets
 * @text 预加载资产
 * @parent ---Preload---
 * @type text[]
 * @desc 这是在数据库完全加载后，在游戏启动时要预加载的所有DragonBones资产的列表。
 * @default []
 *
 * @param Auto-Preload Battlers
 * @text 自动预加载战斗器
 * @parent ---Preload---
 * @type boolean
 * @on Auto-Preload
 * @off Manual-Preload
 * @desc 当从notetags分配一个资源时自动预加载战列？推荐：正确
 * YES - true     NO - false
 * @default true
 *
 * @param ---Defaults---
 * @text ---默认值---
 * @default
 *
 * @param Replace Battler Sprite
 * @text 替换战斗精灵
 * @parent ---Defaults---
 * @type boolean
 * @on Replace
 * @off Keep
 * @desc 完全替换战斗者的精灵，如果它有相关的龙骨资产？
 * 替换-真     保留-错误
 * @default true
 *
 * @param Default ScaleX
 * @text 默认比例X
 * @parent ---Defaults---
 * @type number
 * @decimals 1
 * @desc The default amount to scale a DragonBones battler's X property.
 * @default 0.5
 *
 * @param Default ScaleY
 * @text 默认比例Y
 * @parent ---Defaults---
 * @type number
 * @decimals 1
 * @desc The default amount to scale a DragonBones battler's Y property.
 * @default 0.5
 *
 * @param Default Width
 * @text 默认宽度
 * @parent ---Defaults---
 * @type number
 * @desc The default amount to set a DragonBones battler's width.
 * @default 100
 *
 * @param Default Height
 * @text 默认高度
 * @parent ---Defaults---
 * @type number
 * @desc The default amount to scale a DragonBones battler's height.
 * @default 100
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * 龙骨允许你的游戏使用骨骼动画，一种电脑
 * 角色(或对象)由皮肤/纹理表示的动画
 * 和一组数字互联骨骼(称为骨骼)。使用器械包
 * 当然，游戏会根据这些皮肤创建动画,
 * 骨骼，以及创建美丽平滑和重量轻的说明
 * movements.
 *
 * This plugin, made by TheGreenKel, and collaborated with Yanfly, will allow
 * 你需要在你的战斗系统中使用龙骨制作的骨骼动画!
 * 这意味着使用骨骼动画，你可以让你的战斗看起来
 * 极其流畅、更加灵活的动画，每帧不到3帧
 * 运动，超过18种可能的运动，去除基于sprite的资源
 * 更快的加载速度，更小的文件大小！换句话说,
 * 如果你有足够的资源，使用它几乎没有任何缺点.
 *
 * This is a collaboration plugin by TheGreenKel and Yanfly to ensure
 * compatibility with the Yanfly Engine Plugins library.
 *
 * ============================================================================
 * MIT License and Terms of Use
 * ============================================================================
 *
 * MIT License for the remaining code of the Plugin
 *
 * Copyright 2017 TheGreenKel
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * Yanfly Engine Plugins Terms of Use
 *
 * Any original material made by Yanfly is free for use with both free and
 * commercial RPG Maker games unless specified otherwise. I do not demand
 * royalties or special liberties if you choose to use Yanfly original content
 * in your commercial games. (Although a free copy of your game would be nice!)
 * I only ask that you provide 'Yanfly' or 'Yanfly Engine' a spot in your
 * game’s credits.
 *
 * Any edits made to Yanfly original material are okay as long as you still
 * provide the proper credit. Any non-Original content posted, linked, or
 * shared on my website and channel will still require you to contact the
 * respective parties for permission of use.
 *
 * ============================================================================
 * Installation Instructions
 * ============================================================================
 *
 * 按照以下说明将龙骨整合到您的游戏中:
 *
 * 1. 确保你至少有RPG Maker MV 1 . 4 . 0或以上版本.
 *    推荐版本为1.5.0及以上!
 *
 * 2. Download the Installation Pack from Yanfly.moe or from:
 *    https://thegreenkel.itch.io/dragonbones-rpg-maker-mv-plugin
 *
 * 3. Extract the Installation Pack using WinZip or WinRar.
 *
 * 4. Copy the contents of the 'js' folder into your project's folder matching
 *    the directory structure and files.
 *
 * 5. Open up your game project's index.html file with Notepad/HTML editor
 *
 * 6. Find <script type="text/javascript" src="js/libs/pixi-picture.js">
 *    and insert the following lines under it:
 *
 * <script type="text/javascript" src="js/libs/dragonbones/dragonBones.js"></script>
 * <script type="text/javascript" src="js/libs/dragonbones/dragonBonesPixi.js"></script>
 *
 * 7. Install this plugin by adding it through your Plugin Manager.
 *
 * 8. Make sure this plugin is located UNDER the following plugins:
 *      YEP_BattleEngineCore
 *      YEP_X_ActSeqPack1
 *      YEP_X_ActSeqPack2
 *      YEP_X_ActSeqPack3
 *      YEP_X_AnimatedSVEnemies
 *
 * 9. Copy the DragonBone assets from the Installation pack into the respective
 *    folder you wish for your game project. Adjust the 'Assets Path' plugin
 *    parameter to match the folder path.
 *
 * 10. Save your game project!
 *
 * ============================================================================
 * General Usage by TheGreenKel
 * ============================================================================
 *
 * The plugin is only tested on DragonBones 5.2 & 5.3. I rewrote a chunk of the
 * plugin to make it compatible with Yanfly plugins, and possibly more.
 *
 * Usage:    
 *     1) After confirming your DragonBones Armature/Skeleton shares the name of
 *        your Battler, export DragonBones data (with Data Version set to 5.0)
 *        into the 'Assets Path' parameter. Default is 'dragonbones_assets'
 * 
 *     2) Add the new armature data into 'Preload Assets' parameter
 * 
 *     3) This plugin will automatically look for the 18 default 
 *        animations inside the dragonbones armature. 
 *        [walk, swing, damage, dead, wait, chant, guard, etc.]
 * 
 *     4) You can overwrite default animation by using 
 *        'dragonbone_ani_' notes.  
 *        Example: 'dragonbone_ani_walk:steady', the 'steady' animation 
 *        will be played inplace of the 'walk'
 * 
 *     5) Vanilla actor/enemies now show up by default.  You need to 
 *        replace it with a blank image.  Check the demo project to see
 *        what a blank image would look like.  This change will make this
 *        plugin more compatible with plugins that changes UI.
 *          
 *     6) If you are using Yanfly Action Sequence 2, you can now play any 
 *        dragonbones' animation using the 'motion' command.
 *        Example: "motion dance".  The game will look into the dragonbones
 *        armature to see if it has the 'dance' animation.  If the animation 
 *        is there then the animation will be played.
 * 
 *     7) You can now control whether an animation is looping or not 
 *        by setting the 'Play Times' variable inside the Dragonbones Editor.
 *  
 *     8) Get more info/tutorial at forum link: 
 *        https://forums.rpgmakerweb.com/index.php?threads/rmmv-dragonbones-2d-animation-integration.81027/
 *
 * Important DragonBones Animation note:    
 *        A limitation of DragonBones Data version 5.0 is that you must use
 *        the same animation curves for position/rotation/scale keys.
 *        Below is an example of how the DragonBones and exported version
 *        differ because it prioritized the positions animation curve.
 *        https://gyazo.com/fd3539028c0ecadd2a727b99ac8398a4
 *        https://gyazo.com/e79427f5f5b5e4b56a15dfc2bf76253f
 *
 * ============================================================================
 * 备注
 * ============================================================================
 *
 * 使用下面的笔记标签，充分利用你的龙骨战斗集成为您的RPG制造商MV游戏！
 *
 * 演员和敌人标签：
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   <DragonBone: name>
 *   <DragonBone Battler: name>
 *   - 将骨骼动画和角色或敌人关联，一般用于检查以_ske.json，_tex.json和
 *     _tex.png结尾的关联文件名。列出的资源必须在您的游戏文件夹中找到。
 *
 *   该名称区分大小写。
 *   注意：如果插件参数“Auto-Preload Battlers”设置为“true”，
 *   那么这将进去预加载资源列表
 *
 *   **EXAMPLES**
 *
 *   <DragonBone: Demon>
 *   <DragonBone: DragonBoy>
 *   <DragonBone: Swordsman>
 *   <DragonBone: Ubbie>
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   如果在这里没有检测到DragonBones战斗者，
 *   它将无法使用以下的标签及其效果
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   <DragonBone ScaleX: n>
 *   <DragonBone ScaleY: n>
 *   - 用数字替换'n'。它可以是正或负，整数或十进制数。
 *     这将影响战斗者的比例。小于1的将缩小，大于1的将放大。
 *     如果为负数，则将根据ifScaleX或ScaleY分别使用水平或垂直镜像。
 *
 *   这将覆盖“Default ScaleX”和“Default ScaleY”的插件参数中的设置。
 * 
 *   **EXAMPLES**
 *
 *   <DragonBone ScaleX: -0.3>
 *   <DragonBone ScaleY: 0.3>
 *
 *   <DragonBone ScaleX: 1.2>
 *   <DragonBone ScaleY: 1.2>
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   <DragonBone Width: x>
 *   <DragonBone Height: x>
 *   - 这样可以通过用“x”来设置骨骼动画的宽度和高度。
 *     该值主要用于碰撞目的以及鼠标点击激活。
 *     可以调整这些值，因为每个战斗者都可以是动态的宽度/高度，
 *     所以重要的是要正确调整它们。
 *     如果没有调整，它们将占用插件参数中的默认宽度/高度值。
 *
 *   **EXAMPLES**
 *
 *   <DragonBone Width: 150>
 *   <DragonBone Height: 180>
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   <DragonBone Keep Sprite>
 *   <DragonBone Replace Sprite>
 *   - 让你决定是否要保留用于角色或敌人的原始图像，
 *     或者让骨骼动画完全替换它。
 *     如果您选择更换图像，那么只要有一个骨骼动画代替它，
 *     那么图像将在战斗中被隐藏
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   <DragonBone Ani motion: animation>
 *   - 用适当的战斗名称替换'motion'。 
 *     ‘animation’ 将被骨骼动画名称所取代。
 *     这是可以用于没有相同名称的骨骼动画的任何动作。
 *
 *   你可以用下面的动画代替“motion”：
 *                  attack
 *     walk         thrust        escape
 *     wait         swing         victory
 *     chant        missile       dying
 *     guard        skill         abnormal
 *     damage       spell         sleep
 *     evade        item          dead
 *
 *   * 要更换的动作区分大小写。
 *
 *   **EXAMPLES**
 *
 *   <DragonBone Ani Attack: normalAttack>
 *   <DragonBone Ani Walk: steady>
 *   <DragonBone Ani Damage: hit>
 *   <DragonBone Ani Dead: dead>
 *   <DragonBone Ani Wait: steady>
 *   <DragonBone Ani Chant: stun>
 *   <DragonBone Ani Swing: stun>
 *   <DragonBone Ani Evade: stun>
 *   <DragonBone Ani Thrust: stun>
 *   <DragonBone Ani Missile: stun>
 *   <DragonBone Ani Skill: stun>
 *   <DragonBone Ani Spell: stun>
 *   <DragonBone Ani Item: stun>
 *   <DragonBone Ani Victory: stun>
 *   <DragonBone Ani Dying: stun>
 *   <DragonBone Ani Abnormal: stun>
 *   <DragonBone Ani Sleep: stun>
 *
 *   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *   对于想要更多战斗动画设置的人，你可以使用下面的命令
 *
 *   <DragonBone Settings>
 *    Battler: name             // The name used for the DB battler
 *    
 *    ScaleX: 0.3               // Scale X used for the DB battler
 *    ScaleY: 0.3               // Scale Y used for the DB battler
 *    Width: 150                // Width used for the DB battler
 *    Height: 180               // Height used for the DB battler
 *
 *    // 以下是一系列与骨骼动画相关的战斗动作。
 *
 *    Ani Attack: normalAttack
 *    Ani Walk: steady
 *    Ani Damage: hit
 *    Ani Dead: dead
 *    Ani Wait: steady
 *    Ani Chant: stun
 *    Ani Swing: stun
 *    Ani Evade: stun
 *    Ani Thrust: stun
 *    Ani Missile: stun
 *    Ani Skill: stun
 *    Ani Spell: stun
 *    Ani Item: stun
 *    Ani Victory: stun
 *    Ani Dying: stun
 *    Ani Abnormal: stun
 *    Ani Sleep: stun
 *    
 *    Keep Sprite             // 允许精灵显示在DB battler旁边
 *    Replace Sprite          // 在DB battler激活时隐藏精灵
 *   </DragonBone Settings>
 *
 *   - 任何放置在<DragonBone Settings>和</ DragonBone Settings>
 *     将用于确定为角色/敌人使用的骨骼动画设置的属性。
 *     除了'name'属性，所有其他属性都是可选的。
 *
 *   **EXAMPLES**
 *
 *   <DragonBone Settings>
 *    Battler: Ubbie
 *    Replace Sprite
 *    ScaleX: -0.2
 *    ScaleY: 0.2
 *    Width: 150
 *    Height: 100
 *   </DragonBone Settings>
 *
 *   <DragonBone Settings>
 *    Battler: Demon
 *    Replace Sprite
 *    ScaleX: 0.3
 *    ScaleY: 0.3
 *    Width: 140
 *    Height: 140
 *   </DragonBone Settings>
 *
 *   <DragonBone Settings>
 *    Battler: Swordsman
 *    Replace Sprite
 *    ScaleX: -0.4
 *    ScaleY: 0.4
 *    Width: 150
 *    Height: 180
 *   </DragonBone Settings>
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.09;
 * - Bugfix updated by SwiftIllusion to make sure blend color are inherited
 * by actor Dragonbones sprites.
 *
 * Version 1.08:
 * - Bugfix by Irina & SwiftIllusion for Flash Colors on Dragonbones battlers
 *
 * Version 1.07:
 * - Bugfixed for animation height rate for Dragonbones battlers.
 *
 * Version 1.06:
 * - Bugfix for Action Sequences for Jump and Float not affecting units with
 * DragonBones battlers.
 *
 * Version 1.05:
 * - Bugfix provided for crashes made by animations played on non-battler
 * sprites.
 *
 * Version 1.04:
 * - Bugfix provided by SwiftIllusion regarding the animation positioning on
 * DragonBones battlers.
 *
 * Version 1.03:
 * - Fixed an issue with state sprites appearing behind DragonBones assets.
 *
 * Version 1.02:
 * - Change to collapse effect occuring after death animation is completed so
 * that it fades away like normal instead of being stuck on the field.
 * Credits: Swift Illusion
 *
 * Version 1.01:
 * - If using YEP_X_AnimatedSVEnemies, enemies with DragonBones battlers will
 * be considered animated enemies, too.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= "1.3.5") {

//=============================================================================
// Parameter Variables
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel and Yanfly
//=============================================================================

var dragonBonesIntegration = [];

dragonBonesIntegration.ArmatureDatabaseEnemy = [];
dragonBonesIntegration.ArmatureDatabaseActor = [];

dragonBonesIntegration.currentLoadIndex = 0;
dragonBonesIntegration.lastFileName = '';
dragonBonesIntegration.bIsPreloading = false;

Yanfly.Parameters = PluginManager.parameters('KELYEP_DragonBones');

dragonBonesIntegration.AssetsPath = String(Yanfly.Parameters['Assets Path']);
dragonBonesIntegration.supportUpperCaseNames =
  JSON.parse(Yanfly.Parameters['Support UpperCase Animation Names']);
dragonBonesIntegration.consoleDebug =
  JSON.parse(Yanfly.Parameters['Debug Console Text']);

dragonBonesIntegration.AssetsArray = 
  JSON.parse(Yanfly.Parameters['Preload Assets']);
dragonBonesIntegration.autoPreloadBattlers = 
  JSON.parse(Yanfly.Parameters['Auto-Preload Battlers']);

dragonBonesIntegration.ReplaceBattleSprite =
  JSON.parse(Yanfly.Parameters['Replace Battler Sprite']);
dragonBonesIntegration.DefaultScaleX = 
  Number(Yanfly.Parameters['Default ScaleX']);
dragonBonesIntegration.DefaultScaleY = 
  Number(Yanfly.Parameters['Default ScaleY']);
dragonBonesIntegration.DefaultWidth = 
  Number(Yanfly.Parameters['Default Width']);
dragonBonesIntegration.DefaultHeight = 
  Number(Yanfly.Parameters['Default Height']);

//=============================================================================
// DataManager
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel and Yanfly
//=============================================================================

Yanfly.KelBattle.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.KelBattle.DataManager_isDatabaseLoaded.call(this)) return false;

  if (!Yanfly._loaded_KELYEP_DragonBones) {
    this.processDragonBonesBattleIntegrationNotetags1($dataActors);
    this.processDragonBonesBattleIntegrationNotetags1($dataEnemies);
    dragonBonesIntegration.PreLoadAllArmatures();
    Yanfly._loaded_KELYEP_DragonBones = true;
  }

  if (dragonBonesIntegration.bIsPreloading === true) {
    //console.log('Running isDatabaseLoaded');
    return false;
  }
  return true;
};

DataManager.processDragonBonesBattleIntegrationNotetags1 = function(group) {
  for (var n = 1; n < group.length; n++) {
    var obj = group[n];
    var notedata = obj.note.split(/[\r\n]+/);

    this.processDragonBonesDefaults(obj);
    var evalMode = 'none';

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      // Standard Notetags
      if (line.match(/<(?:DB|DRAGONBONE)[ ](?:BATTLER|SKIN|NAME):[ ]*(.*)>/i)) {
        obj.meta.dragonbone = String(RegExp.$1).trim();
      } else if (line.match(/<(?:DB|DRAGONBONE):[ ]*(.*)>/i)) {
        obj.meta.dragonbone = String(RegExp.$1).trim();
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]SCALEX:[ ](.*)>/i)) {
        obj.meta.dragonbone_scalex = Number(RegExp.$1);
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]SCALEY:[ ](.*)>/i)) {
        obj.meta.dragonbone_scaley = Number(RegExp.$1);
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]WIDTH:[ ](.*)>/i)) {
        obj.meta.dragonbone_width = Number(RegExp.$1);
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]HEIGHT:[ ](.*)>/i)) {
        obj.meta.dragonbone_height = Number(RegExp.$1);
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]ANI[ ](.*):[ ](.*)>/i)) {
        var ani1 = String(RegExp.$1).trim().toLowerCase();
        var ani2 = String(RegExp.$2).trim();
        obj.meta['dragonbone_ani_' + ani1] = ani2;
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]REPLACE SPRITE>/i)) {
        obj.meta.dragonbone_replace = true;
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ]KEEP SPRITE>/i)) {
        obj.meta.dragonbone_replace = false;
      // Grouped Notetags
      } else if (line.match(/<(?:DB|DRAGONBONE)[ ](?:SETTINGS|SETTING)>/i)) {
        evalMode = 'dragonbone settings';
      } else if (line.match(/<\/(?:DB|DRAGONBONE)[ ](?:SETTINGS|SETTING)>/i)) {
        evalMode = 'none';
      } else if (evalMode === 'dragonbone settings') {
        if (line.match(/(?:BATTLER|SKIN|NAME):[ ]*(.*)/i)) {
          obj.meta.dragonbone = String(RegExp.$1).trim();
        } else if (line.match(/SCALEX:[ ](.*)/i)) {
          obj.meta.dragonbone_scalex = Number(RegExp.$1);
        } else if (line.match(/SCALEY:[ ](.*)/i)) {
          obj.meta.dragonbone_scaley = Number(RegExp.$1);
        } else if (line.match(/ANI[ ](.*):[ ](.*)/i)) {
          var ani1 = String(RegExp.$1).trim().toLowerCase();
          var ani2 = String(RegExp.$2).trim();
          obj.meta['dragonbone_ani_' + ani1] = ani2;
        } else if (line.match(/WIDTH:[ ](.*)/i)) {
          obj.meta.dragonbone_width = Number(RegExp.$1);
        } else if (line.match(/HEIGHT:[ ](.*)/i)) {
          obj.meta.dragonbone_height = Number(RegExp.$1);
        } else if (line.match(/REPLACE SPRITE/i)) {
          obj.meta.dragonbone_replace = true;
        } else if (line.match(/KEEP SPRITE/i)) {
          obj.meta.dragonbone_replace = false;
        }
      }
    }
    DataManager.processDragonBonesData(obj);
  }
};

DataManager.processDragonBonesDefaults = function(obj) {
  obj.meta.dragonbone = obj.meta.dragonbone || '';
  obj.meta.dragonbone_scalex = obj.meta.dragonbone_scalex ||
    dragonBonesIntegration.DefaultScaleX;
  obj.meta.dragonbone_scaley = obj.meta.dragonbone_scaley ||
    dragonBonesIntegration.DefaultScaleY;
  obj.meta.dragonbone_width = obj.meta.dragonbone_width ||
    dragonBonesIntegration.DefaultWidth;
  obj.meta.dragonbone_height = obj.meta.dragonbone_height ||
    dragonBonesIntegration.DefaultHeight;

  obj.meta.dragonbone_replace = dragonBonesIntegration.ReplaceBattleSprite;
};

DataManager.processDragonBonesData = function(obj) {
  if (!obj.meta.dragonbone) return;
  if (!dragonBonesIntegration.AssetsArray.contains(obj.meta.dragonbone)) {
    dragonBonesIntegration.AssetsArray.push(obj.meta.dragonbone);
  }
};

//=============================================================================
// dragonBonesIntegration
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel
//=============================================================================
    
//create a bunch of 'DragonBoy' armature to test performance
dragonBonesIntegration.Performance = function(iMax, jMax) {
  if (iMax === undefined || iMax === null) {
    iMax = 10;
  }
  if (!jMax === undefined || jMax === null) {
    jMax = 10;
  }
  for (var i = 0; i < iMax; i++) {
    for (var j = 0; j < jMax; j++) {
      var myArmature = 
        dragonBones.PixiFactory.factory.buildArmatureDisplay("DragonBoy");
      myArmature.animation.play("walk");
      SceneManager._scene.addChild(myArmature);
      myArmature.x = i*40 + 200;
      myArmature.y = j*40 + 200;
      myArmature.scale.x = 0.3;
      myArmature.scale.y = 0.3;
    }
  }
};

//Load complete
dragonBonesIntegration.LoadComplete = function(loader, resources) {
  var lastFileName = dragonBonesIntegration.lastFileName;
  //console.log("DragonBone Load Complete: " + lastFileName);

  //load dragon bone armature into memory ready for use by
  //dragonBonesIntegration.CreateArmature()
  dragonBones.PixiFactory.factory.parseDragonBonesData(resources[lastFileName +
    "dragonBonesData"].data);
  dragonBones.PixiFactory.factory.parseTextureAtlasData(resources[lastFileName +
    "textureDataA"].data, resources[lastFileName + "textureA"].texture);
  
  //load next dragonbone armature if not done
  if (dragonBonesIntegration.bIsPreloading) {
    dragonBonesIntegration.currentLoadIndex++;
    dragonBonesIntegration.PreLoadAllArmatures();
  }

};

//Load DragonBone data for use by dragonBonesIntegration.CreateArmature()
dragonBonesIntegration.Load = function(filename) {
  if (filename) {
    filename = filename.trim();
    dragonBonesIntegration.lastFileName = filename;

    PIXI.loader
    .add(filename + "dragonBonesData", dragonBonesIntegration.AssetsPath +
      filename + "_ske.json")
    .add(filename + "textureDataA", dragonBonesIntegration.AssetsPath +
      filename + "_tex.json")
    .add(filename + "textureA", dragonBonesIntegration.AssetsPath + filename +
      "_tex.png");
    PIXI.loader.once("complete", dragonBonesIntegration.LoadComplete, this,
      filename);
    PIXI.loader.load();
  }
};

//Preload all DragonBones data assigned in 'Preload Assets' parameter
//This is done when this plugin is loaded.
dragonBonesIntegration.PreLoadAllArmatures = function() {
  //only load what is inside of dragonBoneAssetsArray
  var index = dragonBonesIntegration.currentLoadIndex;
  if (index < dragonBonesIntegration.AssetsArray.length) {
    dragonBonesIntegration.bIsPreloading = true;
    dragonBonesIntegration.Load(dragonBonesIntegration.AssetsArray[index]);
  } else {
    dragonBonesIntegration.bIsPreloading = false;
    //SceneManager.run(Scene_Boot);
  }
};

//Create DragonBones armature ready for display on Scene.
//DragonBones armature must be already loaded by dragonBonesIntegration.Load()
dragonBonesIntegration.CreateArmature = function(armatureName, x, y) {
  var tempArmature = 
    dragonBones.PixiFactory.factory.buildArmatureDisplay(armatureName);
  if (tempArmature) {
    tempArmature.x = x;
    tempArmature.y = y;
  }
  return tempArmature;
}

//Play animation on actor/enemies.  This also handle default and overwrite
//animation behavior
dragonBonesIntegration.PlayAnimationOnBattler = function(battler, aniName) {
  //console.log("PlayAnimationOnBattler: " + battler.name() + " animation =
  //" + aniName);
  var armature;
  var result = false;

  if (battler && aniName) {
    if (battler.hasDragonBone === true) {
      //select armature depending on enemy or actor
      var index = battler.dragonboneIndex
      if (battler.isActor()) {
        armature = dragonBonesIntegration.ArmatureDatabaseActor[index];
      } else {
        armature = dragonBonesIntegration.ArmatureDatabaseEnemy[index];
      }

      //check for overwrite animation from dragonbone_ani Note tag
      var cmd = aniName.toLowerCase();
      var dragonBoneaniName = battler.dragonboneAnimation[cmd];
      if (dragonBoneaniName) {
        //console.log("Overwriting Animation: " + cmd + " with " + 
        //dragonBoneaniName);
        cmd = dragonBoneaniName;
      }
      
      //play animation if armature is valid
      if (armature) { 
        //if animation is found then play it
        if (armature.animation.animationList.contains(cmd)) {
          //if animation name match exactly then play
          armature.animation.play(cmd);
          result = true;
        } else if (dragonBonesIntegration.supportUpperCaseNames === true) {
          //search for animation name with case-insensitive.  Higher memory
          // cost + performance
          //Prefer method is to have all dragonbones animation be lower case.
          //console.log("supportUpperCaseNames: Search for animation with 
          //case-insensitive");
          for (var i = 0; i < armature.animation.animationList.length; i++) {
            var element = armature.animation.animationList[i];
            if (cmd === element.toLowerCase()) {
              //console.log("actionMotionTarget: Found lower case match for
              //" + cmd + " with " + element);
              armature.animation.play(element);
              result = true;
              break;
            }                                
          }
        } else {
          if (dragonBonesIntegration.consoleDebug) {
            console.log("PlayAnimationOnBattler: " + battler.name() +
              " Animation '" + aniName + "' not found.");
          }
        }
      }     
    }
  }

  return result;
};

//=============================================================================
// SceneManager
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel
//=============================================================================

//(Must have for animation) Tick function required for dragonbone animations
dragonBonesIntegration.SceneManager_update = SceneManager.update;
SceneManager.update = function() {
  dragonBonesIntegration.SceneManager_update.call(this);

  if (dragonBones.PixiFactory._clock) {
    dragonBones.PixiFactory._clock.advanceTime(-1);
  }
};

//=============================================================================
// Spriteset_Battle
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel
//=============================================================================

// CREATE DRAGONBONES ARMATURE DURING SPRITESET_BATTLE
Spriteset_Battle.prototype.createEnemies = function() {
  //enemies is an array of Game_Enemy
  var enemies = $gameTroop.members();
  var sprites = [];

  for (var i = 0; i < enemies.length; i++) {
    sprites[i] = new Sprite_Enemy(enemies[i]);

    var enemyId = enemies[i]._enemyId;

    var tempArmatureName = $dataEnemies[enemyId].meta.dragonbone;
    var tempScaleX = $dataEnemies[enemyId].meta.dragonbone_scalex;
    var tempScaleY = $dataEnemies[enemyId].meta.dragonbone_scaley;
    var tempStartAnimation = $dataEnemies[enemyId].meta.dragonbone_ani_walk;

    if (tempArmatureName) {
      //Delete last battle armature
      if (dragonBonesIntegration.ArmatureDatabaseEnemy[i]) {
        dragonBonesIntegration.ArmatureDatabaseEnemy[i].dispose();
      }

      //create new armature
      dragonBonesIntegration.ArmatureDatabaseEnemy[i] = 
        dragonBonesIntegration.CreateArmature(tempArmatureName, 0, 0);
  
      if (dragonBonesIntegration.ArmatureDatabaseEnemy[i]) {
        //tell whether a battler has a dragonbone armature
        enemies[i].hasDragonBone = true;

        //Store index of armature for later use
        //Can't store armature on enemy directly because of potential memory 
        //leak issue
        enemies[i].dragonboneIndex = i;
        enemies[i].dragonboneAnimation = [];

        //parse meta data into animation
        for (var key in $dataEnemies[enemyId].meta) {
          if ($dataEnemies[enemyId].meta.hasOwnProperty(key)) {
            var animationIndex = key.split("dragonbone_ani_");
            //console.log("animationIndex = " + animationIndex);
            if (animationIndex[1]) {
              enemies[i].dragonboneAnimation[animationIndex[1]] =
                $dataEnemies[enemyId].meta[key];
            }
          }
        }

        //set up auto transition to idle
        //transition to idle when animation finish playing.  
        //This should stop most animation hitches.
        enemies[i].AutoTransitionToIdle = function(event) {
          if (dragonBonesIntegration.consoleDebug) {
            console.log("Enemy AutoTransitionToIdle");
          }
          switch (event.type) {
            case dragonBones.EventObject.COMPLETE:
              //if actor is not knocked out
              if (this._states.contains(1) === false) {
                //var idleAnimation = this.dragonboneAnimation['walk'];
                //dragonBonesIntegration.ArmatureDatabaseEnemy
                //[this.dragonboneIndex].animation.play(idleAnimation);
                dragonBonesIntegration.PlayAnimationOnBattler(this, "walk");
              } else {
                dragonBonesIntegration.Game_Enemy_prototype_performCollapse.call(this);
              };
              break;
            default:
              //nothing
          }                                           
        }

        //Automatically transition to idle when animation is complete by using 
        //Event
        var enemyData = dragonBonesIntegration.ArmatureDatabaseEnemy[i];
        enemyData.addEvent(dragonBones.EventObject.COMPLETE,
          enemies[i].AutoTransitionToIdle, 
          enemies[i]);

        //play default idle animation on creation    
        dragonBonesIntegration.PlayAnimationOnBattler(enemies[i], "walk");   

        //set custom scale
        if (tempScaleX) {
          dragonBonesIntegration.ArmatureDatabaseEnemy[i].scale.x = tempScaleX;
        }

        //set custom scale            
        if (tempScaleY) {
          dragonBonesIntegration.ArmatureDatabaseEnemy[i].scale.y = tempScaleY;
        }

        sprites[i].addChild(dragonBonesIntegration.ArmatureDatabaseEnemy[i]);
        sprites[i]._dragonboneSprite = dragonBonesIntegration.ArmatureDatabaseEnemy[i];
      }

    } else {
      enemies[i].dragonboneIndex = null;
    }
  }

  sprites.sort(this.compareEnemySprite.bind(this));

  for (var i = 0; i < sprites.length; i++) {
    this._battleField.addChild(sprites[i]);
  }

  this._enemySprites = sprites;
}

Spriteset_Battle.prototype.createActors = function() {
  this._actorSprites = [];
  for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
    this._actorSprites[i] = new Sprite_Actor();

    var actorId = $gameParty._actors[i];
    if (actorId) {
      //console.log($dataActors[actorId]);
      var tempArmatureName = $dataActors[actorId].meta.dragonbone;
      var tempScaleX = $dataActors[actorId].meta.dragonbone_scalex;
      var tempScaleY = $dataActors[actorId].meta.dragonbone_scaley;
      
      if (tempArmatureName) {
        //Delete last battle armature
        if (dragonBonesIntegration.ArmatureDatabaseActor[i]) {
          dragonBonesIntegration.ArmatureDatabaseActor[i].dispose();
        }

        //create new armature
        dragonBonesIntegration.ArmatureDatabaseActor[i] = 
          dragonBonesIntegration.CreateArmature(tempArmatureName, 0, 0);
        
        //initialize dragon data inside the game actor in order to handle 
        //animation state changes
        if (dragonBonesIntegration.ArmatureDatabaseActor[i]) {
          //tell whether a battler has a dragonbone armature
          $gameActors.actor(actorId).hasDragonBone = true;
          $gameActors.actor(actorId).dragonboneIndex = i;
          $gameActors.actor(actorId).dragonboneAnimation = [];

          //transition to idle when animation finish playing.  This should stop 
          //most animation hitches.
          $gameActors.actor(actorId).AutoTransitionToIdle = function(event) {
            switch (event.type) {
              case dragonBones.EventObject.COMPLETE:
                //if actor is not knocked out
                if (this._states.contains(1) === false) {
                  //var idleAnimation = this.dragonboneAnimation['walk'];
                  //dragonBonesIntegration.ArmatureDatabaseActor
                  //[this.dragonboneIndex].animation.play(idleAnimation); 
                  this.lastMotionType = null;
                  dragonBonesIntegration.PlayAnimationOnBattler(this, "walk");
                }
                break;
              default:
                //nothing
            }                                           
          }

          //Automatically transition to idle when animation is complete by using
          //Event
          var actorData = dragonBonesIntegration.ArmatureDatabaseActor[i];
          actorData.addEvent(dragonBones.EventObject.COMPLETE,
            $gameActors.actor(actorId).AutoTransitionToIdle, 
            $gameActors.actor(actorId));

          //parse meta data into animation
          for (var key in $dataActors[actorId].meta) {
            if ($dataActors[actorId].meta.hasOwnProperty(key)) {
              var animationIndex = key.split("dragonbone_ani_");
              if (animationIndex[1]) {
                var actor = $gameActors.actor(actorId)
                actor.dragonboneAnimation[animationIndex[1]] = 
                  $dataActors[actorId].meta[key];
              }
              //console.log('Key = ' + key +  ' :: ' +  animationIndex + " = " +
              //$dataActors[actorId].meta[key]);
              //console.log(key + " -> " + $dataActors[actorId].meta[key]);
            }
          }

          //set scale
          if (tempScaleX) {
            dragonBonesIntegration.ArmatureDatabaseActor[i].scale.x = 
              tempScaleX;
          }
          if (tempScaleY) {
            dragonBonesIntegration.ArmatureDatabaseActor[i].scale.y = 
              tempScaleY;
          }
          var actorData = dragonBonesIntegration.ArmatureDatabaseActor[i];
          this._actorSprites[i].addChild(actorData);
          this._actorSprites[i]._dragonboneSprite = actorData;
        }                    
      }
    }

    this._battleField.addChild(this._actorSprites[i]);
  }
};

//=============================================================================
// Sprite_Animation
// ----------------------------------------------------------------------------
// Code provided by SwiftIllusion
//=============================================================================

dragonBonesIntegration.Sprite_Animation_updatePosition =
  Sprite_Animation.prototype.updatePosition;
Sprite_Animation.prototype.updatePosition = function() {
  dragonBonesIntegration.Sprite_Animation_updatePosition.call(this);
  this.updateDragonBonesPosition();
};

Sprite_Animation.prototype.updateDragonBonesPosition = function() {
  var position = this._animation.position;
  if (position === 3) return;
  var battler = this._target._battler;
  if (!this._target) return;
  if (!this._target._battler && (this._target._battler !== undefined)) return;
  if (battler !== undefined) {
    var data = battler.isActor() ? battler.actor() : battler.enemy();
    if (position === 0) {
      this.y -= data.meta.dragonbone_height;
    } else if (position === 1) {
      this.y -= data.meta.dragonbone_height / 2;
    }
    var heightRate = battler.battler().getFloatHeight() + battler.battler().getJumpHeight();
    var height = heightRate * data.meta.dragonbone_height;
    this.y -= height;
  } else {
    var battler = this._target.parent._battler;
    if (battler && battler.hasDragonBone) {
      var data = battler.isActor() ? battler.actor() : battler.enemy();
      if (position === 0) {
        this.y -= data.meta.dragonbone_height;
      } else if (position === 1) {
        this.y -= data.meta.dragonbone_height / 2;
      }
      var heightRate = battler.battler().getFloatHeight() + battler.battler().getJumpHeight();
      var height = heightRate * data.meta.dragonbone_height;
      this.y -= height;
    }
  }
};

//=============================================================================
// Sprite_Battler
// ----------------------------------------------------------------------------
// Code provided by Yanfly
//=============================================================================

dragonBonesIntegration.Sprite_Battler_update = Sprite_Battler.prototype.update;
Sprite_Battler.prototype.update = function() {
  dragonBonesIntegration.Sprite_Battler_update.call(this);
  if (this._battler) this.updateStateIconSpritePosition()
};

dragonBonesIntegration.Sprite_Battler_updatePosition = Sprite_Battler.prototype.updatePosition;
Sprite_Battler.prototype.updatePosition = function() {
    dragonBonesIntegration.Sprite_Battler_updatePosition.call(this);
    if (Imported.YEP_X_ActSeqPack2 && this._battler.hasDragonBone) {
        var battler = this._battler.isActor() ? this._battler.actor() : this._battler.enemy();
        var heightRate = this.getFloatHeight() + this.getJumpHeight();
        var height = battler.meta.dragonbone_height * heightRate;
        this.anchor.y += height;
        this.y -= height;
    }
};

Sprite_Battler.prototype.updateStateIconSpritePosition = function() {
  if (this._dbStateSpritesUpdated !== undefined) return;
  this._dbStateSpritesUpdated = true;
  if (this._stateSprite) {
    this.removeChild(this._stateSprite);
    this.addChild(this._stateSprite);
  }
  if (this._stateIconSprite) {
    this.removeChild(this._stateIconSprite);
    this.addChild(this._stateIconSprite);
  }
};

// Code provided by Swift Illusion
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("pixi.js")):"function"==typeof define&&define.amd?define(["exports","pixi.js"],n):n(t.__filters={},t.PIXI)}(this,function(t,n){"use strict";var r="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",e="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n",i=function(t){function n(n){t.call(this,r,e),Object.assign(this,{gamma:1,saturation:1,contrast:1,brightness:1,red:1,green:1,blue:1,alpha:1},n)}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.apply=function(t,n,r,e){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,t.applyFilter(this,n,r,e)},n}(n.Filter);t.DragonbonesFilter=i}),Object.assign(PIXI.filters,this.__filters);

// Code provided by Irina and Swift Illusion
Sprite_Base.prototype.setBlendColor = function(color) {
  if (this._battler) {
    if (this._dragonboneSprite) this.setDragonbonesSpriteFlashColor(color);
  } else if (this.parent._battler) {
    if (this.parent._dragonboneSprite) this.parent.setDragonbonesSpriteFlashColor(color);
  }
};

Sprite_Battler.prototype.setDragonbonesSpriteFlashColor = function(color) {
    this.setupDragonbonesSpriteFlashFilter();
    this.updateDragonbonesSpriteFlashFilter(color);
};

Sprite_Battler.prototype.setupDragonbonesSpriteFlashFilter = function() {
    var sprite = this._dragonboneSprite;
    sprite._filters = sprite._filters || [];
    if (sprite._flashFilter) return;
    sprite._flashFilter = new PIXI.filters.DragonbonesFilter();
    sprite._filters.push(sprite._flashFilter);
};

// Code provided by Irina, numbers by Swift Illusion
Sprite_Battler.prototype.updateDragonbonesSpriteFlashFilter = function(color) {
    var filter = this._dragonboneSprite._flashFilter;
    if (!filter) return;
    var baseline = 127.5; // 255 / 2
    var intensity = (Math.max(0, color[3]) / 255);
    filter.red   = 1 + intensity * ((color[0] / baseline) - 1);
    filter.green = 1 + intensity * ((color[1] / baseline) - 1);
    filter.blue  = 1 + intensity * ((color[2] / baseline) - 1);
    filter.contrast = 1- intensity;
    filter.brightness = 1;
};

//=============================================================================
// Spriteset_Actor
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel
//=============================================================================

// SPRITE REPLACEMENT: ENEMY, ACTOR, WEAPON
//Hide default weapon sprite for Actor when there is a DragonBones armature
//assigned
dragonBonesIntegration.Sprite_Actor_prototype_setupWeaponAni = 
  Sprite_Actor.prototype.setupWeaponAnimation;
Sprite_Actor.prototype.setupWeaponAnimation = function() {
  if (this._actor.dragonboneIndex !== null &&
  this._actor.dragonboneIndex !== undefined) {
    //do nothing for weapon animation
  } else {
    dragonBonesIntegration.Sprite_Actor_prototype_setupWeaponAni.call(this);
  }
};

//=============================================================================
// YEP_X_ActSeqPack2
// ----------------------------------------------------------------------------
// Compatibility Update
//=============================================================================

if (Imported.YEP_X_ActSeqPack2) {

dragonBonesIntegration.BattleManager_actionMotionTarget = 
  BattleManager.actionMotionTarget;
BattleManager.actionMotionTarget = function(name, actionArgs) {
  //console.log("BattleManager.actionMotionTarget: DB")
  
  if (name.toUpperCase() === 'WAIT') return this.actionMotionWait(actionArgs);
  if (name.toUpperCase() === 'STANDBY') name = 'WAIT';

  //get affected battlers
  var movers = this.makeActionTargets(actionArgs[0]);

  //continue if 1 or more battler are targeted
  if (movers.length < 1) return true;

  //console.log("DB actionMotionTarget: " + movers[0].name() + " = " + name);

  var cmd = name.toLowerCase();
  var motion = 'wait';

  //check for weapons
  if (actionArgs[1] && actionArgs[1].toUpperCase() === 'NO WEAPON') {
    var showWeapon = false;
  } else {
    var showWeapon = true;
  }
  
  if (['wait', 'chant', 'guard', 'evade', 'skill', 'spell', 'item', 'escape',
  'victory', 'dying', 'abnormal', 'sleep', 'dead'].contains(cmd)) {
    motion = cmd;
  } else if (['walk', 'move'].contains(cmd)) {
    motion = 'walk';
  } else if (['damage', 'hit'].contains(cmd)) {
    motion = 'damage';
  } else if (['attack'].contains(cmd)) {
    movers.forEach(function(mover) {
      //console.log("Action Motion: Performing Attack");
      if (mover.isActor()) {
        mover.performAttack();
      } else {
        dragonBonesIntegration.PlayAnimationOnBattler(mover, "attack");
      }
    });
    return false;
  } else if (['thrust', 'swing', 'missile'].contains(cmd)) {
    motion = cmd;
    movers.forEach(function(mover) {
      if (mover.hasDragonBone === true) {
        //play animation through force motion for actor,  
        //play animation directly for enemy
        if (mover.isActor()) {
          mover.forceMotion(motion);
        } else {
          dragonBonesIntegration.PlayAnimationOnBattler(mover, motion);
        }
      } else {
        mover.forceMotion(motion);
        if (mover.isActor() && showWeapon) {
          var weapons = mover.weapons();
          var wtypeId = weapons[0] ? weapons[0].wtypeId : 0;
          var attackMotion = $dataSystem.attackMotions[wtypeId];
          if (attackMotion && [0, 1, 2].contains(attackMotion.type)) {
            mover.startWeaponAnimation(attackMotion.weaponImageId);
          }
        }
        if (Imported.YEP_X_AnimatedSVEnemies) {
          if (mover.isEnemy() && mover.hasSVBattler() && showWeapon) {
            var attackMotion = $dataSystem.attackMotions[wtypeId];
            mover.startWeaponAnimation(mover.weaponImageId());
          }
        }
      }
    });
    return false;
  }

  //all other animations
  movers.forEach(function(mover) {
    if (mover.hasDragonBone === true) {
      motion = cmd;
      if (mover.isActor()) {
        mover.forceMotion(motion);
      } else {
        dragonBonesIntegration.PlayAnimationOnBattler(mover, motion);
      }
    } else {
      mover.forceMotion(motion);
    }
  });
  return false;    
};

//play animation with the 'motion' command on actor
//this will overwrite the previous animation
var Sprite_Actor_prototype_forceMotion = Sprite_Actor.prototype.forceMotion;
Sprite_Actor.prototype.forceMotion = function(motionType) {
  //play dragonbone animation if there is a valid armature
  if (this._actor.hasDragonBone === true) {
    //console.log("DB forceMotion: ");
    if (dragonBonesIntegration.consoleDebug) {
      console.log("DB forceMotion: Play actor motion = " + motionType);
    }
    dragonBonesIntegration.PlayAnimationOnBattler(this._actor, motionType);
    //this.startMotion(motionType);
  } else {
    Sprite_Actor_prototype_forceMotion.call(this, motionType);
  }
};

}; // Imported.YEP_X_ActSeqPack2

// REPLACE ACTOR/ENEMIES ANIMATIONS
//Replace the default 18 sprite animations with DragonBones animation if
//assigned in the Note section
//if the previous animation is the same as the new one, then start motion will
//let the previous animation complete
dragonBonesIntegration.Sprite_Actor_prototype_startMotion = 
  Sprite_Actor.prototype.startMotion;
Sprite_Actor.prototype.startMotion = function(motionType) {
  //only play dragonbone animation if dragonboneIndex variable is valid
  if (this._actor.hasDragonBone === true) {
    if (this._actor.lastMotionType !== motionType) {
      dragonBonesIntegration.PlayAnimationOnBattler(this._actor, motionType);
      this._actor.lastMotionType = motionType;
    }
  } else {
    //console.log("Vanilla startMotion: " + this._actor._name + " motion = " +
    //motionType);
    dragonBonesIntegration.Sprite_Actor_prototype_startMotion.call(this,
      motionType);
  }
};

//=============================================================================
// Game_Enemy
// ----------------------------------------------------------------------------
// Code provided by TheGreenKel
//=============================================================================

//Replace Enemy default attack animation
Game_Enemy.prototype.performActionStart = function(action) {
  //Game_Battler.prototype.performActionStart.call(this, action);
  this.requestEffect('whiten');
  if (dragonBonesIntegration.consoleDebug) {
    console.log("DB performActionStart: " + this.battlerName() + " type = " +
      action.type);
  }
  //console.log("DragonBoneIndex = " + this.dragonboneIndex);

  var result = false;
  if (this.hasDragonBone === true  && action.isAttack()) {
    result = dragonBonesIntegration.PlayAnimationOnBattler(this, "swing");
  }
  if (result === false) {
    Game_Battler.prototype.performActionStart.call(this, action);
  }
};

//Replace Enemy default take damage animation
Game_Enemy.prototype.performDamage = function() {
  Game_Battler.prototype.performDamage.call(this);
  SoundManager.playEnemyDamage();
  
  var result = false;
  if (this.hasDragonBone === true) {
    result = dragonBonesIntegration.PlayAnimationOnBattler(this, "damage");
  }

  //if dragonbones animation fail to play then run default
  if (result === false) {
    this.requestEffect('blink');
  }
};

//Replace Enemy default death animation
dragonBonesIntegration.Game_Enemy_prototype_performCollapse =
  Game_Enemy.prototype.performCollapse;
Game_Enemy.prototype.performCollapse = function() {
  //console.log("DB collapse: Game_Enemy");
  var result = false;
  if (this.hasDragonBone === true) {
    //console.log("DB collapse: skeletal animation");
    result = dragonBonesIntegration.PlayAnimationOnBattler(this, "dead");
    SoundManager.playBossCollapse1();
  }

  if (result === false) {
    dragonBonesIntegration.Game_Enemy_prototype_performCollapse.call(this);
  }
};

//=============================================================================
// Game_Battler
// ----------------------------------------------------------------------------
// Code provided by Yanfly
//=============================================================================

Game_Battler.prototype.isReplacedByDragonBonesBattler = function() {
  if (!$gameParty.inBattle()) return false;
  if (this.isActor()) {
    var data = this.actor();
  } else if (this.isEnemy()) {
    var data = this.enemy();
  } else {
    return false;
  }
  if (data.meta.dragonbone_replace === false) return false;
  return this.hasDragonBone;
};

if (Imported.YEP_BattleEngineCore) {

dragonBonesIntegration.Game_Battler_spriteWidth =
  Game_Battler.prototype.spriteWidth;
Game_Battler.prototype.spriteWidth = function() {
  if (this.isReplacedByDragonBonesBattler()) {
    if (this.isActor()) {
      return this.actor().meta.dragonbone_width;
    } else if (this.isEnemy()) {
      return this.enemy().meta.dragonbone_width;
    } else {
      return 100;
    }
  }
  return dragonBonesIntegration.Game_Battler_spriteWidth.call(this);
};

dragonBonesIntegration.Game_Battler_spriteHeight =
  Game_Battler.prototype.spriteHeight;
Game_Battler.prototype.spriteHeight = function() {
  if (this.isReplacedByDragonBonesBattler()) {
    if (this.isActor()) {
      return this.actor().meta.dragonbone_height;
    } else if (this.isEnemy()) {
      return this.enemy().meta.dragonbone_height;
    } else {
      return 100;
    }
  }
  return dragonBonesIntegration.Game_Battler_spriteHeight.call(this);
};

}; // Imported.YEP_BattleEngineCore

//=============================================================================
// Game_Actor
// ----------------------------------------------------------------------------
// Code provided by Yanfly
//=============================================================================

dragonBonesIntegration.Game_Actor_battlerName =
  Game_Actor.prototype.battlerName;
Game_Actor.prototype.battlerName = function() {
  if (this.isReplacedByDragonBonesBattler()) return '';
  return dragonBonesIntegration.Game_Actor_battlerName.call(this);
};

dragonBonesIntegration.Game_Actor_spriteWidth =
  Game_Actor.prototype.spriteWidth;
Game_Actor.prototype.spriteWidth = function() {
  if (this.isReplacedByDragonBonesBattler()) {
    if (this.isActor()) {
      return this.actor().meta.dragonbone_width;
    } else if (this.isEnemy()) {
      return this.enemy().meta.dragonbone_width;
    } else {
      return 100;
    }
  }
  return dragonBonesIntegration.Game_Actor_spriteWidth.call(this);
};

dragonBonesIntegration.Game_Actor_spriteHeight =
  Game_Actor.prototype.spriteHeight;
Game_Actor.prototype.spriteHeight = function() {
  if (this.isReplacedByDragonBonesBattler()) {
    if (this.isActor()) {
      return this.actor().meta.dragonbone_height;
    } else if (this.isEnemy()) {
      return this.enemy().meta.dragonbone_height;
    } else {
      return 100;
    }
  }
  return dragonBonesIntegration.Game_Actor_spriteHeight.call(this);
};

//=============================================================================
// Game_Enemy
// ----------------------------------------------------------------------------
// Code provided by Yanfly
//=============================================================================

dragonBonesIntegration.Game_Enemy_battlerName = 
  Game_Enemy.prototype.battlerName;
Game_Enemy.prototype.battlerName = function() {
  if (this.isReplacedByDragonBonesBattler()) return '';
  return dragonBonesIntegration.Game_Enemy_battlerName.call(this);
};

//=============================================================================
// YEP_X_AnimatedSVEnemies Compatibility
// ----------------------------------------------------------------------------
// Code provided by Yanfly
//=============================================================================

if (Imported.YEP_X_AnimatedSVEnemies) {

dragonBonesIntegration.Game_Enemy_hasSVBattler =
  Game_Enemy.prototype.hasSVBattler;
Game_Enemy.prototype.hasSVBattler = function() {
  if (this._hasSvBattler === undefined) {
    this._hasSvBattler = 
      dragonBonesIntegration.Game_Enemy_hasSVBattler.call(this) ||
      this.hasDragonBone;
  }
  return this._hasSvBattler;
};

dragonBonesIntegration.Game_Enemy_spriteScaleX =
  Game_Enemy.prototype.spriteScaleX;
Game_Enemy.prototype.spriteScaleX = function() {
  if (this.hasDragonBone && this.hasSVBattler()) {
    return this.enemy().spriteScaleX;
  } else {
    return dragonBonesIntegration.Game_Enemy_spriteScaleX.call(this);
  }
};

}; // YEP_X_AnimatedSVEnemies

//=============================================================================
// End of Main Functions
//=============================================================================
} else {

var text = '';
text += 'You are getting this error because you are trying to run DragonBones ';
text += 'Integration while your project files are lower than version 1.4.0.\n';
text += '\nPlease visit this thread for instructions on how to update your ';
text += 'project files to 1.4.0 or higher: \n\n';
text += 'https://forums.rpgmakerweb.com/index.php?threads/';
text += 'rpg-maker-mv-1-5-0-update.79677/';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} // (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION >= '1.1.0')
//=============================================================================
// End of File
//=============================================================================

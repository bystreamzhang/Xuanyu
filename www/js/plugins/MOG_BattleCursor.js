//=============================================================================
// MOG_BattleCursor.js
//=============================================================================

/*:
 * @plugindesc (v2.2)[v1.3]  战斗UI - 单位选择指针
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-友军指针
 * @desc 指向友军的指针图片资源。
 * @default 单位选择指针-友军指针
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 资源-敌人指针
 * @desc 指向敌人的指针图片资源。
 * @default 单位选择指针-敌人指针
 * @require 1
 * @dir img/Battle__ui/
 * @type file
 *
 * @param 偏移-指针 X
 * @desc 以所选的单位位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 偏移-指针 Y
 * @desc 以所选的单位位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0 
 *
 * @param 是否显示单位名字
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 偏移-单位名字 X
 * @desc 以所选的单位位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 偏移-单位名字 Y
 * @desc 以所选的单位位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 名字字体大小
 * @desc 单位名字的字体大小。
 * @default 18
 *
 * @param 是否使用浮动效果
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true	
 *
 * @param 是否排序
 * @type boolean
 * @on 排序
 * @off 不排序
 * @desc 若使用排序，则根据x轴的位置，最左边的为第一个。最右边的为最后一个。
 * @default true 
 *
 * @param 是否显示目标的窗口
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 如果你使用了角色选单窗口插件，该选项没有效果。
 * @default false
 *
 * @param 是否能被鼠标选中
 * @type boolean
 * @on 能选中
 * @off 不能选中
 * @desc 鼠标点击单位能选中这个单位。
 * true - 能选中，false - 不能选中
 * @default true
 *
 * @param 消息提示-所有友军
 * @desc 目标窗口提示的文本信息。
 * @default 所有友军
 *
 * @param 消息提示-所有敌军
 * @desc 目标窗口提示的文本信息。
 * @default 所有敌军
 *
 * @help  
 * =============================================================================
 * +++ MOG - Battle Cursor (v2.2) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com/
 * =============================================================================
 * 战斗时，选择技能后，会出现选择单位用的指针。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件可以单独使用，使得战斗能出现选择指针。
 * 扩展于：
 *  - MOG_BattleHud 战斗UI-角色窗口
 *    将角色窗口中的 角色选择窗口和敌人选择窗口 屏蔽，并换成可以选择的指针。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   放置在战斗的ui层。
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Battle__ui （Battle后面有两个下划线）
 * 先确保项目img文件夹下是否有Battle__ui文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 使用招式名浮动框，需要配置资源文件：
 *
 * 资源-指针
 * 资源-指针阴影
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 如果某个敌人的指针需要单独矫正，你可以在敌人的注释中添加关键字：
 *
 * Arrow Offset: X:Y
 *
 * 参数X，Y表示偏移的坐标。（可为负数）
 * 
 * 示例： 
 * Arrow Offset: 0:-30
 * （表示在指针会落在敌人中心向上30像素的位置）
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件关联的资源文件夹。
 * [v1.3]
 * 修复了窗口点击时关联到错误点选角色的bug。
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_BattleCursor = true;
　　var Moghunter = Moghunter || {}; 

    Moghunter.parameters = PluginManager.parameters('MOG_BattleCursor');
	Moghunter.bcursor_x = Number(Moghunter.parameters['偏移-指针 X'] || 0);
	Moghunter.bcursor_y = Number(Moghunter.parameters['偏移-指针 Y'] || 0);
    Moghunter.bcursor_float = String(Moghunter.parameters['是否使用浮动效果'] || "true");
	Moghunter.bcursor_name_visible = String(Moghunter.parameters['是否显示单位名字'] || "true");
	Moghunter.bcursor_name_x = Number(Moghunter.parameters['偏移-单位名字 X'] || 0);
	Moghunter.bcursor_name_y = Number(Moghunter.parameters['偏移-单位名字 Y'] || 0);
	Moghunter.bcursor_fontSize = Number(Moghunter.parameters['名字字体大小'] || 18);
	Moghunter.bcursor_sort_x = String(Moghunter.parameters['是否排序'] || "true");
	Moghunter.bcursor_window = String(Moghunter.parameters['是否显示目标的窗口'] || "false");
	Moghunter.bcursor_touch_selection = String(Moghunter.parameters['是否能被鼠标选中'] || "true");
	Moghunter.bcursor_helpAllAllies = String(Moghunter.parameters['消息提示-所有友军'] || "所有友军");
	Moghunter.bcursor_helpAllEnemies = String(Moghunter.parameters['消息提示-所有敌军'] || "所有敌军");
	Moghunter.src_BattleCursor_A = String(Moghunter.parameters['资源-友军指针']);
	Moghunter.src_BattleCursor_B = String(Moghunter.parameters['资源-敌人指针']);
		
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_BattleUi = function(filename) {
    return this.loadBitmap('img/Battle__ui/', filename, 0, true);
};

//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_battlecursor_temp_initialize = Game_Temp.prototype.initialize
Game_Temp.prototype.initialize = function() {
	_alias_mog_battlecursor_temp_initialize.call(this);
	this._arrowAllTargets = [false,false];
	this._arrow_need_refresh = false;
	this._arrowTarget = [null,null];
	this._needRefreshBattleCursor = false;
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================

//==============================
// * Command129
//==============================
var _alias_mog_battlecursor_command129 = Game_Interpreter.prototype.command129;
Game_Interpreter.prototype.command129 = function() {	
	_alias_mog_battlecursor_command129.call(this);	
	$gameTemp._arrow_need_refresh = true;
	return true;
};

//=============================================================================
// ** Game_Action
//=============================================================================

//==============================
// * NeedsSelection
//==============================
Game_Action.prototype.needsSelection = function() {
    return this.checkItemScope([1, 2, 7, 8, 9, 10]);
};

//=============================================================================
// ** Game_Enemy
//=============================================================================

//==============================
// * Transform
//==============================
var _alias_mog_bcursor_transform = Game_Enemy.prototype.transform
Game_Enemy.prototype.transform = function(enemyId) {
    _alias_mog_bcursor_transform.call(this,enemyId) 
	this._refCursor = true;	
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// * onSelectAction
//==============================
var _alias_mog_battle_cursor_onSelectAction = Scene_Battle.prototype.onSelectAction;
Scene_Battle.prototype.onSelectAction = function() {
	this.check_arrowforAllTagets();
	_alias_mog_battle_cursor_onSelectAction.call(this);    
};

//==============================
// * Check Arrow For All Targets
//==============================
Scene_Battle.prototype.check_arrowforAllTagets= function() {
    var action = BattleManager.inputtingAction();
	if (action.isForOpponent()) { 
   		$gameTemp._arrowAllTargets[0] = action.isForAll();
	} else {
		$gameTemp._arrowAllTargets[1] = action.isForAll();		
	};
};

//=============================================================================
// ** Game Battler
//=============================================================================	

//==============================
// * initMembers
//==============================
var _alias_mog_btcursor_gbat_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
	_alias_mog_btcursor_gbat_initMembers.call(this);
	this._arrowVisible = false;
	this._arrowX = 0;
	this._arrowY = 0;
	this._refCursor = false;
	this._bhfaceSize = [-1,-1];
};

//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function() {
	if (this.isEnemy()) {return this.enemy().note.split(/[\r\n]+/)};
	if (this.isActor()) {return this.actor().note.split(/[\r\n]+/)};
};

//==============================
// * Setup
//==============================
var _alias_mog_btcursor_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	_alias_mog_btcursor_setup.call(this,enemyId, x, y);
    this.notetags().forEach(function(note) {
         var note_data = note.split(': ')
		 if (note_data[0].toLowerCase() == "arrow offset"){
			 var par = note_data[1].split(':');
		     this._arrowX = Number(par[0]);
			 this._arrowY = Number(par[1]);
		 };
	},this);
};


if (Imported.MOG_BattleHud) {
	//==============================
	// * Update Face
	//==============================
	var _mog_bcursor_bhud_update_face = Battle_Hud.prototype.update_face;
	Battle_Hud.prototype.update_face = function() {
		_mog_bcursor_bhud_update_face.call(this);
		if (this._battler._bhfaceSize[0] === -1 && this._face && this._face.bitmap.isReady()) {
		   this._battler._bhfaceSize[0] = this._face.bitmap.width;
		   this._battler._bhfaceSize[1] = this._face.bitmap.height;	
		};
	};
	
	//==============================
	// * Refresh Face
	//==============================
	var _mog_bcursor_bhud_refresh_face = Battle_Hud.prototype.refresh_face;
	Battle_Hud.prototype.refresh_face = function() {
		_mog_bcursor_bhud_refresh_face.call(this);
		this._battler._bhfaceSize[0] = this._face.bitmap.width / 5;
		this._battler._bhfaceSize[1] = this._face.bitmap.height;
	};
};

//=============================================================================
// ** Scene Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Scene_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Scene_Base.prototype.sortMz = function() {
   this._hudField.children.sort(function(a, b){return a.mz-b.mz});
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// * create Spriteset
//==============================
var _mog_bcursor_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_bcursor_sbattle_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
};

//==============================
// * create Display Objects
//==============================
var _mog_bcursor_sbat_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function() {
	_mog_bcursor_sbat_createDisplayObjects.call(this);
    this.createBattleCursor();
	this.sortMz();
};

//==============================
// * create Battle Cursor
//==============================
Scene_Battle.prototype.createBattleCursor = function() {
	if (!this._hudField) {this.createHudField()};
    this._battleCursor = new BattleCursor(this._spriteset,this._actorSprites);
	this._battleCursor.mz = 120;
	this._hudField.addChild(this._battleCursor);
	this._spriteset.updateActors();
};

//==============================
// * remove Battle Cursor
//==============================
Scene_Battle.prototype.removeBattleCursor = function() {
    this._hudField.removeChild(this._battleCursor);
};

//==============================
// * Update
//==============================
var _mog_batCursor_sBat_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	_mog_batCursor_sBat_update.call(this);
	this.updateBattleCursorSB();
};
	
//==============================
// * update Battle Cursor SB
//==============================
Scene_Battle.prototype.updateBattleCursorSB = function() {
   if ($gameTemp._needRefreshBattleCursor) {this.refreshBattlerCursor()};
};

//==============================
// * refresh Battle Cursor
//==============================
Scene_Battle.prototype.refreshBattlerCursor = function() {
	$gameTemp._needRefreshBattleCursor = false;
    this.removeBattleCursor();
	this.createBattleCursor();
	this.sortMz();
};

//=============================================================================
// * Battle Cursor
//=============================================================================
function BattleCursor() {
    this.initialize.apply(this, arguments);
};

BattleCursor.prototype = Object.create(Sprite.prototype);
BattleCursor.prototype.constructor = BattleCursor;

//==============================
// * Initialize
//==============================
BattleCursor.prototype.initialize = function(spriteset,actorsprites) {
    Sprite.prototype.initialize.call(this);	
	this.setup(spriteset,actorsprites);
	this.createSprites();
};

//==============================
// * Setup
//==============================
BattleCursor.prototype.setup = function(spriteset,actorsprites) {
  this._spriteset = BattleManager._spriteset;
  this._actorSprites = actorsprites;
  $gameTemp._arrowAllTargets = [false,false];
  this._actor_arrow = [];
  this._actor_name = [];
  this._enemy_arrow = [];
  this._enemy_name = [];
  this._arrow_pos = [[],[]];
  this._arrow_s = [0,0,0,0,0];
  this._arrow_float_effect = false;
  this._arrow_name_visible = false;
  this._touch_selection = false;
  if (String(Moghunter.bcursor_touch_selection) === "true") {this._touch_selection = true};
  if (String(Moghunter.bcursor_sort_x) === "true") {
	  if (!Imported.YEP_BattleEngineCore) {
	       $gameTroop.members().sort(function(a, b){return a._screenX-b._screenX});
	  };  
  };
  if (String(Moghunter.bcursor_name_visible) === "true") {this._arrow_name_visible = true};
  if (String(Moghunter.bcursor_float) === "true") {this._arrow_float_effect = true};
};

//==============================
// * Field
//==============================
BattleCursor.prototype.field = function() {
  return this._spriteset._battleField;
};

//==============================
// * Enemies
//==============================
BattleCursor.prototype.enemies = function() {
  return this._spriteset._enemySprites;
};

//==============================
// * Actors
//==============================
BattleCursor.prototype.actors = function() {
  if (this._actorSprites) {return this._actorSprites};
  return this._spriteset._actorSprites;
};

//==============================
// * Create Sprites
//==============================
BattleCursor.prototype.createSprites = function() {
  this.createArrowActor();  
  this.createArrowEnemy();
};

//==============================
// * Create Arrow Actor
//==============================
BattleCursor.prototype.createArrowActor = function() {
  this._actor_arrowVisible = (!$gameSystem.isSideView() && !Imported.MOG_BattleHud) ? false : true;
  for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
	   this._actor_arrow[i] = new Sprite(ImageManager.load_BattleUi(Moghunter.src_BattleCursor_A));
	   this._actor_arrow[i].anchor.x = 0.5;
	   this._actor_arrow[i].anchor.y = 0.5;
	   this._actor_arrow[i].opacity = 0;
	   this._arrow_pos[1] = [0,0];
	   this.addChild(this._actor_arrow[i]);
	   if (this._arrow_name_visible) {
		   this._actor_name[i] = new Sprite(new Bitmap(120,32));
		   this._actor_name[i].anchor.x = 0.5;
		   this._actor_name[i].anchor.y = 0.5;	
		   this._actor_name[i].opacity = 100;
		   this._actor_name[i].bitmap.fontSize = Moghunter.bcursor_fontSize;
		   this.addChild(this._actor_name[i]);
	   };
   };	
};

//==============================
// * Create Arrow Enemy
//==============================
BattleCursor.prototype.createArrowEnemy = function() {
   for (var i = 0; i < this.enemies().length; i++) {
	   this._enemy_arrow[i] = new Sprite(ImageManager.load_BattleUi(Moghunter.src_BattleCursor_B));
	   this._enemy_arrow[i].anchor.x = 0.5;
	   this._enemy_arrow[i].anchor.y = 0.5;
	   this._enemy_arrow[i].opacity = 0;
	   this._arrow_pos[0] = [0,0];
	   this.addChild(this._enemy_arrow[i]);
	   if (this._arrow_name_visible) {
		   this._enemy_name[i] = new Sprite(new Bitmap(120,32));
		   this._enemy_name[i].anchor.x = 0.5;
		   this._enemy_name[i].anchor.y = 0.5;	
		   this._enemy_name[i].opacity = 100;
		   this._enemy_name[i].bitmap.fontSize = Moghunter.bcursor_fontSize;
		   this.addChild(this._enemy_name[i]);	
	   };
   };
};

//==============================
// * Refresh Arrow Name
//==============================
BattleCursor.prototype.refresh_arrow_name = function(battler,sprite) {
	battler._refCursor = false;
	sprite.opacity = 255;
	sprite.bitmap.clear();
	sprite.bitmap.drawText(battler.name(),0,0,120,32,"center");
};

//==============================
// * Update Battle Cursor
//==============================
BattleCursor.prototype.update = function() {
	Sprite.prototype.update.call(this);	
	if (Imported.MOG_ConsecutiveBattles && $gameSystem._consBatime > 0) {return};
	this.x = this.field().x;
	this.y = this.field().y;
	for (var i = 0; i < this.enemies().length; i++) {
		var battler = this.enemies()[i]._battler;
		var sprite = this._enemy_arrow[i];
		this.update_arrow(sprite,this.enemies()[i],battler,0);
		if (this._arrow_name_visible) {this.update_arrow_name(this._enemy_name[i],sprite,battler,0)};
	};
	if (this._actor_arrowVisible) {
		for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
			var battler = this.actors()[i]._battler;
			var sprite = this._actor_arrow[i];
			this.update_arrow(sprite,this.actors()[i],battler,1);
			if (this._arrow_name_visible) {this.update_arrow_name(this._actor_name[i],sprite,battler,1)};
		};
	};
	if (this._arrow_float_effect) {this.update_arrow_slide()};
	if (this._touch_selection) {this.updateTouchSelection()};
	$gameTemp._arrow_need_refresh = false;
	this.updateVisible();
};

//==============================
// * Is Visible
//==============================
BattleCursor.prototype.isVisible = function() {
	 if (Imported.MOG_ATB) {
		if ($gameSystem._atbEventPhase[3]) {return false}; 
	  }
	 return true;
};

//==============================
// * Update Visible
//==============================
BattleCursor.prototype.updateVisible = function() {
	 this.visible = this.isVisible();
};

//==============================
// * Update Touch Selection
//==============================
BattleCursor.prototype.updateTouchSelection = function() {
	if (TouchInput.isTriggered()) {		
		for (var i = 0; i < this.enemies().length; i++) {
		    if (this.isTouchOnTarget(this.enemies()[i],this.enemies()[i]._battler,0)) {$gameTemp._arrowTarget[0] = this.enemies()[i]._battler};
		};		
		for (var i = 0; i < this.actors().length; i++) {
		    if (this.isTouchOnTarget(this.actors()[i],this.actors()[i]._battler,1)) {$gameTemp._arrowTarget[1] = this.actors()[i]._battler};
			if (Imported.MOG_BattleHud && this.isTouchOnTargetFace(this.actors()[i],this.actors()[i]._battler,1)) {$gameTemp._arrowTarget[1] = this.actors()[i]._battler};
		};
	};
};

//==============================
// * is Touch On Target Face
//==============================
BattleCursor.prototype.isTouchOnTargetFace = function(sprite,battler,type) {
	if (!battler) {return false};
	if (type === 0 && !battler.isAlive()) {return false};
 	if (type === 0 && battler.isDead()) {return false};
	if (battler._bhfaceSize[0] < 0) {return};
	var cw = battler._bhfaceSize[0] / 2;
	var ch = battler._bhfaceSize[1] / 2;
	if (sprite) {
		if (TouchInput.x < this.field().x + sprite.x - cw) {return false};
		if (TouchInput.x > this.field().x + sprite.x + cw) {return false};
		if (TouchInput.y > this.field().y + sprite.y + ch) {return false};
		if (TouchInput.y < this.field().y + sprite.y - ch) {return false};
		return true;
	};
	return false;	  
	
};

//==============================
// * Is TouchOnTarget
//==============================
BattleCursor.prototype.isTouchOnTarget = function(sprite,battler,type) {
	if (!battler) {return false};
	if (type === 0 && !battler.isAlive()) {return false};
 	if (type === 0 && battler.isDead()) {return false};
	if (sprite.bitmap) {
		var sw = sprite.bitmap.width;
		if (battler.isEnemy() && Imported.MOG_EnemyPoses) {
			if (battler._batPoses[0]) {	sw = Math.floor(sw / 4)};
		};
		if (TouchInput.x < this.field().x + sprite.x - (sw / 2)) {return false};
		if (TouchInput.x > this.field().x + sprite.x + (sw / 2)) {return false};
		if (TouchInput.y > this.field().y + sprite.y) {return false};
		if (TouchInput.y < this.field().y + sprite.y - (sprite.bitmap.height)) {return false};
		return true;
	} else if (sprite._mainSprite) {
		if (TouchInput.x < this.field().x + sprite.x - (sprite._mainSprite.width / 2)) {return false};
		if (TouchInput.x > this.field().x + sprite.x + (sprite._mainSprite.width / 2)) {return false};
		if (TouchInput.y > this.field().y + sprite.y) {return false};
		if (TouchInput.y < this.field().y + sprite.y - (sprite._mainSprite.height)) {return false};	
		return true;
	};
	return false;
};

//==============================
// * Update Arrow Name
//==============================
BattleCursor.prototype.update_arrow_name = function(sprite,target,battler,type) {
	 if (!battler) {return};
	 if (sprite.opacity === 100 || $gameTemp._arrow_need_refresh) {this.refresh_arrow_name(battler,sprite)};
	 if (battler._refCursor) {this.refresh_arrow_name(battler,sprite)};
	 sprite.x = target.x + Moghunter.bcursor_name_x;
	 sprite.y = target.y - target.height + Moghunter.bcursor_name_y;
	 sprite.visible = target.visible;
	 sprite.opacity = target.opacity;
};

//==============================
// * Update Arrow
//==============================
BattleCursor.prototype.update_arrow = function(sprite,target,battler,type) {
	if (!this.isArrowVisible(sprite,target,battler,type)) {this.hide_arrow(sprite,type);return};
	sprite.opacity = 255; 
	sprite.visible = true;
	if (type === 0) {var yf = target.height / 2} else {
		if (target._mainSprite) {var yf = target._mainSprite.height} else {var yf = 0};
	};
	this._arrow_pos[type] = [
	      target.x + Moghunter.bcursor_x + battler._arrowX,
		  target.y - yf + this._arrow_s[2] + Moghunter.bcursor_y + battler._arrowY
    ];
	if (this.arrow_all_targets(type)) {
	    sprite.x = this._arrow_pos[type][0];
	    sprite.y = this._arrow_pos[type][1];
    } else {
	    sprite.x = this.sprite_move_to(sprite.x,this._arrow_pos[type][0],10);
	    sprite.y = this.sprite_move_to(sprite.y,this._arrow_pos[type][1],10);
    };
};

//==============================
// * Arrow All Targets
//==============================
BattleCursor.prototype.arrow_all_targets = function(type) {
	return $gameTemp._arrowAllTargets[type];
};

//==============================
// * Hide Arrow
//==============================
BattleCursor.prototype.hide_arrow = function(sprite,type) {
	sprite.visible = false;
	sprite.x = this._arrow_pos[type][0];
	sprite.y = this._arrow_pos[type][1];
};

//==============================
// * Update Cursor Actor
//==============================
BattleCursor.prototype.isArrowVisible = function(sprite,target,battler,type) {
	if (!battler) {return false};
	if (type === 0 && !battler.isAlive()) {return false};
 	if (type === 0 && battler.isDead()) {return false};
	if (this.arrow_all_targets(type)) {return true};
	if (!battler._arrowVisible) {return false};
	return true
};

//==============================
// * Sprite Move To
//==============================
BattleCursor.prototype.sprite_move_to = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 5 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Update Arrow Slide
//==============================
BattleCursor.prototype.update_arrow_slide = function() {	
	 this._arrow_s[4] += 1;
	 if (this._arrow_s[4] < 2) {return};
     this._arrow_s[4] = 0;
	 this._arrow_s[3] += 1;
	 if (this._arrow_s[3] < 10) {this._arrow_s[2] += 1}
	 else if (this._arrow_s[3] < 20) {this._arrow_s[2] -= 1}
	 else {this._arrow_s[2] = 0 ;this._arrow_s[3] = 0};	
};

//=============================================================================
// ** Sprite Enemy
//=============================================================================	

//==============================
// * Set Battler
//==============================
var _mog_bcursor_comp_sprenemy_setBattler = Sprite_Enemy.prototype.setBattler;
Sprite_Enemy.prototype.setBattler = function(battler) {
    _mog_bcursor_comp_sprenemy_setBattler.call(this,battler)
	if (this._visualSelectWindow) {this._visualSelectWindow.visible = false};
};

//=============================================================================
// ** Game Party
//=============================================================================	

//==============================
// * Select
//==============================
var _mog_bat_cursor_gparty_select = Game_Party.prototype.select;
Game_Party.prototype.select = function(activeMember) {
	if ($gameTemp._arrowAllTargets[1]) {
        this.members().forEach(function(member) {
           member.select();
        });
		return;
	};
	_mog_bat_cursor_gparty_select.call(this,activeMember);
};

//=============================================================================
// ** Window Help
//=============================================================================	

//==============================
// * Refresh
//==============================
var _mog_bcursor_whelp_refresh = Window_Help.prototype.drawText;
Window_Help.prototype.drawText = function(text, x, y, maxWidth, align) {
    if ($gameTemp._arrowAllTargets[0]) {text = String(Moghunter.bcursor_helpAllEnemies)};
	if ($gameTemp._arrowAllTargets[1]) {text = String(Moghunter.bcursor_helpAllAllies)};
	_mog_bcursor_whelp_refresh.call(this,text, x, y, maxWidth, align);	
};

//=============================================================================
// ** Window BattleActor
//=============================================================================	

//==============================
// * Initialize
//==============================
var _alias_mog_bcursor_wbca_initialize = Window_BattleActor.prototype.initialize;
Window_BattleActor.prototype.initialize = function(x, y) {
	_alias_mog_bcursor_wbca_initialize.call(this,x, y)
	this._window_mode = false;
	this._window_wait = 0;
    if (String(Moghunter.bcursor_window) === "true" || (!$gameSystem.isSideView() && !Imported.MOG_BattleHud)) {this._window_mode = true};
};

//==============================
// * Select
//==============================
var _mog_alias_batcursor_wba_select = Window_BattleActor.prototype.select;
Window_BattleActor.prototype.select = function(index) {
    _mog_alias_batcursor_wba_select.call(this,index);
	if (this.actor()) {this.enableArrow(index)};
};

//==============================
// * Enable Arrow
//==============================
Window_BattleActor.prototype.enableArrow = function(index) {
    this.arrow_clear();
	this.actor()._arrowVisible = true;
	this.setCursorAll($gameTemp._arrowAllTargets[1]);
};

//==============================
// * Arrow Clear
//==============================
Window_BattleActor.prototype.arrow_clear = function(index) {	
	for (var i = 0; i < $gameParty.members().length; i++) {
		 $gameParty.members()[i]._arrowVisible = false;
	};
};

//==============================
// * activate
//==============================
var _alias_mog_wba_activate = Window_BattleActor.prototype.activate;
Window_BattleActor.prototype.activate = function() {
    _alias_mog_wba_activate.call(this);
	this._window_wait = 6;		//激活后，等待六帧刷鼠标判定
};
//==============================
// * Hide
//==============================
var _alias_mog_wba_hide = Window_BattleActor.prototype.hide;
Window_BattleActor.prototype.hide = function() {
	$gameTemp._arrowAllTargets[1] = false;
    _alias_mog_wba_hide.call(this);
	this.arrow_clear();
};

//==============================
// * Refresh Touch Selection
//==============================
Window_BattleActor.prototype.refresh_touch_selection = function() {
    if (this.isCursorMovable()) {	
		for (var i = 0; i < $gameParty.members().length; i++) {
			if ($gameParty.members()[i] === $gameTemp._arrowTarget[1]) {
				if (i === this._index && this._window_wait<=0) {
					this.processOk();
				} else {
					this._index = i;			
					this.select(this._index);
				};
			};
		};
	};
	$gameTemp._arrowTarget[1] = null;
};

//==============================
// * Process Cursor Move
//==============================
var _alias_mog_bcursor_wbac_processCursorMove = Window_BattleActor.prototype.processCursorMove;
Window_BattleActor.prototype.processCursorMove = function() {
	 if (!this._window_mode && this.isCursorMovable()) {
        var lastIndex = this.index();		
        if (Input.isRepeated('down')) {this.addIndex(1)};
        if (Input.isRepeated('up')) {this.addIndex(-1)};
        if (Input.isRepeated('right')) {this.addIndex(1)};
        if (Input.isRepeated('left')) {this.addIndex(-1)};
        if (this.index() !== lastIndex) {SoundManager.playCursor();};
		return;
     };
	 _alias_mog_bcursor_wbac_processCursorMove.call(this);
};

//==============================
// * Add Index
//==============================
Window_BattleActor.prototype.addIndex = function(value) {
	    this._index += value;
		if (this._index > (this.maxItems() - 1)) {this._index = 0};
		if (this._index < 0) {this._index = (this.maxItems() - 1)};
		this.select(this._index);
};

//==============================
// * Update
//==============================
var _alias_mog_bcursor_wactor_update = Window_BattleActor.prototype.update;
Window_BattleActor.prototype.update = function() {
	_alias_mog_bcursor_wactor_update.call(this);
	this._window_wait -= 1;
	if (!this._window_mode) {this.visible = false};
	if ($gameTemp._arrowTarget[1] != null ) {this.refresh_touch_selection()};
};

//==============================
// * Process Touch
//==============================
var _alias_mog_bcursor_wactor_processTouch = Window_BattleActor.prototype.processTouch;
Window_BattleActor.prototype.processTouch = function() {
	if (!this._window_mode && this.active && this._window_wait<=0) {
		if (TouchInput.isTriggered() && $gameTemp._arrowAllTargets[1]) {this.processOk();};
		if (Input.isTriggered("ok") && $gameTemp._arrowAllTargets[1]) {this.processOk();};
		if (TouchInput.isCancelled()) {this.processCancel()};
	    return;
	};
	_alias_mog_bcursor_wactor_processTouch.call(this);
};

//=============================================================================
// ** Game Troop
//=============================================================================	

//==============================
// * Select
//==============================
var _mog_bat_cursor_gtroop_select = Game_Troop.prototype.select;
Game_Troop.prototype.select = function(activeMember) {
	if ($gameTemp._arrowAllTargets[0]) {
        this.members().forEach(function(member) {
           if (!member.isDead() && !member.isHidden()) {member.select()};
        });
		return;
	};
	_mog_bat_cursor_gtroop_select.call(this,activeMember);
};

//=============================================================================
// ** Window BattleEnemy
//=============================================================================	

//==============================
// * Initialize
//==============================
var _alias_mog_bcursor_wbeny_initialize = Window_BattleEnemy.prototype.initialize;
Window_BattleEnemy.prototype.initialize = function(x, y) {
	_alias_mog_bcursor_wbeny_initialize.call(this,x, y)
	this._window_mode = false;
	this._window_wait = 0;
    if (String(Moghunter.bcursor_window) === "true") {this._window_mode = true};
};

//==============================
// * Select
//==============================
var _mog_alias_batcursor_wbe_select = Window_BattleEnemy.prototype.select;
Window_BattleEnemy.prototype.select = function(index) {
    _mog_alias_batcursor_wbe_select.call(this,index)
	if (this.enemy()) {this.enableArrow(index)};
};

//==============================
// * Enable Arrow
//==============================
Window_BattleEnemy.prototype.enableArrow = function(index) {	
    this.arrow_clear();
	this.enemy()._arrowVisible = true;
	this.setCursorAll($gameTemp._arrowAllTargets[0]);
};

//==============================
// * Arrow Clear
//==============================
Window_BattleEnemy.prototype.arrow_clear = function(index) {	
	for (var i = 0; i < $gameTroop.members().length; i++) {
		 $gameTroop.members()[i]._arrowVisible = false;
	};
};

//==============================
// * activate
//==============================
var _alias_mog_wbe_activate = Window_BattleEnemy.prototype.activate;
Window_BattleEnemy.prototype.activate = function() {
    _alias_mog_wbe_activate.call(this);
	this._window_wait = 6;		//激活后，等待六帧刷鼠标判定
};
//==============================
// * Hide
//==============================
var _alias_mog_wbe_hide = Window_BattleEnemy.prototype.hide; 
Window_BattleEnemy.prototype.hide = function() {
	$gameTemp._arrowAllTargets[0] = false;
	_alias_mog_wbe_hide.call(this);
	this.arrow_clear();
};

//==============================
// * Add Index
//==============================
Window_BattleEnemy.prototype.addIndex = function(value) {
	    this._index += value;
		if (this._index > (this.maxItems() - 1)) {this._index = 0};
		if (this._index < 0) {this._index = (this.maxItems() - 1)};
		this.select(this._index);
};

//==============================
// * Refresh Touch Selection
//==============================
Window_BattleEnemy.prototype.refresh_touch_selection = function() {
    if (this.isCursorMovable()) {
	for (var i = 0; i < $gameTroop.aliveMembers().length; i++) {		
		if ($gameTroop.aliveMembers()[i] === $gameTemp._arrowTarget[0]) {
			if (i === this._index && this._window_wait<=0) {
				this.processOk();
			} else {
			   this._index = i;			
		 	   this.select(this._index);
			};
		};
	};
	};
	$gameTemp._arrowTarget[0] = null;	
};

//==============================
// * Process Cursor Move
//==============================
var _alias_mog_bcursor_wbeny_processCursorMove = Window_BattleEnemy.prototype.processCursorMove;
Window_BattleEnemy.prototype.processCursorMove = function() {
	 if (!this._window_mode && this.isCursorMovable()) {
        var lastIndex = this.index();		
        if (Input.isRepeated('down')) {this.addIndex(1)};
        if (Input.isRepeated('up')) {this.addIndex(-1)};
        if (Input.isRepeated('right')) {this.addIndex(1)};
        if (Input.isRepeated('left')) {this.addIndex(-1)};
        if (this.index() !== lastIndex) {SoundManager.playCursor();};
		return;
     };
	 _alias_mog_bcursor_wbeny_processCursorMove.call(this);
};

//==============================
// * Update
//==============================
var _alias_mog_bcursor_wenmy_update = Window_BattleEnemy.prototype.update;
Window_BattleEnemy.prototype.update = function() {
	_alias_mog_bcursor_wenmy_update.call(this);
	this._window_wait -= 1;
	if (!this._window_mode) {this.visible = false};
	if ($gameTemp._arrowTarget[0] != null) {this.refresh_touch_selection()};
};

//==============================
// * Process Touch
//==============================
var _alias_mog_bcursor_wenmy_processTouch = Window_BattleEnemy.prototype.processTouch;
Window_BattleEnemy.prototype.processTouch = function() {
	if (!this._window_mode && this.active && this._window_wait<=0) {
		if (TouchInput.isTriggered() && $gameTemp._arrowAllTargets[0]) {this.processOk();};
		if (Input.isTriggered("ok") && $gameTemp._arrowAllTargets[0]) {this.processOk();};
		if (TouchInput.isCancelled()) {this.processCancel()};
	    return;
	};
	_alias_mog_bcursor_wenmy_processTouch.call(this);
};

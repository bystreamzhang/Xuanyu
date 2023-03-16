//=============================================================================
// MrFu_MV_Funktions_Upgrade.js
//=============================================================================
/*:de
* @plugindesc v0.00613 Dieses Plugin ergänzt einige Funktionen des RPG-Makers.
*
* @param BATTLE
* @text KAMPFSYSTEM
* @desc Dieser Parameter dient nur zur Übersicht.
*
* @param removeBeforeFight
* @parent BATTLE
* @text Nicht-Kampfteilnehmer
* @type number[]
* @min 1
* @max 1000
* @desc Hier werden die IDs aller Akteure eingetragen, die nie an Kämpfen teilnehmen sollen.
* @default []
*
* @param escapeCommand
* @parent BATTLE
* @text Fluchtkommando einfügen
* @type text
* @desc Den Namen für das Fluchtkommando eintragen.
*
* @param COMMON EVENTS
* @text GEWÖHNLICHE EREIGNISSE
* @desc Dieser Parameter dient nur zur Übersicht.
*
* @param startAtMapChange
* @parent COMMON EVENTS
* @text Bei Kartenwechsel
* @type number
* @min 0
* @max 1000
* @desc Hier wird die ID des gew. Ereignisses eingetragen, das bei jedem Kartenwechsel ausgeführt werden soll.
* @default 0
*
* @param MENU
* @text MENÜ
* @desc Dieser Parameter dient nur zur Übersicht.
*
* @param exitOnTitle
* @parent MENU
* @text Spiel beenden
* @type text
* @desc Hier etwas eintragen, damit auf dem Titelbildschirm eine Auswahl mit dem Text erscheit, die das Spiel beenden lässt.
*
* @author Mr. Fu
*
* @help 
*
* Dieses Plugin ist im Rahmen eines Community-Projektes entstanden. Es
* erweitert folgende Funktionen des RPG-Maker-MVs:
*
* - Akteure nicht am Kampf teilnehmen lassen:
*   Es können beliebig viele Akteure von Kämpfen ausgeschlossen werden. Dazu
*   muss die jeweilige ID des Akteurs in den Parameter "Nicht-Kampfteilnehmer"
*   geschrieben werden. Jede ID muss in eine neue Zeile eingetragen werden.
*
* - Fluchtkommando bei Akteurkommandos:
*   Wenn im Parameter "Fluchtkommando einfügen" etwas eingetragen wird, wird im
*   Kampf das erste Auswahlfenster (Kampf, Flucht) übersprungen und das
*   Fluchtkommando direkt zu den Kommandos der Akteure hinzugefügt. Der Name
*   des Kommandos entspricht dem Eintrag im Parameter.
*
* - Gewöhnliches Ereignis bei Kartenwechsel starten:
*   Es kann ein gewöhnliches Ereignis bei jedem Kartenwechsel ausgeführt
*   werden. Dazu muss die ID des jeweiligen gewöhnlichen Ereignisses in den
*   Parameter "Bei Kartenwechsel" geschrieben werden. Ein Kartenwechsel liegt
*   auch dann vor, wenn der Spieler durch den Befehl "Spieler übertragen" auf
*   der Karte bleibt. Falls mehrere gewöhnliche Ereignisse ausgeführt werden
*   sollen, müssen diese über das in dem Parameter eingetragene gewöhnliche
*   Ereignis ausgeführt werden.
*
* - "Spiel beenden"-Auswahl auf Titelbildschirm:
*   Falls im Parameter "Spiel beenden" irgendetwas eingetragen wird, erscheint
*   auf dem Titelbildschirm eine Auswahl die das Spiel beenden lässt. Der Text
*   der Auswahl entspricht dem Eintrag im Parameter.
*
* Das Community-Projekt findet man hier:
* https://rpgmaker-mv.de/forum/board/81-unser-erstes-community-projekt-darkd/
*
* ============================================================================
* Nutzungsbedingungen
* ============================================================================
* Dieses Plugin darf frei genutzt werden. Credits sind erforderlich. Das Plugin
* darf nicht verändert werden.
*
* Kontakt: Mr. Fu auf https://rpgmaker-mv.de/user/319-mr-fu/
* ============================================================================
* Changelog
* ============================================================================
* Version 0.00613:
* - Funktion "Fluchtkommando bei Akteurkommandos" eingefügt.
*
* Version 0.00520:
* - Funktion "'Spiel beenden'-Auswahl auf Titelbildschirm" eingefügt.
*
* Version 0.00512:
* - Funktionen "Akteure nicht am Kampf teilnehmen lassen" und "Gewöhnliches
*   Ereignis bei Kartenwechsel starten" eingefügt.
*/
/*:en
* @plugindesc v0.00613 此插件扩展 RPG-Maker-VM 的功能。
*
* @param 战斗
* @desc This parameter is just for overview.
*
* @param removeBeforeFight
* @parent 战斗
* @text 禁止战斗人员
* @type number[]
* @min 1
* @max 1000
* @desc 插入所有演员的id值，使其不会进行战斗。
* @default []
*
* @param escapeCommand
* @parent 战斗
* @text 添加逃跑命令
* @type text
* @desc 添加战斗时逃跑命令的文本名字
*
* @param 公共事件
* @desc This parameter is just for overview.
*
* @param startAtMapChange
* @parent 公共事件
* @text 进入地图呼叫
* @type number
* @min 0
* @max 1000
* @desc 填写要在进入地图时执行的公共事件ID。
* @default 0
*
* @param MENU
* @text 菜单
* @desc This parameter is just for overview.
*
* @param exitOnTitle
* @parent 菜单
* @text 退出游戏
* @type text
* @desc 插入文本在开始游戏标题选项上，添加退出游戏的文本选项
*
* @author Mr. Fu
*
*
* @help 
*
* 翻译作者：流逝的岁月
*
* 修复问题：修复了填写"禁止战斗人员"ID时，导致的战斗开始卡死的bug
*
*
*
* 此插件是为德语社区项目创建的。它对此拓展了 RPG-Maker-MV 的某些功能。
*
* - 角色将不参与战斗:
*   任何ID的角色都可以被禁止参加战斗模式,只需将角色ID填写到“禁止战斗人员”参数中即可。每个角色都需要填写对应的ID
*
* - 为角色添加逃跑命令:
*   如果设置了参数“添加逃跑命令”，则战斗时团队命令将会被跳过，取代的是战斗角色个人的命令选项，并增加逃跑选项
*
* - 在地图更改时调用公共事件:
*   公共事件可以在地图改变时执行，只需将公共事件ID添加到参数“进入地图呼叫”。
*   甚至命令“传输播放器”也是公共事件。如果要在地图改变上执行多个的公共事件，则所有其他公共事件都必须由在参数中写入的公共事件中调用。
*
*
* - "退出游戏"-选项在标题画面:
*   如果在参数列表里设置“退出游戏”参数文本，标题上会出现一个允许退出游戏的选项。选择的名称将是参数的文本。
*
* 你可以在这里找到社区项目:
* https://rpgmaker-mv.de/forum/board/81-unser-erstes-community-projekt-darkd/
*
* ============================================================================
* 使用条款
* ============================================================================
* 此插件可免费使用在非商业和商业项目中。禁止编辑此插件！
*
* Contact: Mr. Fu on https://rpgmaker-mv.de/user/319-mr-fu/
* ============================================================================
* Changelog
* ============================================================================
* Version 0.00613:
* - Insert function "Add escapecommand to actorcommands".
*
* Version 0.00520:
* - Insert function "'Exit game'-choice on titlescreen".
*
* Version 0.00512:
* - Insert functions "Actors shall not fight" and "Start a common event at
*   mapchange".
*/

(function() {

// Get Parameters //

function parseParameters(params) {
	var obj;
	try {
		obj = JsonEx.parse(params && typeof params === 'object' ? JsonEx.stringify(params) : params);
	} catch (e) {
				return params;
	} // end of try
	if (obj && typeof obj === 'object') {
		Object.keys(obj).forEach(function (key) {
			obj[key] = parseParameters(obj[key]); 
			// If the parameter has no value, meaning it's an empty string, just set it to null
			if (obj[key] === '') {
				obj[key] = null;
			} // end of if
		});
	} // end of if
	return obj;
} // end of parseParameters
var params = parseParameters(PluginManager.parameters('MrFu_MV_Funktions_Upgrade'));


// PSEUDO-GLOBAL VARIABLES //

var removeBeforeFight = params['removeBeforeFight'];
var escapeCommand = params['escapeCommand'];
var startAtMapChange = params['startAtMapChange'];
var exitOnTitle = params['exitOnTitle'];


// FUNCTIONS //

// Checking, if a variable is an array
function checkArray(v) {
	if (!Array.isArray(v)) {
		v = [];
		return v;
	} // end of if
	return v;
} // end of checkArray
removeBeforeFight = checkArray(removeBeforeFight);


// This function removes actors, which shall not fight, before battle an add them back after battle
if (removeBeforeFight.length !== 0) 
{
	var actorsInParty = [];
	var sbterm = Scene_Battle.prototype.terminate;
	// Battle Processing
	
	var actorsIndexArr = []//记录角色站位
	
	var zzyChangeScene_Battle_create = Scene_Battle.prototype.create;
	Scene_Battle.prototype.create = function() 
	{
		actorsIndexArr = [];
		actorsInParty = [];
		for(var i=0;i<$gameParty._actors.length;i++)
		{actorsIndexArr[i] = $gameParty._actors[i];}
		//Scene_Base.prototype.start.call(this);//修复错误卡死
		for (var i = 0; i < removeBeforeFight.length; i++)
		{
			var actor = removeBeforeFight[i];
			if ($gameParty._actors.contains(actor)) 
			{
				actorsInParty.push(actor);
				$gameParty.removeActor(actor);
			} // end of if
		} // end of for
		
		zzyChangeScene_Battle_create.call(this);
	}; // end of start
	
	
	Scene_Battle.prototype.terminate = function() 
	{
		sbterm.call(this);
		$gameParty._actors = [];//清空重新添加
		for (var i = 0; i < actorsIndexArr.length; i++) 
		{$gameParty.addActor(actorsIndexArr[i]);} // end of for
	
		actorsIndexArr = [];
		actorsInParty = [];
	}; // end of terminate
} // end of if

// This function adds an escapecommand to the battlecommands and skips the first battlechoice
if(typeof escapeCommand === 'string'){
	var wacmcl = Window_ActorCommand.prototype.makeCommandList;
	Window_ActorCommand.prototype.makeCommandList = function() {
		if (this._actor) {
			wacmcl.call(this);
			this.addCommand(escapeCommand, 'escape', BattleManager.canEscape());
		}
	};
	Window_PartyCommand.prototype.setup = function() {
		this.clearCommandList();
		this.makeCommandList();
		this.refresh();
		this.callHandler('fight');
};
	var sbcacw = Scene_Battle.prototype.createActorCommandWindow;
	Scene_Battle.prototype.createActorCommandWindow = function() {
		sbcacw.call(this);
		this._actorCommandWindow.setHandler('escape', this.commandEscape.bind(this));
		this._actorCommandWindow.setHandler('cancel');
	};
	
}

// This function calls a common event after mapchange
if (startAtMapChange !== 0) {
	var gmset = Game_Map.prototype.setup;
	Game_Map.prototype.setup = function(mapId) {
		gmset.call(this, mapId);
		$gameTemp.reserveCommonEvent(startAtMapChange);
	};
} // end of if

// Adds an "Exit game"-choice to the titlescreen
if (typeof exitOnTitle === 'string') {
	var wtcmkl = Window_TitleCommand.prototype.makeCommandList;
	Window_TitleCommand.prototype.makeCommandList = function() {
		wtcmkl.call(this);
		this.addCommand(exitOnTitle, 'exitGame');
	};
	Scene_Title.prototype.commandExitGame = function() {
		this.fadeOutAll();
		SceneManager.exit();
	};
	var stccw = Scene_Title.prototype.createCommandWindow;
	Scene_Title.prototype.createCommandWindow = function() {
		stccw.call(this);
		this._commandWindow.setHandler('exitGame', this.commandExitGame.bind(this));
	};
}
})();
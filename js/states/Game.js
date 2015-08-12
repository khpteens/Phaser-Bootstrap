// Game.js

var Vent = Vent || {};

Vent.Game = function() {};

/********************************************************************/

// groups
var userInterface, bg_group;

/********************************************************************/

Vent.Game.prototype = {
	create: function() {

		createBG(0x777777);
		createCopyright();

		createWorldSettings();
		createUI();

		createSettingsPanel();
	},
	update: function() {
		if(!settings.PAUSED){
			// game loop goes here
		}
	},
	render: function() {
		// this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
	}
};

function createWorldSettings() {
	Vent.game.world.setBounds(0, 0, Vent.game.width, Vent.game.height);
	Vent.game.stage.backgroundColor = 0x222222;
}

function createUI() {
	createInputListeners();
	createButtons();
}

function createInputListeners() {}

function createButtons() {	

	// Win button
	var winBt = Vent.game.add.sprite(Vent.game.width / 2, Vent.game.height / 2 + 120, "fpo-square");
	createBt(winBt, "Win game", "Win");

	// Lose button
	var loseBt = Vent.game.add.sprite(Vent.game.width / 2, Vent.game.height / 2 + 180, "fpo-square");
	createBt(loseBt, "Lose game", "Lose");
}

function createAudio() {

	hit1 = Vent.game.add.audio('hit1');
}



function gameWin(delay) {

	// remove input listeners
	Vent.game.input.onDown.removeAll();
	Vent.game.input.onUp.removeAll();

	// delayed call to exit current state
	setTimeout(function() {

		// go to Finish screen
		Vent.game.stateTransition.to("Win");

	}, delay);
}
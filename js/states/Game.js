// Game.js

var MyGame = MyGame || {};

MyGame.Game = function() {};

MyGame.Game.prototype = {
	create: function() {

		MyGame.createBG(0x777777);
		MyGame.createCopyright();

		MyGame.createWorldSettings();
		MyGame.createUI();

		MyGame.createSettingsPanel();		
	},
	update: function() {

	},
	render: function() {

		// this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
	}
};

MyGame.createWorldSettings = function() {
	MyGame.game.world.setBounds(0, 0, MyGame.vars.WIDTH, MyGame.vars.HEIGHT);
	MyGame.game.stage.backgroundColor = 0x222222;
}

MyGame.createUI = function() {
	MyGame.createInputListeners();
	MyGame.createButtons();
}

MyGame.createInputListeners = function() {}

MyGame.createButtons = function() {

	// Win button
	var winBt = MyGame.game.add.sprite(MyGame.game.width / 2, MyGame.game.height / 2 + 120, "fpo-square");
	MyGame.createBt(winBt, "Win game", "Win");

	// Lose button
	var loseBt = MyGame.game.add.sprite(MyGame.game.width / 2, MyGame.game.height / 2 + 180, "fpo-square");
	MyGame.createBt(loseBt, "Lose game", "Lose");
}

MyGame.createAudio = function() {

	hit1 = MyGame.game.add.audio('hit1');
}

MyGame.gameWin = function(delay) {

	// remove input listeners
	MyGame.game.input.onDown.removeAll();
	MyGame.game.input.onUp.removeAll();

	// delayed call to exit current state
	setTimeout(function() {

		// go to Finish screen
		MyGame.game.stateTransition.to("Win");

	}, delay);
}
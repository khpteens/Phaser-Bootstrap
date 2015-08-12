// Finish.js

var Vent = Vent || {};

Vent.Lose = function() {};

Vent.Lose.prototype = {
	create: function() {

		createBG(0xfc6744);
		createCopyright();

		// start game text		
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 180, "The End", h1_style);
		t.anchor.set(0.5);		

		// Restart button
		var restartBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 120, "fpo-square");
		createBt(restartBt, restart_txt[0], "Game");

		// Main menu button
		var mainMenuBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 180, "fpo-square");
		createBt(mainMenuBt, mainMenu_txt[0], "MainMenu");					

		createSettingsPanel();
	},
	update: function() {}
};
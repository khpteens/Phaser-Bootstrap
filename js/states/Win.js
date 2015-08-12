// Finish.js

var Vent = Vent || {};

Vent.Win = function() {};

Vent.Win.prototype = {
	create: function() {

		createBG(0xc1cd23);
		createCopyright();

		// start game text		
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 180, "You Win!", h1_style);
		t.anchor.set(0.5);		

		// Main menu button
		var mainMenuBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 180, "fpo-square");
		createBt(mainMenuBt, mainMenu_txt[0], "MainMenu");					

		createSettingsPanel();
	},
	update: function() {}
};
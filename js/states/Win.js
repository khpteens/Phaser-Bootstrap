// Win.js

var MyGame = MyGame || {};

MyGame.Win = function() {};

MyGame.Win.prototype = {
	create: function() {

		MyGame.createBG(0xc1cd23);
		MyGame.createCopyright();

		// start game text		
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 180, MyGame.txt.winTitle[MyGame.vars.LANG], MyGame.styles.h1);
		t.anchor.set(0.5);		

		// Main menu button
		var mainMenuBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 180, "fpo-square");
		MyGame.createBt(mainMenuBt, MyGame.txt.mainMenu[MyGame.vars.LANG], "MainMenu");					

		MyGame.createSettingsPanel();
	},
	update: function() {}
};
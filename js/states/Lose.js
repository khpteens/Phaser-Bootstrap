// Lose.js

var MyGame = MyGame || {};

MyGame.Lose = function() {};

MyGame.Lose.prototype = {
	create: function() {

		MyGame.createBG(0xfc6744);
		MyGame.createCopyright();

		// start game text		
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 180, MyGame.txt.loseTitle[MyGame.vars.LANG], MyGame.styles.h1);
		t.anchor.set(0.5);		

		// Restart button
		var restartBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 120, "fpo-square");
		MyGame.createBt(restartBt, MyGame.txt.restart[MyGame.vars.LANG], "Game");

		// Main menu button
		var mainMenuBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 180, "fpo-square");
		MyGame.createBt(mainMenuBt, MyGame.txt.mainMenu[MyGame.vars.LANG], "MainMenu");					

		MyGame.createSettingsPanel();
	},
	update: function() {}
};
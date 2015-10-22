// MainMenu.js

var MyGame = MyGame || {};

MyGame.MainMenu = function() {};

MyGame.MainMenu.prototype = {
	create: function() {

		MyGame.createBG(0x262524);
		MyGame.createCopyright();

		// Project Title		
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 180, MyGame.txt.title[MyGame.vars.LANG], MyGame.styles.h1);
		t.anchor.set(0.5);

		// Project Subtitle		
		var t2 = this.game.add.text(this.game.width / 2, this.game.height / 2 - 100, MyGame.txt.subtitle[MyGame.vars.LANG], MyGame.styles.h2);
		t2.anchor.set(0.5);

		// start bt		
		var startBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 180, "fpo-square");
		MyGame.createBt(startBt, MyGame.txt.start[MyGame.vars.LANG], "Instructions");

		MyGame.createSettingsPanel();
	},
	update: function() {}
};
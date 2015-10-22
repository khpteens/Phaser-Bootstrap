// Instructions.js

var MyGame = MyGame || {};

MyGame.Instructions = function() {};

MyGame.Instructions.prototype = {
	create: function() {

		MyGame.createBG(0x777777);
		MyGame.createCopyright();

		// State title				
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 180, MyGame.txt.instructions[MyGame.vars.LANG], MyGame.styles.h1);
		t.anchor.set(0.5);

		// "How many baseballs do you need to hit?"
		var text = "Instructions go here";
		var t2 = this.game.add.text(this.game.width / 2, this.game.height / 2 - 0, text, MyGame.styles.p);
		t2.anchor.set(0.5);

		// Continue button
		var continueBt = this.game.add.sprite(this.game.width / 2 + 35, this.game.height / 2 + 180, "fpo-square");
		MyGame.createBt(continueBt, MyGame.txt.continue[MyGame.vars.LANG], "Game", false, false);

		// Back button
		var backBt = this.game.add.sprite(this.game.width / 2 - 155, this.game.height / 2 + 180, "fpo-square");
		MyGame.createBt(backBt, "icon-back", "MainMenu", "square");	

		MyGame.createSettingsPanel();	
		
	},
	update: function() {

	}
};
// Finish.js

var hitGoal = null;

var Vent = Vent || {};

//loading the game assets
Vent.Instructions = function() {};

Vent.Instructions.prototype = {
	create: function() {

		createBG(0x777777);
		createCopyright();

		// State title				
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 180, instructions_txt[0], h1_style);
		t.anchor.set(0.5);

		// "How many baseballs do you need to hit?"
		text = "Instructions go here";
		var t2 = this.game.add.text(this.game.width / 2, this.game.height / 2 - 0, text, p_style);
		t2.anchor.set(0.5);

		// Continue button
		var continueBt = this.game.add.sprite(this.game.width / 2 + 35, this.game.height / 2 + 180, "fpo-square");
		createBt(continueBt, continue_txt[0], "Game", false, false);

		// continueBt.events.onInputUp.add(function() {
		// 		hitGoal = 500;
		// 		Vent.game.stateTransition.to('Game');
		// }, this);

		// Back button
		var backBt = this.game.add.sprite(this.game.width / 2 - 155, this.game.height / 2 + 180, "fpo-square");
		createBt(backBt, "icon-back", "MainMenu", "square");	

		createSettingsPanel();	
		
	},
	update: function() {

	}
};
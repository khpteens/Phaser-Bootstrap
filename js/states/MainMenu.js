// MainMenu.js

Vent.MainMenu = function() {};

Vent.MainMenu.prototype = {
	create: function() {

		createBG(0x262524);
		createCopyright();		

		// Project Title		
		var t = this.game.add.text(this.game.width / 2, this.game.height / 2 - 180, title_txt[0], h1_style);
		t.anchor.set(0.5);

		// Project Subtitle		
		var t2 = this.game.add.text(this.game.width / 2, this.game.height / 2 - 100, subtitle_txt[0], h2_style);
		t2.anchor.set(0.5);

		// start bt		
		var startBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 180, "fpo-square");
		createBt(startBt, "Start", "Instructions");

		createSettingsPanel();
	},
	update: function() {}
};
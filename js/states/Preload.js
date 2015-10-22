// Preload.js

var MyGame = MyGame || {};

//loading the game assets
MyGame.Preload = function() {};

MyGame.Preload.prototype = {
	preload: function() {

		MyGame.createBG(0x000000);

		// show logo in loading screen
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.splash.anchor.setTo(0.5);
		this.splash.scale.set(0.5);

		// add preloader
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
		this.preloadBar.anchor.setTo(0.5);

		this.load.setPreloadSprite(this.preloadBar);


		// IMAGES **************************************************************

		// fpo		
		this.load.image('fpo-square', MyGamePath + 'assets/img/white-square.gif');
		this.load.image('fpo-circle', MyGamePath + 'assets/img/white-circle.png');
		this.load.image('common-background', MyGamePath + 'assets/img/common-background.jpg');

		// icons & emojis
		this.load.image('emoji1', MyGamePath + 'assets/img/i/emoji1.png');
		this.load.image('emoji2', MyGamePath + 'assets/img/i/emoji2.png');
		this.load.image('emoji3', MyGamePath + 'assets/img/i/emoji3.png');
		this.load.image('emoji4', MyGamePath + 'assets/img/i/emoji4.png');

		this.load.image('icon-phone', MyGamePath + 'assets/img/i/phone.png');
		this.load.image('icon-chat', MyGamePath + 'assets/img/i/chat.png');
		this.load.image('icon-baseball', MyGamePath + 'assets/img/i/baseball.png');
		this.load.image('icon-x', MyGamePath + 'assets/img/i/x.png');
		this.load.image('icon-back', MyGamePath + 'assets/img/i/arrow-left.png');
		this.load.image('icon-cog', MyGamePath + 'assets/img/i/cog.png');
		this.load.image('icon-note', MyGamePath + 'assets/img/i/note.png');
		this.load.image('icon-speaker', MyGamePath + 'assets/img/i/speaker.png');
		this.load.image('icon-refresh', MyGamePath + 'assets/img/i/refresh.png');
		this.load.image('icon-expand', MyGamePath + 'assets/img/i/expand.png');
		this.load.image('icon-contract', MyGamePath + 'assets/img/i/contract.png');


		// AUDIO ****************************************************************  

		// Firefox doesn't support .mp3 files, so include .ogg files as well.
		this.load.audio('hit1', [MyGamePath + 'assets/audio/bat_hit_ball.mp3', MyGamePath + 'assets/audio/bat_hit_ball.ogg']);


		// WEB FONTS ************************************************************

		// The Google WebFont Loader will look for this object, so create it before loading the script.
		WebFontConfig = {
			//  'active' means all requested fonts have finished loading
			//  We set a 1 second delay before calling 'createText'.
			//  For some reason if we don't the browser cannot render the text the first time it's created.
			active: function() {
				MyGame.game.time.events.add(Phaser.Timer.SECOND, MyGame.createText, this);
			},
			//  The Google Fonts we want to load (specify as many as you like in the array)
			google: {
				families: ['Open+Sans:300,400,700:latin']
			}
		};
		this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
	},
	create: function() {

		this.state.start('MainMenu');
	}
};

MyGame.createText = function() {

	// required to load web fonts before displaying project
}
// Common.js holds utility functions & settings

MyGame.vars = {

	"LANG": 0, // 0 = English, 1 = French	

	"WIDTH": 750,
	"HEIGHT": 500,

	"TOUCH": false,

	"PAUSED": false,

	"GA_CODE": "",
	"ANALYTICS_ON": false,

	"SOUND_ON": true,
	"VOLUME": 1,

	"FULLSCREEN": false,
	"IFRAMED": true,

	"CONTAINER": "",
}

MyGame.styles = {

	"h1": {
		font: "700 50px Open Sans",
		fill: "#fff",
		align: "center"
	},
	"h2": {
		font: "300 40px Open Sans",
		fill: "#fff",
		align: "center"
	},
	"h3": {
		font: "300 25px Open Sans",
		fill: "#fff",
		align: "center"
	},
	"h3_blue": {
		font: "300 25px Open Sans",
		fill: "#4ac7eb",
		align: "center"
	},
	"p": {
		font: "300 20px Open Sans",
		fill: "#fff"
	},
	"p_center": {
		font: "300 20px Open Sans",
		fill: "#fff",
		align: "center"
	},
	"copyright": {
		font: "300 10px Open Sans",
		fill: "#938884",
		align: "right"
	},
	"button": {
		font: "400 16px Open Sans",
		fill: "#fff",
		align: "center"
	},
	"touch_button": {
		font: "400 22px Open Sans",
		fill: "#000",
		align: "center"
	},
}

// FUNCTIONS ***********************************************

MyGame.createBG = function(color) {
	MyGame.bg_group = MyGame.game.add.group();

	var bg = MyGame.game.add.graphics(0, 0);
	bg.inputEnabled = true;
	bg.beginFill(color, 1);
	bg.boundsPadding = 0;
	bg.drawRect(0, 0, MyGame.game.width, MyGame.game.height);
	MyGame.bg_group.add(bg);

	// ADD A COMMON BG IMAGE

	var st = MyGame.game.state.getCurrentState().key;

	if (st != "Preload" /*&& st != "MainMenu"*/ ) {
		var bg_image = MyGame.game.add.sprite(0, 0, "common-background");
		bg_image.width = MyGame.game.width;
		bg_image.height = MyGame.game.height;
		bg_image.alpha = 0.1;
	}
}

MyGame.createBt = function(button, label_text, target_state, shape, iconImage) {

	if (!label_text) label_text = "";
	if (!shape) shape = "default";

	// sprite parameters	
	if (shape == "square") {
		button.height = button.h = 60;
		button.width = button.w = 60;
	} else {
		button.height = button.h = 60;
		button.width = button.w = 300;
	}

	button.anchor.set(0.5);
	button.inputEnabled = true;
	button.input.useHandCursor = true;
	button.tint = 0xffffff;
	button.bringToTop();
	button.alpha = 0;

	// add border
	var border = MyGame.game.add.graphics(0, 0);
	border.lineStyle(2, 0xffffff, 1);
	if (shape == "square") {
		// border.drawCircle(button.x, button.y, button.width, button.height);
		border.drawRect(button.x - button.width / 2, button.y - button.height / 2, button.width, button.height);
	} else {
		border.drawRect(button.x - button.width / 2, button.y - button.height / 2, button.width, button.height);
	}
	border.boundsPadding = 0;
	button.border = border;
	border.alpha = 1;

	// add label
	var label;
	if (label_text.indexOf("icon") == -1) {
		label = MyGame.game.add.text(button.x, button.y + 3, label_text.toUpperCase(), MyGame.styles.button);
		label.lineSpacing = -5;
	} else {
		label = MyGame.game.add.sprite(button.x, button.y, label_text);
		label.width = 25;
		label.height = 25;
	}
	label.anchor.set(0.5);
	button.label = label; //  save reference to letter	

	var icon;
	var iconMod = 30;
	if (iconImage) {
		icon = MyGame.game.add.sprite(button.x - button.width / 2 + iconMod, button.y, iconImage);
		icon.anchor.set(0.5);
		icon.height = button.height - iconMod;
		icon.width = button.height - iconMod;
		button.icon = icon;
	}

	// Mouse Over
	button.events.onInputOver.add(function() {

		MyGame.game.add.tween(button).to({
			// width: button.w + 10,
			// height: button.h + 10,
			alpha: 1
		}, 200, Phaser.Easing.Quadratic.Out, true);

		button.label.tint = 0x000000;

	}, this);
	// Mouse Out
	button.events.onInputOut.add(function() {

		MyGame.game.add.tween(button).to({
			alpha: 0
		}, 200, Phaser.Easing.Quadratic.In, true);

		button.label.tint = 0xffffff;

	}, this);

	// Press
	button.events.onInputDown.add(function() {

		button.tint = 0x4ac7eb;
	});
	// Release
	button.events.onInputUp.add(function() {

		button.tint = 0xffffff;

		if (target_state != false && target_state != undefined) {

			if (!MyGame.vars.TOUCH) {
				MyGame.game.stateTransition.to(target_state);
			} else {
				MyGame.game.state.start(target_state);
			}
		}
	});

	// to address all button elements use group 
	MyGame.btGroup = MyGame.game.add.group();

	MyGame.btGroup.add(button);
	MyGame.btGroup.add(border);
	MyGame.btGroup.add(label);
	// if (iconImage) btGroup.add(icon);

	button.group = MyGame.btGroup; // save a reference for later usage
}

MyGame.createCopyright = function() {

	// add copyright text	
	var c = MyGame.game.add.text(MyGame.game.width - 10, MyGame.game.height, MyGame.txt.copyright[MyGame.vars.LANG], MyGame.styles.copyright);
	c.anchor.set(1, 1);

	// release	
	var release = MyGame.game.add.text(10, MyGame.game.height, MyGame.txt.release[MyGame.vars.LANG], MyGame.styles.copyright);
	release.anchor.set(0, 1);
}

MyGame.openInNewTab = function(url) {
	var win = window.top.open(url, '_blank');
	win.focus();
}

MyGame.commaSeparateNumber = function(val) {
	val = Number(val).toLocaleString('en');
	return val;
}

MyGame.playAudio = function(mysound) {

	if (MyGame.vars.SOUND_ON && MyGame.vars.VOLUME > 0) {

		mysound.volume = MyGame.vars.VOLUME;
		mysound.play();
		mysound.frame = 0;
	}
}

MyGame.createSettingsPanel = function() {
	MyGame.createSettingsButton();
	MyGame.createSettingsScreen();
}

MyGame.createSettingsButton = function() {
	var settingsBt = MyGame.game.add.sprite(MyGame.game.width - 29, 29, "fpo-square");
	MyGame.createBt(settingsBt, "icon-cog", false, "square");
	settingsBt.events.onInputUp.add(function() {
		MyGame.settingsPanelToggle();
	});
}

MyGame.createSettingsScreen = function() {

	MyGame.settingsPanel = MyGame.game.add.group();

	// background
	var settingsBg = MyGame.game.add.graphics(0, 0);
	settingsBg.inputEnabled = true;
	settingsBg.beginFill(0x4ac7eb, 1);
	settingsBg.boundsPadding = 0;
	settingsBg.drawRect(0, 0, MyGame.game.width, MyGame.game.height);
	settingsBg.alpha = 0.95;
	MyGame.settingsPanel.add(settingsBg);

	// close button
	var closeBt = MyGame.game.add.sprite(MyGame.game.width - 29, 29, "fpo-square");
	MyGame.createBt(closeBt, "icon-x", false, "square");
	closeBt.events.onInputUp.add(function() {
		MyGame.settingsPanelToggle();
	});
	MyGame.settingsPanel.add(closeBt.group);

	// "Settings" title
	var title = MyGame.game.add.text(MyGame.game.width / 2, MyGame.game.height / 2 - 180, MyGame.txt.settings[MyGame.vars.LANG], MyGame.styles.h2);
	title.anchor.set(0.5);
	MyGame.settingsPanel.add(title);

	// soundBt
	var soundBt = MyGame.game.add.sprite(MyGame.game.width / 2 - 40, MyGame.game.height / 2, "fpo-square");
	MyGame.createBt(soundBt, "icon-note", false, "square");
	soundBt.events.onInputUp.add(function() {
		MyGame.soundToggle();
	});
	MyGame.settingsPanel.add(soundBt.group);

	// fullscreenBt
	var fullscreenBt = MyGame.game.add.sprite(MyGame.game.width / 2 + 40, MyGame.game.height / 2, "fpo-square");
	MyGame.createBt(fullscreenBt, "icon-expand", false, "square");
	fullscreenBt.events.onInputUp.add(function() {
		MyGame.fullscreenToggle();
	});
	MyGame.settingsPanel.add(fullscreenBt.group);

	MyGame.settingsPanel.visible = false;
}

MyGame.settingsPanelToggle = function() {

	if (!MyGame.settingsPanel.visible) {
		MyGame.settingsPanel.visible = true;
	} else {
		MyGame.settingsPanel.visible = false;
	}
}

MyGame.soundToggle = function() {

	if (!MyGame.vars.SOUND_ON) {
		MyGame.vars.SOUND_ON = true;
		MyGame.vars.VOLUME = 1;
	} else {
		MyGame.vars.SOUND_ON = false,
			MyGame.vars.VOLUME = 0;
	}
}

MyGame.fullscreenToggle = function() {

	if (!MyGame.vars.FULLSCREEN) {

		MyGame.vars.FULLSCREEN = true;
		MyGame.vars.FRAME_WIDTH = MyGame.vars.FRAME.style.width;
		MyGame.vars.FRAME_HEIGHT = MyGame.vars.FRAME.style.height;

		MyGame.vars.FRAME.style.zindex = 500;
		MyGame.vars.FRAME.style.position = "absolute";
		MyGame.vars.FRAME.style.width = window.innerWidth + "px";
		MyGame.vars.FRAME.style.height = window.innerHeight + "px";

	} else {
		MyGame.vars.FULLSCREEN = false;

		MyGame.vars.FRAME.style.zindex = 1;
		MyGame.vars.FRAME.style.position = "relative";
		MyGame.vars.FRAME.style.width = MyGame.vars.FRAME_WIDTH;
		MyGame.vars.FRAME.style.height = MyGame.vars.FRAME_HEIGHT;
	}
}

MyGame.trace = function(s, c, bg) {
	var style;
	if (bg === undefined) bg = 'WhiteSmoke';
	if (c !== undefined) {
		style = 'background: ' + bg + '; color: ' + c + '; border-left: 7px solid ' + c + ';';
	} else {
		c = '#333';
		style = 'background: ' + bg + '; color: ' + c + ';';
	}
	console.log('%c ' + s + ' ', style);
}

// type "Object.keys( window );" into console to get list of global vars
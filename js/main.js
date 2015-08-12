// main.js

var Vent = Vent || {};

// create game object
Vent.game = new Phaser.Game(settings.WIDTH, settings.HEIGHT, Phaser.CANVAS, settings.CONTAINER);

// create game states
Vent.game.state.add('Boot', Vent.Boot);
Vent.game.state.add('Preload', Vent.Preload);
Vent.game.state.add('MainMenu', Vent.MainMenu);
Vent.game.state.add('Instructions', Vent.Instructions);
Vent.game.state.add('Game', Vent.Game);
Vent.game.state.add('Win', Vent.Win);
Vent.game.state.add('Lose', Vent.Lose);

// run
Vent.game.state.start('Boot');
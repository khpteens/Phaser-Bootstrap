// main.js

var MyGame = MyGame || {};

// create game object
MyGame.game = new Phaser.Game(MyGame.vars.WIDTH, MyGame.vars.HEIGHT, Phaser.CANVAS, MyGame.vars.CONTAINER);

// create game states
MyGame.game.state.add('Boot', MyGame.Boot);
MyGame.game.state.add('Preload', MyGame.Preload);
MyGame.game.state.add('MainMenu', MyGame.MainMenu);
MyGame.game.state.add('Instructions', MyGame.Instructions);
MyGame.game.state.add('Game', MyGame.Game);
MyGame.game.state.add('Win', MyGame.Win);
MyGame.game.state.add('Lose', MyGame.Lose);

// run
MyGame.game.state.start('Boot');
var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();
game.emit('newplayer', 'Mario', 35);
game.on('gameover', function(message){
    console.log(message);
});

game.emit('gameover', 'You lose!');

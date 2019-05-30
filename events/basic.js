
/**
 * Module dependencies.
 */

var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter;

emitter.on('name', function(first, last){
    console.log(first + ', ' + last);
});

emitter.on('name1', function(first, last){
    console.log(first + ', ' + last);
});

emitter.emit('name', 'Phong', 'Nguyen');
emitter.emit('name1', 'First 1', 'Last 1');

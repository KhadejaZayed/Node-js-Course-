const events        = require('events'),
      eventEmitter  = new events.EventEmitter();

function onClick(){
    console.log('I am on click function');
}

eventEmitter.on('open', onClick);
//eventEmitter.emit('open');
eventEmitter.once('open',onClick);
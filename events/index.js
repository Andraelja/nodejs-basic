const { EventEmitter } = require('events');//1

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}

const myEmitter = new EventEmitter();//2

myEmitter.on('birthday', birthdayEventListener);//3

myEmitter.emit('birthday', 'Andra');//4
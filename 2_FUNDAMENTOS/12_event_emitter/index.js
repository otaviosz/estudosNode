const EvetnEmitter = require("events");
const eventEmitter = new EvetnEmitter();

eventEmitter.on("start", () => {
  console.log("Durante");
});

console.log('Antes')

eventEmitter.emit('start')

console.log('Depois')
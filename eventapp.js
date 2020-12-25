const fs = require('fs');
let rs = fs.createReadStream('./login.html');
rs.on('open', function () {
  console.log('เกิด open event');
});
rs.on('close', function () {
    console.log('เกิด close event');
});
rs.emit('close');
rs.emit('open');

const events = require('events');
const eve = new events.EventEmitter();

function run() {
    console.log('running..1');
    console.log('running..2');
    console.log('running..3');
}
eve.on('start', run);
eve.on('end', () => console.log('จบกัน'));
eve.emit('end');
eve.emit('start');
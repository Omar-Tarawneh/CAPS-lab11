'use strict';
const events = require('./events');
let payload;
setTimeout(() => {
  events.on('pickup', (data) => {
    payload = data;
    console.log(`DRIVER: picked up ${data.orderID}`);
    events.emit('in-transit', data);

    setTimeout(() => {
      console.log('delivered');
      events.emit('delivered', payload);
    }, 3000);
  });
}, 1000);

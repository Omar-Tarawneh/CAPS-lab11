'use strict';
const faker = require('faker');
const events = require('./events.js');

setInterval(() => {
  const store = {
    store: '1-206-flowers',
    orderID: faker.datatype.number(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  events.emit('pickup', store);
}, 5000);
setTimeout(() => {
  events.on('in-transit', (data) => {
    console.log('in-transit', data);
  });
}, 900);
events.on('delivered', () => {
  console.log('Thank you');
});

'use strict';

const events = require('./events.js');
require('./driver.js');
require('./vendor.js');

events.on('pickup', (payload) => {
  console.log('New order have been placed :)', payload);
});

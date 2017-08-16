const ava = require('ava');
const uid = require('./');

ava('Generates UIDs', t =>
  uid(20).then(str => {
    const pattern = /[A-Za-a0-9]/;

    t.is(str.length, 20);
    t.true(pattern.test(str));
  })
);

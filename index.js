const crypto = require('crypto');

module.exports = lenght =>
  new Promise((resolve, reject) => {
    if (typeof lenght !== 'number') return reject(new Error('Length must be a number'));

    if (lenght <= 0) return reject(new Error('Length must be greater than 0'));

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    crypto.randomBytes(lenght, (err, buffer) => {
      if (err) return reject(err);

      const str = [];

      for (let i = 0; i < buffer.length; i++) {
        str.push(chars[buffer[i] % chars.length]);
      }

      resolve(str.join(''));
    });
  });

const Err = require('./');
const assert = require('assert');
const message = 'wrong';
const err = new Err(message, { code: '007' });

assert(err instanceof Err);
assert(err.message === message);

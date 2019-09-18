class Err extends Error {
  constructor (message, extra) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.extra = extra;
  }
  inspect () {
    return this.stack;
  }
}

module.exports = Err;

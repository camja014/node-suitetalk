'use strict';

const Field = require('./common/field');

class LongRef extends Field {
  constructor() {
    super();
    this._fieldType = 'number';
  }
}

module.exports = LongRef;

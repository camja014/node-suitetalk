'use strict';

const Record = require('./common/record');

class CustomerPayment extends Record {
  constructor() {
    super();
    this._type = 'tranCust';
    this._name = 'CustomerPayment';
  }
}

module.exports = CustomerPayment;

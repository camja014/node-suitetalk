'use strict';

const Line = require('./common/line');

class CustomerPaymentCredit extends Line {
  constructor() {
    super();
    this._type = 'tranCust';
    this._name = 'CustomerPaymentCredit';
    this._listName = 'credit';
  }
}

module.exports = CustomerPaymentCredit;

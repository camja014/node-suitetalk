'use strict';

const Line = require('./common/line');

class CustomerPaymentApply extends Line {
  constructor() {
    super();
    this._type = 'tranCust';
    this._name = 'CustomerPaymentApply';
    this._listName = 'apply';
  }
}

module.exports = CustomerPaymentApply;

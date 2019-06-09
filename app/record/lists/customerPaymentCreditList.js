'use strict';

const List = require('./common/list');

class CustomerPaymentCreditList extends List {
  constructor() {
    super();
    this._type = 'tranCust';
    this._name = 'CustomerPaymentCreditList';
    this._listName = 'creditList';
  }
}

module.exports = CustomerPaymentCreditList;

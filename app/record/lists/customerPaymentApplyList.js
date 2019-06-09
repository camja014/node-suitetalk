'use strict';

const List = require('./common/list');

class CustomerPaymentApplyList extends List {
  constructor() {
    super();
    this._type = 'tranCust';
    this._name = 'CustomerPaymentApplyList';
    this._listName = 'applyList';
  }
}

module.exports = CustomerPaymentApplyList;

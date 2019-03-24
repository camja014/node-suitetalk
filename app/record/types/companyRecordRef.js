'use strict';

const Reference = require('./common/reference');

class CompanyRecordRef extends Reference {
  constructor() {
    super();
    this.typeId = undefined;
    this._reference = 'CompanyRecordRef';
  }
}

module.exports = CompanyRecordRef;

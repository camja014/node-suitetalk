'use strict';

const SearchBasic = require('./common/searchBasic');

class ContactSearchBasic extends SearchBasic {
  constructor() {
    super();
    this._type = 'platformCommon';
    this._name = 'ContactSearchBasic';
  }
}

module.exports = ContactSearchBasic;

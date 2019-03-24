'use strict';

const Types = {
  BillingAccount: require('./billingAccount'),
  CashSale: require('./cashSale'),
  Contact: require('./contact'),
  CustomRecord: require('./customRecord'),
  CustomRecordRef: require('./customRecordRef'),
  Customer: require('./customer'),
  CustomerPayment: require('./customerPayment'),
  CustomerStatus: require('./customerStatus'),
  EntityGroup: require('./entityGroup'),
  Estimate: require('./estimate'),
  Invoice: require('./invoice'),
  ItemFulfillment: require('./itemFulfillment'),
  ListOrRecordRef: require('./listOrRecordRef'),
  Opportunity: require('./opportunity'),
  Partner: require('./partner'),
  RecordRef: require('./recordRef'),
  SalesOrder: require('./salesOrder'),
  Vendor: require('./vendor'),
};

module.exports = Types;

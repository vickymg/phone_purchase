function PhoneStore() {

  const SPENDING_THRESHOLD = 200;
  const TAX_RATE = 0.08;
  const PHONE_PRICE = 99.99;
  const ACCESSORY_PRICE = 9.99;

  this.bank_balance = 303.91;
  this.amount = 0;

  PhoneStore.prototype.sell = function() {
    this.amount += PHONE_PRICE;
  };
}

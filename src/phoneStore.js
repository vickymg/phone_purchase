function PhoneStore() {

  const SPENDING_THRESHOLD = 200;
  const TAX_RATE = 0.08;
  const PHONE_PRICE = 99.99;
  const ACCESSORY_PRICE = 9.99;

  this.customer_bank_balance = 303.91;
  this.amount = 0;
  this.overdrawn = false;

  PhoneStore.prototype.sell = function() {
    this.checkBalance();
    if(this.overdrawn === true) {
      return("You can't afford this phone! :-(");
    } else {
      this.amount += PHONE_PRICE;
      this.deductCost();
    }
  };

  PhoneStore.prototype.checkBalance = function() {
    if(this.customer_bank_balance <= 0) {
      this.overdrawn = true;
    }
  };

  PhoneStore.prototype.deductCost = function() {
    this.customer_bank_balance -= PHONE_PRICE;
  };

  PhoneStore.prototype.formatTotal = function() {
    this.totalAmount = this.amount.toFixed(2)
    return("Your purchase total is: £" + this.totalAmount)
  };
}

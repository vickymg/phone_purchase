describe("PhoneStore", function() {

  var phoneStore;

  beforeEach(function() {
     phoneStore = new PhoneStore();
   });

  it("sells a phone and updates the amount spent", function() {
    phoneStore.sell();
    expect(phoneStore.amount).toEqual(99.99);
  });

  it("checks the bank balance for sufficient funds", function() {
    phoneStore.customer_bank_balance = 0;
    phoneStore.checkBalance();
    expect(phoneStore.overdrawn).toEqual(true);
  });

  it("deducts the cost of the phone from the bank balance", function() {
    phoneStore.deductCost();
    expect(+phoneStore.customer_bank_balance.toFixed(2)).toEqual(203.92)
  });

  it("keeps selling phones until there are insufficient funds", function() {
    phoneStore.customer_bank_balance = 0;
    expect(phoneStore.sell()).toEqual("You can't afford this phone! :-(");
  });

  it("deducts the cost of the phone from balance once sold", function() {
    phoneStore.sell();
    expect(+phoneStore.customer_bank_balance.toFixed(2)).toEqual(203.92);
  });

  it("formats the total amount to pay", function() {
    expect(phoneStore.returnTotal()).toEqual("Your purchase total is: £99.99");
  });

  it("returns the total purchase amount after a sale", function() {
    spyOn(phoneStore, 'returnTotal');
    phoneStore.sell();
    expect(phoneStore.returnTotal).toHaveBeenCalled();
  });
});

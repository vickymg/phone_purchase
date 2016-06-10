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
    phoneStore.bank_balance = 0
    expect(phoneStore.checkBalance()).toEqual("You can't afford this phone! :-(");
  });

});

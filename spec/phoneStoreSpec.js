describe("PhoneStore", function() {

  var phoneStore;

  beforeEach(function() {
     phoneStore = new PhoneStore();
   });

  it("sells a phone and updates the amount spent", function() {
    phoneStore.sell();
    expect(phoneStore.amount).toEqual(99.99);
  });

});

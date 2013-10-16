describe('isLeapYear', function() {
  it("is divisible by 4", function() {
    isLeapYear(1992).should.equal("Yes");    //first test
  });

  it("is not divisible by 4", function() {
    isLeapYear(1993).should.equal("No");  //first test
  });

  it("is not divisible by 100", function() {
    isLeapYear(1990).should.equal("No");  //second test
  });
  it("is not divisible by 100", function() {
    isLeapYear(100).should.equal("No");  //second test
  });
  it("is divisible by 400", function() {
    isLeapYear(2000).should.equal("Yes"); //third test
  });
  it("is divisible by 400", function() {
    isLeapYear(1600).should.equal("Yes"); //third test
  });
  it("is divisible by 400", function() {
    isLeapYear(1200).should.equal("Yes"); //third test
  });

});
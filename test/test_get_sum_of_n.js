var expect = require("chai").expect;
var get_sum_of_n = require("../get_sum_of_n");

describe("let func = get_sum_of_n(0)", function () {
  it("should add 0 numbers", function () {
    // 1. ARRANGE
    let x = 0;

    // 2. ACT
    let sum = get_sum_of_n(x);
    // 3. ASSERT
    expect(sum).to.be.equal(0);
  });
});

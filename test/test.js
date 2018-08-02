/*

let lazy = (eval) => ((data) => new Proxy(data, {
  set(obj, key, val) {
      obj[key] = val;
      eval(obj);
  }
}))({});

*/

var expect = require('chai').expect;
var lazy = require('../lazy');
var lazy_require = require('../lazy_require');

describe('let func = lazy((f) => c = f.a + f.b)', function () {
  it('should add two numbers', function () {

    // 1. ARRANGE
    let a = 1;
    let b = 2;
    let c;

    // 2. ACT
    let func = lazy((f) => c = f.a + f.b);
    func.a = a;
    func.b = b;

    // 3. ASSERT
    expect(c).to.be.equal(3);
  });
});

describe('let func = lazy(() => c = func.a + func.b)', function () {
  it('should add two numbers', function () {

    // 1. ARRANGE
    let a = 1;
    let b = 2;
    let c;

    // 2. ACT
    let func = lazy(() => c = func.a + func.b);
    func.a = a;
    func.b = b;

    // 3. ASSERT
    expect(c).to.be.equal(3);
  });
});

describe('let func = lazy(() => c = a + func.b)', function () {
  it('should add two numbers', function () {

    // 1. ARRANGE
    let a = 1;
    let b = 2;
    let c;

    // 2. ACT
    let func = lazy(() => c = a + func.b);
    func.b = b;

    // 3. ASSERT
    expect(c).to.be.equal(3);
  });
});

describe('let func = lazy(() => c = a + func.c)', function () {
  it('should add two numbers', function () {

    // 1. ARRANGE
    let a = 1;
    let b = 2;
    let c;

    // 2. ACT
    let func = lazy(() => c = a + func.c);
    Object.defineProperty(func,'c', {
      get: function() {
        return c;
      },
      set: function(newVal) {
        c = newVal;
      }
    })
    func.c = 2;

    // 3. ASSERT
    expect(c).to.be.equal(3);
  });
});

describe('let func = lazy((f) => { if (f.a && f.b) { c = f.a + f.b } })', function () {
  it('should add two numbers', function () {

    // 1. ARRANGE
    let a = 1;
    let b = 2;
    let c;

    // 2. ACT
    let func = lazy((f) => {
      if (f.a && f.b) { 
        c = f.a + f.b 
      }
    });

    func.a = a;
    func.b = b;

    // 3. ASSERT
    expect(c).to.be.equal(3);
  });
});

describe('let func = lazy_require((f) => { if (f.a && f.b) { c = f.a + f.b } }, ()=>(a && b))', function () {
  it('should add two numbers', function () {

    // 1. ARRANGE
    let a = 1;
    let b = 2;
    let c;

    // 2. ACT
    let func_reqire = lazy_require((f) => f.a && f.b);

    let func = func_reqire((f) => {
      c = f.a + f.b 
    });

    func.a = a;
    func.b = b;

    // 3. ASSERT
    expect(c).to.be.equal(3);
  });
});
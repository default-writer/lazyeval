//let lazy=(eval)=>((data)=>new Proxy(data,{set(obj,key,val){obj[key]=val;eval(obj);}}))({});

var expect = require('chai').expect;

var lazy = require('../lazyeval');

describe('lazy', function () {
  it('should add two numbers', function () {

    // 1. ARRANGE
    let a = 1;
    let b = 2;

    // 2. ACT

`    let func = lazy((func) => c = func.a + func.b);

    func.a = a;
    func.b = b;
    let c;

    // 3. ASSERT
    expect(c).to.be.equal(3);
  });
});


describe('lazy', function () {
  it('should add two numbers', function () {

    // 1. ARRANGE
    let x = 5;
    let y = 1;
    let sum1 = 6;

    // 2. ACT
    let func = lazy((func) => sum2 = func.x + func.y);
    func.x = x;
    func.y = y;

    let sum2;

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);
  });
});
//let lazy=(e)=>((o)=>new Proxy(o,{set(o,k,v){o[k]=v;e(o);}}))({});
/*
let a = 1;
let b = 2;
let c;
let f = _(() => c = a + f.c);
f.c = -1;
console.log(c);

Object.defineProperty(f,'c',{
    get: function() {
        return c;
    },
    set: function(newVal) {
        c = newVal;
    }
})

f.c = 2;
console.log(c);
*/
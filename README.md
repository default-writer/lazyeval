# lazyeval
Minimalist Lazy Evaluation JavaSctipt famework

```js
let lazy = (eval) => ((data) => new Proxy(data, {
  set(obj, key, val) {
      obj[key] = val;
      eval(obj);
  }
}))({});
```

https://github.com/hack2root/lazyeval

[![install size](https://packagephobia.now.sh/badge?p=@root_admin/lazyeval@1.0.1)](https://packagephobia.now.sh/result?p=@root_admin/lazyeval@1.0.1)

## Example

- func is a proxy for an empty objct {}
- func calls evaluation function every time you write to existing, new or user defined properties
- func updates internal object and passes it as an argument for every call to evaluation function
- f is a parameter pointing to the internal representation of the external object {}
- c is not evaluated until all requirements for evaluation is met for evaluation function

```js
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
```


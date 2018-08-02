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

let lazy = (eval) => ((data) => new Proxy(data, {
    set(obj, key, val) {
        obj[key] = val;
        eval(obj);
    }
}))({});

module.exports = lazy;
let lazy_require = (requres) => (eval) =>  ((data) => new Proxy(data, {
    set(obj, key, val) {
        obj[key] = val;
        if (requres(obj)) {
            eval(obj);
        }
    }
}))({});

module.exports = lazy_require;
let lazy_require = (requre) => (eval) =>  ((data) => new Proxy(data, {
    set(obj, key, val) {
        obj[key] = val;
        if (requre(obj)) {
            eval(obj);
        }
    }
}))({});

module.exports = lazy_require;
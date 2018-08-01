//let lazy=(eval)=>((data)=>new Proxy(data,{set(obj,key,val){obj[key]=val;eval(obj);}}))({});
let lazy=(e)=>((o)=>new Proxy(o,{set(o,k,v){o[k]=v;e(o);}}))({});

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
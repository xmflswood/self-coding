function add (a, b, c) {
    return a + b + c
}

function currying(fn, _args = []) {
    return (...args) => {
        if (fn.length === [..._args, ...args].length) {
            return fn(..._args, ...args)
        } else {
            return currying(fn, [..._args, ...args])
        }
    }
}

function unCurrying(fn) {
    return (...args) => fn.apply(this, args)
}

console.log(add(1,2,3))
var cadd = currying(add)
console.log(cadd(1,2)(3))
var uadd = unCurrying(cadd)
console.log(uadd(1,2,3))
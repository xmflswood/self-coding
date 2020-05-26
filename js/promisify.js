function promisify(fn) {
    return function (...args) {
        return new Promise((resovle, reject) => {
            fn(...args, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resovle(data)
                }
            })
        })
    }
}
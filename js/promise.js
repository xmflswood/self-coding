// https://segmentfault.com/a/1190000018420228

const P = 'pending'
const R = 'rejected'
const F = 'fulfilled'


function Promise(executor) {
  const self = this
  self.state = P
  self.value = null
  self.reason = null
  self.resolveList = []
  self.rejectList = []
  
  function resolve(value) {
    if (self.state === P) {
      self.state = F
      self.value = value
      self.resolveList.forEach(fn => {
        fn(self.value)
        self.resolveList.shift()
      })
    }
  }
  function reject(reason) {
    if (self.state === P) {
      self.state = R
      self.reason = reason
      self.rejectList.forEach(fn => {
        fn(self.reason)
        self.rejectList.shift()
      })
    }
  }
  try {
      executor(resolve, reject)
  } catch(e) {
      reject(e)
  }
}

Promise.prototype.then = function (resolveCb, rejectCb) {
    if (this.state === F) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let result = resolveCb(this.value)
          if (result instanceof Promise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        }, 0);
      })
    }
    if (this.state === R) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let result = rejectCb(this.reason)
          if (result instanceof Promise) {
            result.then(resolve, reject)
          } else {
            reject(result)
          }
        }, 0);
      })
    }
    if (this.state === P) {
      return new Promise((resolve, reject) => {
        this.resolveList.push(() => {
          setTimeout(() => {
            let result = resolveCb(this.value)
            if (result instanceof Promise) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          }, 0)
        })
        this.rejectList.push(() => {
          setTimeout(() => {
            let result =  rejectCb(this.reason)
            if (result instanceof Promise) {
              result.then(resolve, reject)
            } else {
              reject(result)
            }
          })
        })
      })
    }
}


Promise.all = function (arr) {
  return new Promise((resolve, reject) => {
    let result = []
    arr.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = true
        if (result.length === arr.length) {
          resolve(value)
        }
      }, reject)  
    })
  })
}

function cloneDeep(obj) {
  let p = []
  let c = []
  function _(obj) {
    if (typeof obj !== 'object') return obj
    let o
    if (Array.isArray(obj)) {
      o = []
    } else {
      o = Object.create(obj.__proto__)
    }
    const index = p.indexOf(obj)
    if (index !== -1) {
      return c[index]
    }
    p.push(obj)
    c.push(o)
    Object.keys(obj).forEach(key => {
      o[key] = _(obj[key])
    })
    return o
  }
  return _(obj)
}

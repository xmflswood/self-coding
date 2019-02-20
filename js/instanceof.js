function instanceof2(l, r) {
  if (typeof l !== 'object') return false
  let proto = l.__proto__
  while(1) {
    if (proto === r.prototype) return true
    if (!proto) return false
    proto = proto.__proto__
  }
}

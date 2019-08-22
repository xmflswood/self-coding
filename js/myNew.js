function Mynew() {
  const [fn, ...args] = arguments
  let temp = new Object()
  temp.__proto__ = fn.prototype
  fn.apply(temp,  args)
  return temp
}

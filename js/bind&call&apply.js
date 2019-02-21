function B (name, age) {
  this.name = name
  this.age = age
}
a = {}
Function.prototype.apply2 = function () {
  const [context, args] = arguments
  context.fn = this
  context.fn(...args)
  delete context.fn
}
B.apply2(a, ['wood', 18])
console.log(a)
a = {}
Function.prototype.call2 = function () {
  const [context, ...args] = arguments
  context.fn = this
  context.fn(...args)
  delete context.fn
}
B.call2(a, 'wood', 18)
console.log(a)
a = {}
Function.prototype.bind2 = function () {
  const [context, ...args] = arguments
  const self = this
  return function () {
    self.apply(context, args)
  }
}
var test = B.bind(a)
test('wood', 18)
console.log(a)

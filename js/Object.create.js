// 简单版本
Object.create2 = function (o) {
  function F() {}
  F.prototype = o
  return new F()
}
var o = {
  a: 1
}
var b = Object.create(o)

b.__proto__ === o // true

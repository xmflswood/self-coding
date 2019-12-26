## **构造函数如果有返回值**
- 如果返回对象，忽略实例化对象，返回这个对象
- 如果返回的不是对象，可以忽略这句return，返回实例化的对象

## 过程

```javascript
function _new() {
  var obj = new Object(null)
  var [fn, ...args] = arguments
  obj.__proto__ = fn.prototype
  var r = fn.apply(obj, args)
  return typeof r === 'object' ? r : obj
}

```

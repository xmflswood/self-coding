## 从ECMAScript规范解读this

### 箭头函数
- 可以在上一行写 var self = this，箭头函数内部的this就是这个self

### Types
- ECMAScript 的类型分为语言类型和规范类型
- 语言类型：Undefined / Null / Boolean / String / Number / Object
- 规范类型【Reference】：Undefined / a Boolean /  an Object / a Number / a String / an environent record

### Reference
``` javascript
  aReference = {
    base: blablabla,  // 属性所在的对象或者environmentRecord
    name: String  // key
    strict: Boolean // 所在环境"use strict" ?
  }
```  
例子:  
```javascript
var foo = 1
fooReference = {
  base: environmentRecord,
  name: 'foo',
  strict: false
}
```
再来:  
```javascript
var foo = {
  bar: function () {
    return this
  }
}
foo.bar()
fooReference = {
  base: foo,
  name: 'bar',
  strict: false
}
```
还有一些方法，记住两个:  
- GetBase: 返回reference.base
- IsPropertyReference: 如果base是一个对象，为true

### 如何确定this的值？
1. let ref = MemberExpression  
2. MemberExpression is a Reference ?  
3. 2 (true) : 如果base是一个对象，this就是指向base，否则（即envRecord）为undefined  
4. 2 (false): 如果不是reference undefined

### MemberExpression ? 
- 属性访问表达式，简单理解为()左边部分
举例：  
```javascript
  foo() // M = foo
  a.b.c() // M = a.b.c
  c()() // M = c()
```

### Reference ?
- ECMASCRIPT 规范 11.2.1 Property Accessors  
- 回去查阅 规范类型【Reference】  不在里面就肯定不是

### 注意你不知道的JS里面提及的
  - 隐式丢失（可用上面的方法解决）
  - call / bind等（上面的方法不能解决）
  - new 最高级
  - strict 下是undefined 其他一般是window

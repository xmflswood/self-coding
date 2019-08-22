##  原型赋值
- 无法通过父类创建私有属性  

``` javascript
  function Person(name = 'wood') {
    this.name = name
  }
  Person.prototype.getName = function () {
    console.log(this.name)
  }

  function Man() {}
  Man.prototype = new Person()

  var man = new Man()
```

## 调用构造函数
- 只能继承父类构造函数中声明的实例属性，没有继承父类的原型的属性和方法  

``` javascript
  function Person(name = 'wood') {
    this.name = name
  }
  Person.prototype.getName = function() {
    console.log(this.name)
  }

  function Man(name) {
    Person.apply(this, arguments)
  }
  var man = new Man('Pony')

  man.name //'Pony'
  man.getName() // 报错
```
## 组合
- 实际上，不需要的属性，仍存在原型中

``` javascript
  function Person(name = 'wood') {
    this.name = name
  }
  Person.prototype.getName = function () {
    console.log(this.name)
  }

  function Man(name) {
    Person.apply(this, arguments)
  }
  Man.prototype = new Person()
  var man = new Man('Pony')

  man.name // 'Pony'
  man.getName() // 'Pony'
  man.__proto__.name // 'wood'
```

## 寄生组合继承
- 记得修改constructor
``` javascript
  function Person(name = 'wood') {
    this.name = name
  }
  Person.prototype.getName = function () {
    console.log(this.name)
  }

  function Man(name) {
    Person.apply(this, arguments)
  }
  Man.prototype = Object.create(Person.prototype)
  // Object.setPrototypeof(Man.prototype, Person.prototype)
  // Man.prototype.__proto__ = Person.prototype
  var man = new Man('Pony')

  // man.constrocutor === Person

  Man.prototype.constrocutor = Man
```

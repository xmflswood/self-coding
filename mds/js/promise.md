**Promises/ A+规范**
- https://www.ituring.com.cn/article/66566

# 规范上的重要东西
## Promise的状态
- Pending （可迁移至后两者）
- Fulfilled （不可迁移）
- Rejected （不可迁移）

## Then方法
接受两个**可选**参数，这俩**必须为函数**，如果不是函数就会被忽略
```javascript
    promise.then(onFulfilled, onRejected)
```
onFulfilled  
- 当 promise 执行结束后其必须被调用，其第一个参数为 promise 的终值
-  在 promise 执行结束前其不可被调用
- 其调用次数不可超过一次

then 方法必须返回一个 promise(所以可以一直 then)

# Promise一些知识点
## resolve的参数还可能是另一个promise实例
```javascript
    const p1 = new Promise(function (resolve, reject) {
        // ...
    });

    const p2 = new Promise(function (resolve, reject) {
    // ...
        resolve(p1);
    })
```
要注意此时p1的状态会传递给p2，p1的状态会决定p2的状态。如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。

## catch返回的也是一个Promise对象

## resolve reject不会终结函数的运行

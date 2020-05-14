## CommonJS
- 同步！ 
- 主要运行在服务端，浏览器端更适合采取异步加载

## AMD
- 异步模块定义
- 模块的加载不影响后面语句的运行，如果后面的语句需要依赖模块，就放回调里面

## CMD
- 和AMD很像，比较推崇就近依赖

## UMD
- CommonJS + AMD
- 先判断 define.amd 然后 module module.exports 都没有就用最原始

## es module
- 不是动态解析，且依赖模块优先执行
- 过程： 1.构建（静态解析，生成模块图谱） 2.实例化（把import 和 export活绑定，同一块内存） 3.运行

## 循环依赖
- CommonJS 模块被循环依赖时，只会输出当前执行完成的导出值（如果a.js引用b.js,b.js引用a.js，那么b.js执行的时候继续往下跑，可看成忽略引用a.js）




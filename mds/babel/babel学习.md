## babel原理
原始代码 -> @babel/parser parser -> AST -> transformer(babel-core) -> 新AST -> @babel/generator -> 输出字符串


## @babel/parser
-  在线查看解析 https://astexplorer.net/

## transform
- 接收AST并对其遍历，对相应NODE做相应修改，输出新AST
- **这里是插件介入的工作部分**

## generator
- 把AST转为字符串形式的代码，(source maps也是在这生成)


## 重要参考资料
- babel插件实现 https://blog.csdn.net/weixin_34119545/article/details/91371156
- 理解babel https://www.jianshu.com/p/947dcde62667
- 官网tooling https://babeljs.io/docs/en/next/babel-parser

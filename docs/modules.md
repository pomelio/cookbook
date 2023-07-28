
## 模块

模块文件的扩展名为`wby`. 文件里可以定义函数和变量, 所有这些函数和变量都可以被其它模块引用.

```wby

// abc.wby

let i = 1;
let b = 'abc';

fn plus1(val) {
  return value + 1;
}


```


模块名就是模块文件名去掉`wby`文件后缀

```wby

// hello.wby

import abc as a;

assert(a.i == 1);
assert(a.b == 'abc');

let b = a.plus1(2);
assert(b == 3);

```

## modules

> The extension of a module file is `wby`. Functions and variables can be defined in the module, and all these functions and variables can be referenced by other modules.

``` wby

//abc.wby

let i = 1;
let b = 'abc';

fn plus1(val) {
   return value + 1;
}


```


> The module name is the module file name without the `wby` file suffix

``` wby

// hello.wby

import abc as a;

assert(a.i == 1);
assert(a.b == 'abc');

let b = a. plus1(2);
assert(b == 3);

```
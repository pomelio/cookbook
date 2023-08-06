# modules
> module are for the re-usable program. 
- module is a `map` value
- module includes variables and functions. These variables and function can be referenced by the `import` statement

Basically, a module is a `map` value as bellow:
```
let module1 = {
   variable1: 'xxx'.
   variable2: 1323,
   variable3: {
      dd: 'dfd',
   },
   function1: fn abc(arg1, arg2) {
      ...
   },
   function2: fn abc(arg1, arg2) {
      ...
   }
}
```



There are 2 kinds of modules:
- built-in module,  which is developed by the platform. The built-in module path starts with `std` or `ext`
- user defined module, which is a file with extension `.wby` and saved under the `/bin/modules` folder.


## user defined module
> The extension of a user defined module file is `.wby`. Functions and variables can be defined in the module, and all these functions and variables can be referenced by other modules and pages.

- the module files must be saved under the folder `/bin/modules`

the following is an example module saved under `/bin/modules/abc.wby` 

```
//abc.wby

let i = 1;
let b = 'abc';

fn plus1(val) {
   return value + 1;
}

```


The following is a page saved under `/bin/hello.wby`

```
// hello.wby

import abc as a;

assert(a.i == 1);
assert(a.b == 'abc');

let b = a.plus1(2);
assert(b == 3);
```
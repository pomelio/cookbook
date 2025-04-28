---
id: modules
---
# script
- a program only can have one script which is the entrance.
- a script layout is as below
  
```
  -----------------------------
  imports area
  -----------------------------
  functions declaration area
  -----------------------------
  statments area
  -----------------------------

```
- a program starts from first line of statments area


  

# modules
> module are for the re-usable program. 
- module is a collection of functions.
- a module's layout as below
  
```
  -----------------------------
  imports area
  -----------------------------
  functions declaration area
  -----------------------------

```

There are 2 kinds of modules:
- built-in module,  which is developed by the platform. The built-in module path starts with `std` or `ext`
- user defined module, which is a file with extension `.wby` and saved under the `/bin/local` folder and the path starts with `local`

The module `std.global` doesn't need to be imported and the functions and variables in this module can be referenced directly.

## user defined module example


- the module files must be saved under the folder `/bin/local`

the following is an example module saved under `/bin/local/abc.wby` 

```
//abc.wby



fn plus1(val) {
   return value + 1;
}

fn hello(name) {
   return `hello ${name}`;
}

```


The following is a script saved under `/bin/index.wby`

```
// hello.wby

import local.abc as a;

let b = a.plus1(2);
assert(b == 3);
```

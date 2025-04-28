---
id: variables
---
# variables
> `variables` must be declared firstly, then the variable can be referenced. 

- The variable can be declared by an `assignment` statement with the `var` keyword.


## string
```
var a = 'Australia';
var b = "i love you!";
var c = `i love ${a}`;
assert(c == 'i love Australia');
```
> ${a} is replaced with the variable `a`'s value which is `Australia`
> `a` must be an valid expression, it can be an string, number, boolean variable or some expression such as `a+b` `a > b` `a - 100` `a != b`


```
var a = 'abc';
var b = 1;
var c = `i love ${a} channel ${b}`;
assert(c == 'i love abc channel 1');
```


## number
```
var a = 123;
var a = 1.23;
var c = 0x2F804;
var d = 0.255e3;
```


## boolean variables
```
var a = true;
var b = false;
```


## array
```
var a = ['abc', 'cde'];
var b = [1, 2, ...a];
assert(b == [1, 2, 'abc', 'cde']);
var c  = [1, 3, 5, 6];
var d  = [1, 2, 3, 'abc', [1, 2, 3], {a: 1, b: 'dfd'}];




var abc = [1, 2, 3];
var bc =[...abc, 4, 5];
assert(bc == [1, 2, 3, 4, 5]);



var arr = [
    1,
    2,
    [1,
    2, 
    {
        a: 1,
        b: 3,
        c: [1, 2]
    }
    ]
];

var i = arr[2][2]['c'][1];
console('i:' + i);

arr[2][2]['a'] = 3;
var dds = 2;
var ii = arr[2][dds]['a'];
assert(ii == 3);
```

> `...a` is an array variable spread

## Map
```
var a = { a: 1, b: 3, c: '123'};
var b = { a: [1, 2, 3], b: 'add'};
var c = { a: 1, b: { c: '122', d: 1}};
var abc = {a: 'a', abc: 'abc'};
var d = { a: '3', ...abc};
assert(d == {a: 'a', abc: 'abc'});


var abc = {
    a: 'aaa',
    b: 1
};

var def = {
    c: 'a',
    ...abc
};

assert(def['a'] == 'aaa');
assert(def['b'] == 1);
assert(def['c'] == 'a');
```
> `...abc` is a map variable spread. The `a` is 'a' instead of '3', because overwriting.

## null
```
var a = null;
```

## undefined
```
var a = undefined;
```

---
id: variables
---
# variables
> `variables` must be declared firstly, then the variable can be referenced. 

- The variable can be declared by an `assignment` statement with the `let` keyword.
- The variable with same name can be declared multi times, Later declarations override earlier declarations.

## string
```
let a = 'Australia';
let b = "i love you!";
let c = `i love {a}`;
assert(c == 'i love Australia');
```
> {a} is replaced with the variable `a`'s value which is `Australia`


```
let a = 'abc';
let b = 1;
let c = `i love {a} channel {b}`;
assert(c == 'i love abc channel 1');
```


## number
```
let a = 123;
let a = 1.23;
let c = 0x2F804;
let d = 0.255e3;
```


## boolean variables
```
let a = true;
let b = false;
```


## array
```
let a = ['abc', 'cde'];
let b = [1, 2, ...a];
assert(b == [1, 2, 'abc', 'cde']);
let c  = [1, 3, 5, 6];
let d  = [1, 2, 3, 'abc', [1, 2, 3], {a: 1, b: 'dfd'}];




let abc = [1, 2, 3];
let bc =[...abc, 4, 5];
assert(bc == [1, 2, 3, 4, 5]);



let arr = [
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

let i = arr[2][2]['c'][1];
console('i:' + i);

arr[2][2]['a'] = 3;
let dds = 2;
let ii = arr[2][dds]['a'];
assert(ii == 3);
```

> `...a` is an array variable spread

## Map
```
let a = { a: 1, b: 3, c: '123'};
let b = { a: [1, 2, 3], b: 'add'};
let c = { a: 1, b: { c: '122', d: 1}};
let abc = {a: 'a', abc: 'abc'};
let d = { a: '3', ...abc};
assert(d == {a: 'a', abc: 'abc'});


let abc = {
    a: 'aaa',
    b: 1
};

let def = {
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
let a = null;
```

## undefined
```
let a = undefined;
```

## UserData

> Can only be created by built-in functions
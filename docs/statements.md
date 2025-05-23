---
id: statments
---
# statements

## comment
> comment can be anywhere of a script or modules
```
// this is an example of comment
```


## import
> import `module_path` as `alias`;
- `module_path`: It is `identifiers` separated by `.`
- `alias`: is an `identifiers`

examples:
```
import abc.bcd as bc;
```
- `abc.bcd` is the `module_path`. `bc` is the `alias`. 
- `import` statement ends with `;`


## block
> A `block` starts with `{` and ends with `}`, and statemts are included between. A `block` can include other `blocks`.
> The variables inside a block will be clean when the block ends.


examples:
```
{

   var a = 1;
   a += 1;

   var b = 'add';


   {
     var a = 'ddd';
     assert( a == 'ddd');

     var c = 1;

   }
   // c is removed

   assert( a == 2);

}
```

 
## if
> When the `expression` value is `success`, the block statement afterwards is executed.
- if `expression` {
- elsif `expression` {

examples:
```
var a = 3;

if (a == 3) {
    assert(a == 3);
}

if (a == 3) {
    assert(a == 3);
} else {
    assert(false);
}


if (a == 3) {
    assert(a == 3);
} else if (a == 4) {
   assert(false);
} else if (a == 45) {
    assert(false);
} else {
    assert(false);
}
```

## switch

> When the `expression` value `equals` the case's value, the block statement afterwards of the case is executed.
- switch `expression` {
- '_', it is the `default` case. It is executed when the cases before are not equal.

examples:
```
switch (a) {

   case 1: {
     abc = 1;
   }

   case 2: {
     ddd = 333;
   }

   default: {
     cdd = 'ddd';

   }

}

```

## while
> When the `expression` value is success, the block statement afterwards is executed in loop. The loop will be break only when the `expression` value is failed.

- while `expression` {

```
var b = 0;
while (b < 100) {
    b++;
}

assert(b == 100);

var c = 0; 
while (c < 100) {
    c++;
    if (c > 10) {
        break;
    }
}

assert(c == 11);
```


## for
> for (`initialization`; `condition`; `afterthought`) {

- initialization: optinal. An expression (including assignment expressions) or variable declaration evaluated once before the loop begins. Typically used to initialize a counter variable. This expression may optionally declare new variables with var or var keywords.
- An expression to be evaluated before each loop iteration. If this expression evaluates success, statement is executed. If the expression evaluates failed, execution exits the loop and goes to the first statement after the for construct.
- afterthought: optional. An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.

examples:
```
for (var i = 0; i < 10; i++) {
  
   if (i < 4) {
     continue;
   }
   info('i:' + i);
}

```

```
var b = 0;
for (var i = 0; i < 10; i+=2) {
    b = i++;
}
assert(b == 9);
```

## assignment

> Assignment is for assign a value to a variable.

The value can come from:
- from a literal value such as `'abc'`, `123`, `tre`, `[1, 2, 3]`
- from an existing variable
- from an expression

```
import std.string as str;


var abc = 'abc';

var abcd = str.substring(abc, 1) + '/' + str.substring(abc, 2) ;


var a = 1;
var b = 2;
var c = 'abc';



var [i, j, k] = [1, 3, 5];

log('i:' + i + ',j:' + j + ',k:' + k);


var aa = [1, 3, 5];

var ii = undefined;
var jj = undefined;
var kk = undefined;

[ii, jj, kk] = [1, 3, 5];

log('ii:' + ii + ',jj:' + jj + ',kk:' + kk);

{
    assert(ii == 1);
    var ii = 100;
    assert(ii == 100);

    var ii = 'abc';
    assert(ii == 'abc');
}
```




```

## pause

> pause the program

``` wby

var i = 1;

i++;

if i > 10 {
   pause;
}


```



## function
> function `function_name`(`argument1`, `argument2`)
- the `function name` is an `identifier`.
- the `argument` is `identifier`.

> examples:
```
function plus1(value) {
   return value + 1;
}

function binary_plus(val1, val2) {
   return val1 + val2;
}

function binary_plus(...values) {
   //body of function
}
```
- `plus1` and `binary_plus` are `function name`.
- `(value)`, the `value` is `argument`.
- `(value1, value2)`, the `value1` and `value2` are `argument`.
- `(...values)`, `values` is a dynamic length variable which is an `array` value.



## function call
> calling a function by name and argument values.

``` wby
import std.array as arr;

var i = [1, 2, 3, 4];

var b = arr.filter(i, (a) => a < 3);

assert(b == [1, 2]);

```

## Closure
> A closure is a anonymous function inline declaration that references variables from parent blockes. The function may access and assign to the referenced variables; in this sense the function is "bound" to the variables.

```
(arg1, arg2) => {
   statement1;
   statement2;
  
}

```

```
import std.array as arr;

var max_price = 100;
var matched_orders = arr.filter(orders, (a) => {
   return a.amount < max_prie;
});
```


```
import std.array as arr;


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

var result = arr. filter(words, (word) => len(word) > 6);

assert(result == ["exuberant", "destruction", "present"]);

```

```
import std.array as arr;


var a = [{title: 'a', md:'1'}, {title:'b', md:'2'}];
for (var i = 0; i < len(a); i++) {
    var aaa =  arr.map(a, (ii) => {
        return {
            ...ii,
            index: i
        };
    });
    assert(aaa[0]['index'] == i);
    assert(aaa[1]['index'] == i);
}
```

## try catch finally throw
> The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct.

```

try {
    var a = 1;
    {
        var b = a;
        throw({message:'abc', code: 1025});
    }
    
} catch (e) {
    if (e['code'] == 1025) {
        console('this is my error:' + e['message']);
    }
} finally {
    console('this is finally.');
}
```

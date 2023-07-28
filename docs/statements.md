## 语句

### import

- import `abc.bcd` as `bc`;


`abc.bcd` 是模块路径. `bc` 是别名. 语句以`;`结尾

### 函数

```wby

fn plus1(value) {
  return value + 1;
}

fn binary_plus(val1, val2) {
  return val1 + val2;
}


```

### if

```wby
if a > 2 && b == 'a' {
  b = 1;
} elsif a > 3 {
  b = 2; 
} elsif a > 4 {
  b = 3; 
} else {
  b = 4;
}

```

### switch

```wby
switch a {

  case 1: {
    abc = 1;
  }

  case 2: {
    ddd = 333;
  }

  _: {
    cdd = 'ddd';

  }

}

```

### while

```wby

let value = 0;

while value < 10 {
  value++;
  if value > 4 {
    break;
  }

}

assert( value == 5);

```


### for

```wby

for (let i = 0; i < 10; i++) {
  
  if i < 4 {
    continue;
  }
  info('i:' + i);
}

```

### assignment

变量必须用关键字 `let` 先声明, 之后才能被使用

```wby
let i = 1;
i = i + 1;
i += 1;
i++;
i -= 1;
i *= 2;
i /= 2;

let [a, b] = [1, 2, 3];
assert(a == 1 && b == 2)

let [_, ...b] = [1, 2, 3];
assert( b == [2, 3]);

let name = 'Jack';
let age = 10;
let gender = 'male';

let s = {age, gender};

let {name: n, age: a} = { name, ...s};

assert(n == 'Jack' && a == 10);

```


### block

```wby

{

  let a = 1;
  a += 1;

  let b = 'add';


  {
    let a = 'ddd';
    assert( a == 'ddd');

    let c = 1;

  }
  // c is removed

  assert( a == 2);

}

```

### defer

```wby

import ex.mysql as mysql;



fn get_user_orders(usr){

  let conn = mysql.open(user, pwd, host);

  defer mysql.close(conn);

  let rows = mysql.query('select * from order where user=?', [usr]);

  return rows;
  
}


```

### stop

stop the program and exit with a value

```wby

let i = 1;

i++;

if (i > 10) {
  stop {};
}

info(i);

```

### call function

```wby
import std.array as arr;

let i = [1, 2, 3, 4];

let b = arr.filter(i, |a| -> {
  return a < 3;
});

assert(b == [1, 2]);

```

### Closure

```wby
|arg1, arg2| -> {
  statement1;
  statement2;
  
}

```

```wby

import std.array as arr;

fn listOrders(user, callback) {
  let orders = callback(user);
  return arr.filter(orders, |a| -> {
    return a.amount < 10;
  });

}

```


```wby
import std.array as arr;


let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let result = arr.filter(words, |word| => len(word) > 6);

assert(result == ["exuberant", "destruction", "present"]);

```



### try catch finally throw

```wby

try {

  throw(2048, 'example error');

} catch(err) {

  if (err.code == 2048) {
    assert(err.message == 'example error');
  }

} finally {

}


```


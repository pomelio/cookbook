---
id: std_global
---
# global
> Functions in the global module can be directly referenced without importing the module and indicating the module name

## assert(value)
> arbitrarily believed to be true
  - value: When the value of the parameter `value` is not true, an exception is thrown

example:
```
assert(type_of('abc') == 'string');
```


## type_of(value)
> return the string of a value type. 
  - value: the value to check the type. 
  - return: string value of could be `stirng`, `numnber`,`map`, `array`, `boolean`, `userdata`, `closure`

examples:
```
assert(type_of(|a|=> true) == 'closure');
assert(type_of(1) == 'number');
assert(type_of('abc') == 'string');
assert(type_of(true) == 'boolean');
assert(type_of([1, 'a', true]) == 'array');
assert(type_of({a: 1}) == 'map');
```

## keys(value)
> return an array of key of the `array` or `map` value
  - value: the value of `array` or `map`
  - return: array of keys.

examples:
```
let elements = ['Fire', 'Air', 'Water'];

assert(keys(elements) == [0, 1, 2]);

let obj = {
    a: 1,
    b: 2,
    c: 3
};

assert(keys(obj) == ['a', 'b', 'c']);
```

## throw(cause)
> throws an exception
  - cause: can be any type value.
  - return values:
    > it creates an error map value with key `cause` which is from throw function. The other key is `stackTrace` which is an array of call stack of functions.

examples:
```
try {
    let a = 1;
    {
        let b = a;
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

## error(message)
> log error messages
- message: string

## info(message)
> log error messages
- message: string

## warn(message)
> log error messages
- message: string


## len(value)
> return length of `string` or `array` value
- value: string | Array

examples:
```
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

assert(len(words) == 6);

let result = arr.filter(words, |word| => len(word) > 6);

assert(result == ["exuberant", "destruction", "present"]);
```

## parse_json(value)
> string to map value
- value: string
- return: map value

## stringify_json(value)
> map value to String
- value: map value
- return: string value

## is_equal(value1, value2, callback)
> Determine if two values are the same
- value1:
- value2:
- callback: closure of a comparator. Optional. |a, b| => boolean

examples:
```

import std.string as str;
import std.array as arr;

let fcon = is_equal(['a','b'], ['A','b'], |a, b| => {
    let ret = arr.every(a, |ele, idx| => {
        let ar = str.to_lower_case(a[idx]);
        let br = str.to_lower_case(b[idx]);
        return ar == br;
    });

    return ret;

});

assert(fcon);
```

## get\_defined\_variables()
> return a map value includes all variables available.
- return: map value




## dispatch(path, variables)
> dispatch the http requests to the specified page.
- path: the page path
- variables: the variables to be injected into the new page.
- return value:
  > no return

```
// index.wby

import ext.web as web;
import std.string as str;


let ppath = web.path();

if ppath == '/' || str.ends_with(ppath, '.md') {
  dispatch('/markdown', {});
} elsif str.starts_with(ppath, '/public') {
  web.send_file(ppath);
} else {
  web.set_status(404);
}

```


## fetch(method, url, data, headers, responseType)
> send a http request and get the response.
- method: http method. string type, value can be `delete, get, head, post, put, patch, common`
- url: the http url
- data: the json object. When the method value is `get`, the value is the params. When the method is `post`, the value is the post data object.
- headers: the http request headers.
- responseType: the respone type expected. The value can be `json, text, stream`

```
let url = 'https://cookbook.chatsarah.com/docs/side_bar.json';
let method = 'get';

let data = fetch(method, url, {}, {}, 'json');

assert(data['title'] == '🦘chatsarah.com');
```
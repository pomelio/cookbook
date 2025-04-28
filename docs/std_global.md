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
var elements = ['Fire', 'Air', 'Water'];

assert(keys(elements) == [0, 1, 2]);

var obj = {
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
    var a = 1;
    {
        var b = a;
        throw({message:'abc', code: 1025});
    }
    
} catch (e) {
    if (e['code'] == 1025) {
        log('this is my error:' + e['message']);
    }
} finally {
    log('this is finally.');
}
```


## log(message)
> log error messages to web debugger
- message: string


## len(value)
> return length of `string` or `array` value
- value: string | Array

examples:
```
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

assert(len(words) == 6);

var result = arr.filter(words, |word| => len(word) > 6);

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



## get\_defined\_variables()
> return a map value includes all variables available.
- return: map value




## fetch(method, url, data, headers, responseType)
> send a http request and get the response.
- method: http method. string type, value can be `devare, get, head, post, put, patch, common`
- url: the http url
- data: the json object. When the method value is `get`, the value is the params. When the method is `post`, the value is the post data object.
- headers: the http request headers.
- responseType: the respone type expected. The value can be `json, text, stream`

```
var url = 'https://cookbook.chatsarah.com/docs/side_bar.json';
var method = 'get';

var data = fetch(method, url, {}, {}, 'json');

assert(data['title'] == '🦘chatsarah.com');
```
## notify(value)
> send a push message to debugger to reminder.
- value: string message

## uuid()

## encode_uri_component(value)
> encodeURIComponent
- value: string to encode (url)

## encode_buffer(encoding)
> encode userdata `buff` to an string by the specified encoding

## base64_buffer(encoding);
> covert the base64 encoded string to a userdata buffer
- encoding: base64 string

## delete(map, key)
> delete map's entry by the specified `key`

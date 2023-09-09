---
id: ext_pathregexp
---
# PathRegexp
> import ext.PathRegexp as pexp;


## match(regex, path)
> Match the url path with a simple regex like pattern and return a `match result` userdata.

- values: regex pattern
- path: url path

- return value:
  > if success, it returns a match result userdata, otherwise it returns `false`

> The path regex examples:
```
/abc/:foo/:bar

```

## get\_param(match_result, key)
> get the key value from the match result value

- match_result: userdata return from the `match` when success
- key: url path variable name

- return value:
  > the value of name of the variable in the url path

> The path regex examples:
```
import ext.PathRegexp as preg;
import ext.web as web;

//   path: /abc/123
let ppath = web.path();
let match_result = preg.match('/abc/:name', ppath);
if match_result {
    let name = preg.get_param(match_result, 'name');
    assert(name == '123');
}

```

```
import ext.PathRegexp as pathRegexp;
import std.array as arr;

let result = pathRegexp.match('/abc(.)*', '/abc/1/a/b/c.wby?a=b');
if result {
  let ii = pathRegexp.get_param(result, 0);
  let pp = arr.join(ii, '');
  assert(pp == '/1/a/b/c.wby?a=b');
}
```

## get\_params(match_result)
> get the key value from the match result value

- match_result: userdata return from the `match` when success

- return value:
  > the map value of all variables in the url path.

> The path regex examples:
```
import ext.PathRegexp as preg;
import ext.web as web;

//   path: /abc/123
let ppath = web.path();
let match_result = preg.match('/abc/:name', ppath);
if match_result {
    let pvariables = preg.get_param(match_result);
    assert(pvariables['name'] == '123');
}

```




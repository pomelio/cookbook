---
id: expression
---
# expression

## unary expressions
```
 -1 
 -2
 !abc

```


## Binary expressions
```
5 * 6
4 / 2
1 + 2
a % 2
bc cd
a > 2
abc >= cde
cd < ef
a == 2
a == 'abc'
a != 2
a && b
a || b
a > 2 && b < 3
(a + 2) * 3 > a

```

## identifier

> Can be used as variable names, function names, module names, etc.

```
abc
a
_abc123
a1
```

## comments
> // this is a comment



## expression value of success
> The value of `expression` is `failed` when the boolean value is `false`, number value is `0`, string value is `''` or `undefined` or `null`, othewise the value is `success`.

failed expression value examples:
```
false
0
undefined
null
''
""
``
```

## equals operator
> The equals `==` operator can be used in different types of values

```
1 == 1
'abc' == 'abc'
true == true
[1,2] == [1,2]
{a: 'abc', b: 1, c:[1, 2]} == {a: 'abc', b: 1, c:[1, 2]}
```
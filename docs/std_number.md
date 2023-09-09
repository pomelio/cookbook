---
id: std_number
---
# number
Numbers are most commonly expressed in literal forms like 255 or 3.14159. The lexical grammar contains a more detailed reference.

> import std.number as num;

## EPSILON
> The Number.EPSILON static data property represents the difference between 1 and the smallest floating point number greater than 1.



## MAX_SAFE_INTEGER
> The Number.MAX_SAFE_INTEGER static data property represents the maximum safe integer in Language (253 – 1).



## MAX_VALUE
> The Number.MAX_VALUE static data property represents the maximum numeric value representable in Language.


## MIN_SAFE_INTEGER
> The Number.MIN_SAFE_INTEGER static data property represents the minimum safe integer in Language, or -(253 - 1).


## MIN_VALUE
> The Number.MIN_VALUE static data property represents the smallest positive numeric value representable in Language.


## NaN
> The Number.NaN static data property represents Not-A-Number, which is equivalent to NaN. For more information about the behaviors of NaN, see the description for the global property.


## NEGATIVE_INFINITY
> The Number.NEGATIVE_INFINITY static data property represents the negative Infinity value.


## POSITIVE_INFINITY
> The Number.POSITIVE_INFINITY static data property represents the positive Infinity value.


## is_finite(value)
> The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.

params:
- value: the number value

- return value: 
  > The boolean value true if the given value is a finite number. Otherwise false.

```
import std.number as number;

assert(number.is_finite(1 / 0) == false);
assert(number.is_finite(10 / 5));
assert(number.is_finite(0 / 0) == false);

```
## is_integer(value)
> The Number.isInteger() static method determines whether the passed value is an integer.
- value: the number value

- return value: 
  > The boolean value true if the given value is an integer. Otherwise false.

```
import std.number as number;

assert(number.is_integer(10) == true);
assert(number.is_integer(1.01) == false);
```
## is_nan(value)
> The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function.
- value: the number value

- return value: 
  > The boolean value true if the given value is a number with value NaN. Otherwise, false.

```
import std.number as number;


assert(number.is_nan(10) == false);
assert(number.is_nan(number.NaN) == true);
```

## is\_safe\_integer(value)
> The Number.isSafeInteger() static method determines whether the provided value is a number that is a safe integer.
- value: the number value

- return value: 
  > The boolean value true if the given value is a number that is a safe integer. Otherwise false.

```
import std.number as number;

assert(number.is_safe_integer(3.1) == false);
assert(number.is_safe_integer(number.NaN) == false);

```
## parse_float(value)
> The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
- value: the number value

- return value: 
  > A floating point number parsed from the given string. Or NaN when the first non-whitespace character cannot be converted to a number.
```
import std.number as number;


assert(number.parse_float("3.1") != number.NaN);
assert(number.parse_float("abc") == number.NaN);
```
## parse_int(value)
> The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.
- value: the number value

- return value
 > An integer parsed from the given string.
If the radix is smaller than 2 or bigger than 36, or the first non-whitespace character cannot be converted to a number, NaN is returned.
```
import std.number as number;

assert(number.parse_int("3") != number.NaN);
assert(number.parse_int("abc") == number.NaN);

```

## to_exponential(value)
> The toExponential() method returns a string representing the Number object in exponential notation.
- value: the number value

- return value:
  > A string representing the given Number object in exponential notation with one digit before the decimal point, rounded to fractionDigits digits after the decimal point.

```
import std.number as number;

assert(number.to_exponential(123456) == '1.23456e+5');
```

## to_fixed(value, digits)
> The toFixed() method formats a number using fixed-point notation.
- value: the number value
- digits:

- return value:
  > A string representing the given number using fixed-point notation.
```
import std.number as number;

assert(number.to_fixed(123.456, 2) == '123.46');
```
## to_precision(value, precision)
> The toPrecision() method returns a string representing the Number object to the specified precision.
- value: the number value
- precision: 

- return value:
  > A string representing a Number object in fixed-point or exponential notation rounded to precision significant digits. See the discussion of rounding in the description of the Number.prototype.toFixed() method, which also applies to toPrecision().

  If the precision argument is omitted, behaves as Number.prototype.toString(). If the precision argument is a non-integer value, it is rounded to the nearest integer.

```
import std.number as number;

assert(number.to_precision(123.456, 4) == '123.5');
```

## to_string(value, radix)
> The toString() method returns a string representing the specified number value.

params:
- value: the number value
- radix:

- return value:
  > A string representing the specified number value.


```
import std.number as number;

assert(number.to_string(123.456) == '123.456');
```
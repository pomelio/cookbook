
## number
> import std.number as num;

### EPSILON
> The Number.EPSILON static data property represents the difference between 1 and the smallest floating point number greater than 1.



### MAX_SAFE_INTEGER
> The Number.MAX_SAFE_INTEGER static data property represents the maximum safe integer in JavaScript (253 – 1).



### MAX_VALUE
> The Number.MAX_VALUE static data property represents the maximum numeric value representable in JavaScript.


### MIN_SAFE_INTEGER
> The Number.MIN_SAFE_INTEGER static data property represents the minimum safe integer in JavaScript, or -(253 - 1).


### MIN_VALUE
> The Number.MIN_VALUE static data property represents the smallest positive numeric value representable in JavaScript.


### NaN
> The Number.NaN static data property represents Not-A-Number, which is equivalent to NaN. For more information about the behaviors of NaN, see the description for the global property.


### NEGATIVE_INFINITY
> The Number.NEGATIVE_INFINITY static data property represents the negative Infinity value.


### POSITIVE_INFINITY
> The Number.POSITIVE_INFINITY static data property represents the positive Infinity value.


### is_finite(value)
> The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.
- value: the number value

- return value: 
  > The boolean value true if the given value is a finite number. Otherwise false.


### is_integer(value)
> The Number.isInteger() static method determines whether the passed value is an integer.
- value: the number value

- return value: 
  > The boolean value true if the given value is an integer. Otherwise false.


### is_nan(value)
> The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function.
- value: the number value

- return value: 
  > The boolean value true if the given value is a number with value NaN. Otherwise, false.


### is_safe_integer(value)
> The Number.isSafeInteger() static method determines whether the provided value is a number that is a safe integer.
- value: the number value

- return value: 
  > The boolean value true if the given value is a number that is a safe integer. Otherwise false.


### parse_float(value)
> The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
- value: the number value

- return value: 
  > A floating point number parsed from the given string. Or NaN when the first non-whitespace character cannot be converted to a number.

### parse_int(value)
> The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.
- value: the number value

- return value
 > An integer parsed from the given string.
If the radix is smaller than 2 or bigger than 36, or the first non-whitespace character cannot be converted to a number, NaN is returned.


### to_exponential(value)
> The toExponential() method returns a string representing the Number object in exponential notation.
- value: the number value

- return value:
  > A string representing the given Number object in exponential notation with one digit before the decimal point, rounded to fractionDigits digits after the decimal point.


### to_fixed(value, digits)
> The toFixed() method formats a number using fixed-point notation.
- value: the number value
- digits:

- return value:
  > A string representing the given number using fixed-point notation.

### to_precision(value, precision)
> The toPrecision() method returns a string representing the Number object to the specified precision.
- value: the number value
- precision: 

- return value:
  > A string representing a Number object in fixed-point or exponential notation rounded to precision significant digits. See the discussion of rounding in the description of the Number.prototype.toFixed() method, which also applies to toPrecision().

  If the precision argument is omitted, behaves as Number.prototype.toString(). If the precision argument is a non-integer value, it is rounded to the nearest integer.


### to_string(value, radix)
> The toString() method returns a string representing the specified number value.
- value: the number value
- radix:

- return value:
  > A string representing the specified number value.
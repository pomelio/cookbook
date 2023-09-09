---
id: std_math
---
# math
> import std.math as math;

## E
> The Math.E static data property represents Euler's number, the base of natural logarithms, e, which is approximately 2.718.

## LN10
> The Math.LN10 static data property represents the natural logarithm of 10, approximately 2.302.

## LN2
> The Math.LN2 static data property represents the natural logarithm of 2, approximately 0.693:

## LOG10E
> The Math.LOG10E static data property represents the base 10 logarithm of e, approximately 0.434.

## LOG2E
> The Math.LOG2E static data property represents the base 2 logarithm of e, approximately 1.442.

## PI
> The Math.PI static data property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.

## SQRT1_2
> The Math.SQRT1_2 static data property represents the square root of 1/2, which is approximately 0.707.

## SQRT2
> The Math.SQRT2 static data property represents the square root of 2, approximately 1.414.

## abs(value)
The Math.abs() static method returns the absolute value of a number.

params:
- value: number value

- return value:
  > The absolute value of x. If x is negative (including -0), returns -x. Otherwise, returns x. The result is therefore always a positive number or 0.

examples:
```
import std.math as math;

assert(math.abs((5 - 3)) == math.abs((3- 5)));
```
## acos(value)
> The Math.acos() static method returns the inverse cosine (in radians) of a number.

params:
- value: number value

- return value:
  > The inverse cosine (angle in radians between 0 and π, inclusive) of x. If x is less than -1 or greater than 1, returns NaN.


## acosh(value)
> The Math.acosh() static method returns the inverse hyperbolic cosine of a number.

params:
- value: number value

- return value:
  > The inverse hyperbolic cosine of x. If x is less than 1, returns NaN.

examples:
```
import std.math as math;
import std.number as number;

assert(math.acosh(0.999999999999) == number.NaN);
assert(math.acosh(2) - 1.3169578 < 0.01);

```
## asin(value)
> The Math.asin() static method returns the inverse sine (in radians) of a number.

params:
- value: number value

- return value:
  > The inverse sine (angle in radians between inclusive) of x. If x is less than -1 or greater than 1, returns NaN.

examples:
```
import std.math as math;
import std.number as number;


assert(math.asin(6 / 10) - 0.6435011 < 0.01);
assert(math.asin(5 / 3) == number.NaN);
```

## asinh(value)
> The Math.asinh() static method returns the inverse hyperbolic sine of a number.

params:
- value: number value

- return value:
  > The inverse hyperbolic sine of x.

examples:
```
import std.math as math;
import std.number as number;


assert(math.asinh(1) - 0.8813735 < 0.01);

assert(math.asinh(0) == 0);
```
## atan(value)
> The Math.atan() static method returns the inverse tangent (in radians) of a number

params:
- value: number value

- return value:
  > The inverse tangent (angle in radians between 

examples:
```
import std.math as math;
import std.number as number;

assert(math.atan(8 / 10) - 0.674740 < 0.01);

assert(math.atan(5 / 3) - 1.03037 < 0.01);
```
## atan2(value)
> The Math.atan2() static method returns the angle in the plane (in radians) between the positive x-axis and the ray from (0, 0) to the point (x, y), for Math.atan2(y, x).

params:
- value: number value

- return value:
  > The angle in radians (between -π and π, inclusive) between the positive x-axis and the ray from (0, 0) to the point (x, y).

examples:
```
import std.math as math;
import std.number as number;

assert(math.atan2(5, 5) * 180 /math.PI  == 45);
```

## atanh(value)
> The Math.atanh() static method returns the inverse hyperbolic tangent of a number.

params:
- value: number value

- return value:
  > The inverse hyperbolic tangent of x. If x is 1, returns Infinity. If x is -1, returns -Infinity. If x is less than -1 or greater than 1, returns NaN.

examples:
```
import std.math as math;
import std.number as number;

assert(math.atanh(0.5) - 0.54930614  < 0.01);
```
## cbrt(value)
> The Math.cbrt() static method returns the cube root of a number.

params:
- value: number value

- return value:
  > The cube root of x.

examples:
```
import std.math as math;
import std.number as number;

assert(math.cbrt(64) == 4);
```


## ceil(value)
> The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.

params:
- value: number value

- return value:
  > The smallest integer greater than or equal to x. It's the same value as -Math.floor(-x).

examples:
```
import std.math as math;
import std.number as number;

assert(math.ceil(0.95) == 1);
```

## clz32(value)
> The Math.clz32() static method returns the number of leading zero bits in the 32-bit binary representation of a number.

params:
- value: number value

- return value:
  > The number of leading zero bits in the 32-bit binary representation of x.

examples:
```
import std.math as math;
import std.number as number;

assert(math.clz32(1) == 31);
```

## cos(value)
> The Math.cos() static method returns the cosine of a number in radians.

params:
- value: number value

- return value:
  > The cosine of x, between -1 and 1, inclusive. If x is Infinity, -Infinity, or NaN, returns NaN.

examples:
```
import std.math as math;
import std.number as number;


assert(math.cos(math.PI) * 10 == -10);
```
## cosh(value)
> The Math.cosh() static method returns the hyperbolic cosine of a number.

params:
- value: number value

- return value:
  > The hyperbolic cosine of x.

examples:
```
import std.math as math;
import std.number as number;

assert(math.cosh(1) - 1.543080 < 0.01);
```
## exp(value)
> The Math.exp() static method returns e raised to the power of a number. 

params:
- value: number value

- return value:
  > A nonnegative number representing ex, where e is the base of the natural logarithm.

examples:
```
import std.math as math;
import std.number as number;


assert(math.exp(1) - 2.71828 < 0.01);
```
## expm1(value)
> The Math.expm1() static method returns e raised to the power of a number, subtracted by 1. 

params:
- value: number value

- return value:
  > A number representing ex - 1, where e is the base of the natural logarithm.

examples:
```
import std.math as math;
import std.number as number;


assert(math.expm1(1) - 1.7182 < 0.01);
```
## floor(value)
> The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

params:
- value: number value

- return value:
  > The largest integer smaller than or equal to x. It's the same value as -Math.ceil(-x).

examples:
```
import std.math as math;
import std.number as number;

assert(math.floor(5.95) == 5);
```
## fround(value)
> The Math.fround() static method returns the nearest 32-bit single precision float representation of a number.

params:
- value: number value

- return value:
  > The nearest 32-bit single precision float representation of x.

examples:
```
import std.math as math;
import std.number as number;


assert(math.fround(5.05) - 5.0500001 < 0.01);
```

## hypot(value)
> The Math.hypot() static method returns the square root of the sum of squares of its arguments.

params:
- value: number value

- return value:
  > The square root of the sum of squares of the given arguments. Returns Infinity if any of the arguments is ±Infinity. Otherwise, if at least one of the arguments is or is converted to NaN, returns NaN. Returns 0 if no arguments are given or all arguments are ±0.

examples:
```
import std.math as math;
import std.number as number;


assert(math.hypot(3, 4) == 5);
```
## imul(value)
> The Math.imul() static method returns the result of the C-like 32-bit multiplication of the two parameters.

params:
- value: number value

- return value:
  > The result of the C-like 32-bit multiplication of the given arguments.

examples:
```
import std.math as math;
import std.number as number;

assert(math.imul(3, 4) == 12);
```
## log(value)
> The Math.log() static method returns the natural logarithm (base e) of a number.

params:
- value: number value

- return value:
  > The natural logarithm (base e) of x. If x is ±0, returns -Infinity. If x < 0, returns NaN.

examples:
```
import std.math as math;
import std.number as number;

assert(math.log(8) / math.log(2) == 3);
```

## log10(value)
> The Math.log10() static method returns the base 10 logarithm of a number.
- value: number value

- return value:
  > The base 10 logarithm of x. If x < 0, returns NaN.

examples:
```
import std.math as math;
import std.number as number;

assert(math.log10(100000) == 5);
```
## log1p(value)
> The Math.log1p() static method returns the natural logarithm (base e) of 1 + x, where x is the argument. 

params:
- value: number value

- return value:
  > The natural logarithm (base e) of x + 1. If x is -1, returns -Infinity. If x < -1, returns NaN.

examples:
```
import std.math as math;
import std.number as number;

assert(math.log1p(1) - 0.693147 < 0.01);
```
## log2(value)
> he Math.log2() static method returns the base 2 logarithm of a number. 

params:
- value: number value

- return value:
  > The base 2 logarithm of x. If x < 0, returns NaN.

examples:
```
import std.math as math;
import std.number as number;

assert(math.log2(3) - 1.584962 < 0.01);
```

## max(values)
> The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.

params:
- value: number value

- return value:
  > The largest of the given numbers. Returns NaN if any of the parameters is or is converted into NaN. Returns -Infinity if no parameters are provided.

examples:
```
import std.math as math;
import std.number as number;

assert(math.max(3, 4, 5) == 5);
```

## min(values)
> The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.

params:
- value: number value

- return value:
  > The smallest of the given numbers. Returns NaN if any of the parameters is or is converted into NaN. Returns Infinity if no parameters are provided.

examples:
```
import std.math as math;
import std.number as number;

assert(math.min(3, 4, 5) == 3);
```

## pow(base, exponent)
> The Math.pow() static method returns the value of a base raised to a power. 

params:
- value: number value

- return value:
  > A number representing base taken to the power of exponent. Returns NaN in one of the following cases: 
  
    - exponent is NaN.
    - base is NaN and exponent is not 0.
    - base is ±1 and exponent is ±Infinity.
    - base < 0 and exponent is not an integer.

examples:
```
import std.math as math;
import std.number as number;

assert(math.pow(7, 3) == 343);
```

## random()
> The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

params:
- value: number value

- return value:
  >  A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).

examples:
```
import std.math as math;
import std.number as number;

assert(math.floor(math.random() * 3) <= 3);
```

## round(value)
> The Math.round() static method returns the value of a number rounded to the nearest integer.

params:
- value: number value

- return value:
  > The value of x rounded to the nearest integer.

examples:
```
import std.math as math;
import std.number as number;

assert(math.round(0.9) == 1);
```

## sign(value)
> The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.

params:
- value: number value

- return value:
  > A number representing the sign of x:

    - If x is positive, returns 1.
    - If x is negative, returns -1.
    - If x is positive zero, returns 0.
    - If x is negative zero, returns -0.
    - Otherwise, returns NaN.

examples:
```
import std.math as math;
import std.number as number;

assert(math.sign(0.9) == 1);
assert(math.sign(-3) == -1);
```

## sin(value)
> The Math.sin() static method returns the sine of a number in radians.

params:
- value: number value

- return value:
  > The sine of x, between -1 and 1, inclusive. If x is Infinity, -Infinity, or NaN, returns NaN.

examples:
```
import std.math as math;
import std.number as number;

assert(math.sin(1) * 10 - 8.414709 < 0.01);
```

## sinh(value)
> The Math.sinh() static method returns the hyperbolic sine of a number. 

params:
- value: number value

- return value:
  > The hyperbolic sine of x.

examples:
```
import std.math as math;
import std.number as number;


assert(math.sinh(1) - 1.175201 < 0.01);
```

## sqrt(value)
> The Math.sqrt() static method returns the square root of a number. 

params:
- value: number value

- return value:
  > The square root of x, a nonnegative number. If x < 0, returns NaN.

examples:
```
import std.math as math;
import std.number as number;

assert(math.sqrt((3 * 3  + 4 * 4)) == 5);
```

## tan(value)
>The Math.tan() static method returns the tangent of a number in radians.

params:
- value: number value

- return value:
  > The tangent of x. If x is Infinity, -Infinity, or NaN, returns NaN.

examples:
```
import std.math as math;
import std.number as number;

assert(math.tan(45 * math.PI / 180) - 0.999 < 0.01);
```

## tanh(value)
> The Math.tanh() static method returns the hyperbolic tangent of a number.

params:
- value: number value

- return value:
  > The hyperbolic tangent of x.

examples:
```
import std.math as math;
import std.number as number;

assert(math.tanh(-1)  + 0.7615941 < 0.01);
```
## trunc(value)
The Math.trunc() static method returns the integer part of a number by removing any fractional digits.

params:
- value: number value

- return value:
  > The integer part of x.

example:
```
import std.math as math;
import std.number as number;

assert(math.trunc(13.37) == 13);
```
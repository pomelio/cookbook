
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
- value: number value

- return value:
  > The absolute value of x. If x is negative (including -0), returns -x. Otherwise, returns x. The result is therefore always a positive number or 0.

## acos(value)
> The Math.acos() static method returns the inverse cosine (in radians) of a number.
- value: number value

- return value:
  > The inverse cosine (angle in radians between 0 and π, inclusive) of x. If x is less than -1 or greater than 1, returns NaN.


## acosh(value)
> The Math.acosh() static method returns the inverse hyperbolic cosine of a number.
- value: number value

- return value:
  > The inverse hyperbolic cosine of x. If x is less than 1, returns NaN.


## asin(value)
> The Math.asin() static method returns the inverse sine (in radians) of a number.
- value: number value

- return value:
  > The inverse sine (angle in radians between inclusive) of x. If x is less than -1 or greater than 1, returns NaN.


## asinh(value)
> The Math.asinh() static method returns the inverse hyperbolic sine of a number.
- value: number value

- return value:
  > The inverse hyperbolic sine of x.


## atan(value)
> The Math.atan() static method returns the inverse tangent (in radians) of a number
- value: number value

- return value:
  > The inverse tangent (angle in radians between 

## atan2(value)
> The Math.atan2() static method returns the angle in the plane (in radians) between the positive x-axis and the ray from (0, 0) to the point (x, y), for Math.atan2(y, x).
- value: number value

- return value:
  > The angle in radians (between -π and π, inclusive) between the positive x-axis and the ray from (0, 0) to the point (x, y).


## atanh(value)
> The Math.atanh() static method returns the inverse hyperbolic tangent of a number.
- value: number value

- return value:
  > The inverse hyperbolic tangent of x. If x is 1, returns Infinity. If x is -1, returns -Infinity. If x is less than -1 or greater than 1, returns NaN.


## cbrt(value)
> The Math.cbrt() static method returns the cube root of a number.
- value: number value

- return value:
  > The cube root of x.



## ceil(value)
> The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
- value: number value

- return value:
  > The smallest integer greater than or equal to x. It's the same value as -Math.floor(-x).



## clz32(value)
> The Math.clz32() static method returns the number of leading zero bits in the 32-bit binary representation of a number.
- value: number value

- return value:
  > The number of leading zero bits in the 32-bit binary representation of x.


## cos(value)
> The Math.cos() static method returns the cosine of a number in radians.
- value: number value

- return value:
  > The cosine of x, between -1 and 1, inclusive. If x is Infinity, -Infinity, or NaN, returns NaN.

## cosh(value)
> The Math.cosh() static method returns the hyperbolic cosine of a number.
- value: number value

- return value:
  > The hyperbolic cosine of x.


## exp(value)
> The Math.exp() static method returns e raised to the power of a number. 
- value: number value

- return value:
  > A nonnegative number representing ex, where e is the base of the natural logarithm.

## expm1(value)
> The Math.expm1() static method returns e raised to the power of a number, subtracted by 1. 
- value: number value

- return value:
  > A number representing ex - 1, where e is the base of the natural logarithm.

## floor(value)
> The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
- value: number value

- return value:
  > The largest integer smaller than or equal to x. It's the same value as -Math.ceil(-x).

## fround(value)
> The Math.fround() static method returns the nearest 32-bit single precision float representation of a number.
- value: number value

- return value:
  > The nearest 32-bit single precision float representation of x.


## hypot(value)
> The Math.hypot() static method returns the square root of the sum of squares of its arguments.
- value: number value

- return value:
  > The square root of the sum of squares of the given arguments. Returns Infinity if any of the arguments is ±Infinity. Otherwise, if at least one of the arguments is or is converted to NaN, returns NaN. Returns 0 if no arguments are given or all arguments are ±0.

## imul(value)
> The Math.imul() static method returns the result of the C-like 32-bit multiplication of the two parameters.
- value: number value

- return value:
  > The result of the C-like 32-bit multiplication of the given arguments.

## log(value)
> The Math.log() static method returns the natural logarithm (base e) of a number.
- value: number value

- return value:
  > The natural logarithm (base e) of x. If x is ±0, returns -Infinity. If x < 0, returns NaN.


## log10(value)
> The Math.log10() static method returns the base 10 logarithm of a number.
- value: number value

- return value:
  > The base 10 logarithm of x. If x < 0, returns NaN.

## log1p(value)
> The Math.log1p() static method returns the natural logarithm (base e) of 1 + x, where x is the argument. 
- value: number value

- return value:
  > The natural logarithm (base e) of x + 1. If x is -1, returns -Infinity. If x < -1, returns NaN.

## log2(value)
> he Math.log2() static method returns the base 2 logarithm of a number. 
- value: number value

- return value:
  > The base 2 logarithm of x. If x < 0, returns NaN.


## max(values)
> The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
- value: number value

- return value:
  > The largest of the given numbers. Returns NaN if any of the parameters is or is converted into NaN. Returns -Infinity if no parameters are provided.


## min(values)
> The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
- value: number value

- return value:
  > The smallest of the given numbers. Returns NaN if any of the parameters is or is converted into NaN. Returns Infinity if no parameters are provided.


## pow(base, exponent)
> The Math.pow() static method returns the value of a base raised to a power. 
- value: number value

- return value:
  > A number representing base taken to the power of exponent. Returns NaN in one of the following cases: 
  
    - exponent is NaN.
    - base is NaN and exponent is not 0.
    - base is ±1 and exponent is ±Infinity.
    - base < 0 and exponent is not an integer.


## random()
> The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
- value: number value

- return value:
  >  A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).


## round(value)
> The Math.round() static method returns the value of a number rounded to the nearest integer.
- value: number value

- return value:
  > The value of x rounded to the nearest integer.


## sign(value)
> The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.
- value: number value

- return value:
  > A number representing the sign of x:

    - If x is positive, returns 1.
    - If x is negative, returns -1.
    - If x is positive zero, returns 0.
    - If x is negative zero, returns -0.
    - Otherwise, returns NaN.


## sin(value)
> The Math.sin() static method returns the sine of a number in radians.
- value: number value

- return value:
  > The sine of x, between -1 and 1, inclusive. If x is Infinity, -Infinity, or NaN, returns NaN.


## sinh(value)
> The Math.sinh() static method returns the hyperbolic sine of a number. 
- value: number value

- return value:
  > The hyperbolic sine of x.


## sqrt(value)
> The Math.sqrt() static method returns the square root of a number. 
- value: number value

- return value:
  > The square root of x, a nonnegative number. If x < 0, returns NaN.


## tan(value)
>The Math.tan() static method returns the tangent of a number in radians.
- value: number value

- return value:
  > The tangent of x. If x is Infinity, -Infinity, or NaN, returns NaN.


## tanh(value)
> The Math.tanh() static method returns the hyperbolic tangent of a number.
- value: number value

- return value:
  > The hyperbolic tangent of x.

## trunc(value)
The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
- value: number value

- return value:
  > The integer part of x.

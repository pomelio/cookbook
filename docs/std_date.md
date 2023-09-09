---
id: std_date
---
# date
Date represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch)
> import std.date as date;

## from_number(value)
> create a userdata Date value from a number

params:
- value: milliseconds from the unix start time.

- return value:
  > return the userdata time object

## from_string(value, fmt, timezone)
> create a userdata Date value from a string

params:
- value: the string of a time to parse.
- fmt: date format
- timezone: optional. the specified timezone

- return value:
  > return the userdata time object


## value_of(value)
> is used to get the number of milliseconds since the Unix Epoch. Basically, Unix time is a system for describing a point in time. 

params:
- value: userdata time value

- return value:
  > return the date object

```
import std.date as date;

let instance = date.from_number();

assert(date.value_of(instance) > 0);
```

## format(value, fmt, timezone)
> create date string value of the timezone
- value: userdata time value
- fmt: date format
- timezone: optional. the specified timezone


- return value:
  > return the date string

```
import std.date as date;


let instance = date.from_string('25-12-1995', 'DD-MM-YYYY');

assert(date.format(instance,  'YYYY-MM-DD', 'Australia/Sydney') == '1995-12-25');
```

## milliseconds(value, timezone)
> get the milliseconds of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > milliseconds part of the time

```
import std.date as date;

let instance = date.from_string('25-12-1995 10:20:30 666', 'DD-MM-YYYY HH:mm:ss SSSS');

assert(date.milliseconds(instance) == 666);
assert(date.seconds(instance) == 30);
assert(date.minutes(instance) == 20);
assert(date.hours(instance) == 10);
assert(date.date(instance) == 25);
assert(date.month(instance) == 11);
assert(date.year(instance) == 1995);

assert(date.day_of_year(instance) == 359);
//assert(date.week_year(instance) == 1995);
assert(date.weeks_in_year(instance) == 52);
assert(date.weeks(instance) == 52);
assert(date.quarter(instance) == 4);
```
## seconds(value, timezone)
> get the seconds of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > seconds part of the time

## minutes(value, timezone)
> get the minutes of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > minutes part of the time

## hours(value, timezone)
> get the hours of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > hours part of the time

## dates(value, timezone)
> get the dates of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > dates part of the time

## days(value, timezone)
> get the days of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > days part of the time

## day_of_year(value, timezone)
> get the day of year of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > day of year of the time

## weeks(value, timezone)
> get the weeks of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > weeks part of the time

## months(value, timezone)
> get the months of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > months part of the time

## quarter(value, timezone)
> get the quarter of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > quarter part of the time

## years(value, timezone)
> get the years of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > years part of the time


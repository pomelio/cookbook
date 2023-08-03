
# date
> import std.date as date;

## from_number(value)
> create a userdata time object from a number
- value: milliseconds from the unix start time.

- return value:
  > return the userdata time object

## from_string(value, fmt, timezone)
> create a userdata time object from a string
- value: the string of a time to parse.
- fmt: date format
- timezone: optional. the specified timezone

- return value:
  > return the userdata time object


## value_of(value)
> create a date value from userdata time
- value: userdata time value

- return value:
  > return the date object


## format(value, fmt, timezone)
> create date string value of the timezone
- value: userdata time value
- fmt: date format
- timezone: optional. the specified timezone


- return value:
  > return the date string

## milliseconds(value, timezone)
> get the milliseconds of the userdata time object
- value: userdata time value
- timezone: optional. the specified timezone

- return value:
  > milliseconds part of the time

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


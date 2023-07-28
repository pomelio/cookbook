### global
> Functions in the global module can be directly referenced without importing the module and indicating the module name

#### assert(value)
> arbitrarily believed to be true

   - When the value of the parameter `value` is not true, an exception is thrown


#### throw(code, message)
> throws an exception
   - code: number. The value must be greater than 10240
   - message: string

### error(message)
> log error messages
- message: string

### info(message)
> log error messages
- message: string

### warn(message)
> log error messages
- message: string


###len(value)
> get length
- value: string | Array


### parse_json(value)
> string to JSON
- value: string

### stringify_json(value)
> JSON to String
- value: hash

### is_equal(value1, value2, callback)
> Determine if two values are the same
- value1:
- value2:
- callback: optional. |a, b| -> boolean
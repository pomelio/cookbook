
## global
> Functions in the global module can be directly referenced without importing the module and indicating the module name

### assert(value)
> arbitrarily believed to be true
  - value: When the value of the parameter `value` is not true, an exception is thrown

### dispatch(page)
> dispatch the http request to the new page
  - page: this is the path of the page. The page should be saved under the `/bin` folder.

### type_of(value)
> return the string of a value type. 
  - value: the value to check the type. 
  - return: string value of could be `stirng`, `numnber`,`map`, `array`, `boolean`, `userdata`, `closure`

### keys(value)
> return an array of key of the `array` or `map` value
  - value: the value of `array` or `map`
  - return: array of keys.

### throw(cause)
> throws an exception
   - cause: can be map or string or the other types

### error(message)
> log error messages
- message: string

### info(message)
> log error messages
- message: string

### warn(message)
> log error messages
- message: string


### len(value)
> return length of `string` or `array` value
- value: string | Array


### parse_json(value)
> string to map value
- value: string
- return: map value

### stringify_json(value)
> map value to String
- value: map value
- return: string value

### is_equal(value1, value2, callback)
> Determine if two values are the same
- value1:
- value2:
- callback: closure of a comparator. Optional. |a, b| => boolean

### get_defined_variables()
> return a map value includes all variables available.
- return: map value

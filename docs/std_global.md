
### global
> global模块中的函数可以直接被引用,不需要导入模块和标明模块名称

#### assert(value)
> 武断认为真

  - 当参数`value`值不为真的时候,抛出异常


#### throw(code, message)
> 抛出异常
  - code: number. 数值必须大于10240
  - message: string

### error(message)
> 记录错误消息
- message: string

### info(message)
> 记录错误消息
- message: string

### warn(message)
> 记录错误消息
- message: string


### len(value)
> 获取长度
- value: string | Array


### parse_json(value)
> 字符串转换为JSON
- value: string

### stringify_json(value)
> JSON转换为字符串
- value: hash

### is_equal(value1, value2, callback)
> 判断两个值是否相同
- value1: 
- value2:
- callback: optional. |a, b| -> boolean

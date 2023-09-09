---
id: ext_squel
---
# squel
> import ext.squel as sql;

## select()
> create a `select` userdata

- return value:
  > return the created `select` userdata

## field(select, field, alias)
> set a field in the `select` userdata

- params:
  - select: the `select` userdata
  - field: the `field` column name to be returned from the select statement.
  - alias: optional. The alias name of the `field`
  `
- return value:
  > return the created `select` userdata

## from(select, from, alias)
> set the `from` of the `select` userdata

- params:
  - select: the `select` userdata
  - from: the `from`
  - alias: optional. The alias name of the `table` name
  `
- return value:
  > return the created `select` userdata

## group(select, value)
> set the `group` of the `select` userdata

- params:
  - select: the `select` userdata
  - value: the `group by` column name
  
- return value:
  > return the created `select` userdata

## join(select, value, alias, on)
> set the `join` of the `select` userdata

- params:
  - select: the `select` userdata
  - value: the join `table` name
  - alias: optional. The join `table` alias
  - on: optional. The join `on` column name
  
- return value:
  > return the created `select` userdata

## outer_join(select, value, alias, on)
> set the `outter join` of the `select` userdata

- params:
  - select: the `select` userdata
  - value: the join `table` name
  - alias: optional. The join `table` alias
  - on: optional. The join `on` column name
  
- return value:
  > return the created `select` userdata

## left_join(select, value, alias, on)
> set the `left join` of the `select` userdata

- params:
  - select: the `select` userdata
  - value: the join `table` name
  - alias: optional. The join `table` alias
  - on: optional. The join `on` column name
  
- return value:
  > return the created `select` userdata

## right_join(select, value, alias, on)
> set the `right join` of the `select` userdata

- params:
  - select: the `select` userdata
  - value: the join `table` name
  - alias: optional. The join `table` alias
  - on: optional. The join `on` column name
  
- return value:
  > return the created `select` userdata

## where(select, value, ...params)
> set the `where` of the select

- params:
  - select: the `select` userdata
  - value: the where criteria.
  - params: optional. The values of the where criteria parameters
  
- return value:
  > return the created `select` userdata

## order(select, value, desc)
> set the `order by` of the select

- params:
  - select: the `select` userdata
  - value: the `order by` column.
  - desc: optional. boolean of asc.
  
- return value:
  > return the created `select` userdata

## limit(select, value)
> set to return limited number of rows

- params:
  - select: the `select` userdata
  - value: the number of rows.
  
- return value:
  > return the created `select` userdata

## offset(select, value)
> set to return  of rows offset

- params:
  - select: the `select` userdata
  - value: the position of offset of rows.
  
- return value:
  > return the created `select` userdata

## update();
> create an `update` userdata

- return value:
  > return the created `update` userdata

## table(update, value)
> set to update  table name

- params:
  - update: the `update` userdata
  - value: the update table name.
  
- return value:
  > return the created `update` userdata

## set(update, name, value)
> set to update  table name column name and value

- params:
  - update: the `update` userdata
  - name: the update column name
  - value: the update column value
  
- return value:
  > return the created `update` userdata

## delete()
> create an `delete` userdata

- return value:
  > return the created `delete` userdata

## insert()
> create an `insert` userdata

- return value:
  > return the created `insert` userdata

## into(insert, value)
> set the insert into table name

- params:
  - insert: the `insert` userdata
  - value: the insert table name
  
- return value:
  > return the created `insert` userdata

## get_sql_text(statement)
> return a sql text.

- params:
  - statement: the `insert/delete/update/select` userdata
  
- return value:
  > return the sql string

## get_sql_values(statement)
> return a sql prepared statment values.

- params:
  - statement: the `insert/delete/update/select` userdata
  
- return value:
  > return the sql prepared statement values

## to_string(statement)
> return a string of the sql

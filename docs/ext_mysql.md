
---
id: ext_mysql
---
# mysql
> import ext.mysql as mysql;


## new_connection(config)
>  create a mysql `connection` userdata

-params:
  - config: the map value of mysql config options
      > When establishing a connection, you can set the following options:

        - host: The hostname of the database you are connecting to. (Default: localhost)
        - port: The port number to connect to. (Default: 3306)
        - user: The MySQL user to authenticate as.
        - password: The password of that MySQL user.
        - database: Name of the database to use for this connection (Optional).
        - charset: The charset for the connection. This is called "collation" in the SQL-level of MySQL (like       utf8_general_ci). If a SQL-level charset is specified (like utf8mb4) then the default collation for that charset is used. (Default: 'UTF8_GENERAL_CI')
        - timezone: The timezone configured on the MySQL server. This is used to type cast server date/time values to Language Date object and vice versa. This can be 'local', 'Z', or an offset in the form +HH:MM or -HH:MM. (Default: 'local')
        - connectTimeout: The milliseconds before a timeout occurs during the initial connection to the MySQL server. (Default: 10000)
        - stringifyObjects: Stringify objects instead of converting to values. (Default: false)
        insecureAuth: Allow connecting to MySQL instances that ask for the old (insecure) authentication method. (Default: false)
        - typeCast: Determines if column values should be converted to native Language types. (Default: true)
        queryFormat: A custom query format function. See Custom format.
        supportBigNumbers: When dealing with big numbers (BIGINT and DECIMAL columns) in the database, you should enable this option (Default: false).
        - bigNumberStrings: Enabling both supportBigNumbers and bigNumberStrings forces big numbers (BIGINT and DECIMAL columns) to be always returned as Language String objects (Default: false). Enabling supportBigNumbers but leaving bigNumberStrings disabled will return big numbers as String objects only when they cannot be accurately represented with [Language Number objects] (https://tc39.es/ecma262/#sec-ecmascript-language-types-number-type) (which happens when they exceed the [-2^53, +2^53] range), otherwise they will be returned as Number objects. This option is ignored if supportBigNumbers is disabled.
        dateStrings: Force date types (TIMESTAMP, DATETIME, DATE) to be returned as strings rather than inflated into Language Date objects. Can be true/false or an array of type names to keep as strings. (Default: false)
        - multipleStatements: Allow multiple mysql statements per query. Be careful with this, it could increase the scope of SQL injection attacks. (Default: false)
        flags: List of connection flags to use other than the default ones. It is also possible to blacklist default ones. For more information, check Connection Flags.
        

- return value:
  > the mysql connection userdata

## query(conn, sql, params)
  > execute query

  - params:
    - conn: mysql connection userdata
    - sql: query statement
    - params: prepared statement param values

  - return value:
    > return statement executed result


insert examples:
```
import ext.mysql as mysql;


let conn = mysql.new_connection({
    host: 'localhost',
    user: 'root',
    password : 'sds12#22',
    database : 'wby'
});

defer mysql.end(conn);

let sql = "delete from project where id=?";
let result = mysql.query(conn, sql, ['090bbe23e3cfa94876e2e0ea3ab8202f']);
assert(1 == result['affectedRows']);

sql = "insert into project (id, accountID, createTime, name) values ('090bbe23e3cfa94876e2e0ea3ab8202f', '090bbe23e3cfa94876e2e0ea3ab8202f', 1686303145750, 'test')";

result = mysql.query(conn, sql);
assert(1 == result['affectedRows']);
```

select examples:
```
import ext.mysql as mysql;

info('mysql.select -> start');

let conn = mysql.new_connection({
    host: 'localhost',
    user: 'root',
    password : 'sds12#22',
    database : 'wby'
});

defer mysql.end(conn);

let sql = "delete from project where id=?";
let result = mysql.query(conn, sql, ['090bbe23e3cfa94876e2e0ea3ab8202f']);

sql = "insert into project (id, accountID, createTime, name) values ('090bbe23e3cfa94876e2e0ea3ab8202f', '090bbe23e3cfa94876e2e0ea3ab8202f', 1686303145750, 'test')";

result = mysql.query(conn, sql);
assert(1 == result['affectedRows']);

sql = "select * from project where id=?";

let rows = mysql.query(conn, sql, ['090bbe23e3cfa94876e2e0ea3ab8202f']);

let fid = rows[0];
assert(fid['id'] == '090bbe23e3cfa94876e2e0ea3ab8202f');

```

## begin_transaction(conn)
  > begin a transaction.

  - params:
    - conn: mysql connection userdata

## commit(conn)
  > commit a transaction.

  - params:
    - conn: mysql connection userdata

## rollback(conn)
  > rollback a transaction.

  - params:
    - conn: mysql connection userdata

## end(conn)
  > There are two ways to end a connection. Terminating a connection gracefully is done by calling the `end` method:
  > This will make sure all previously enqueued queries are still before sending a COM_QUIT packet to the MySQL server. If a fatal error occurs before the COM_QUIT packet can be sent, an err argument will be provided to the callback, but the connection will be terminated regardless of that.

  
  - params:
    - conn: mysql connection userdata

## destroy(conn)
  > An alternative way to end the connection is to call the `destroy`` method. This will cause an immediate termination of the underlying socket. Additionally `destroy` guarantees that no more events or callbacks will be triggered for the connection

  - params:
    - conn: mysql connection userdata

## escape(conn, value)
  > escape a value for a prepared statement

  - params:
    - conn: mysql connection userdata
    - value: escaped value

## format(conn, sql, values)
  > prepare a sql statement with values

  - params:
    - conn: mysql connection userdata
    - sql: query
    - values: prepared values
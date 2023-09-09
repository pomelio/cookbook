---
id: std_string
---
# string

Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the index_of() method, or extracting substrings with the substring() method.

> import std.string as str;


## at(value, index)
> The `at` method takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.

params:
- value: the string value
- index: The index (position) of the string character to be returned. Supports relative indexing from the end of the string when passed a negative index; i.e. if a negative number is used, the character returned will be found by counting back from the end of the string.

- return value: 
> A String consisting of the single UTF-16 code unit located at the specified position. Returns undefined if the given index can not be found.
```
import std.string as str;

assert(str.at('The quick brown fox jumps over the lazy dog.', 5) == 'u');
assert(str.at('The quick brown fox jumps over the lazy dog.', -4) == 'd');

```
## char_at(value, index)
> The `char_at` method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

params:
- value: the string value
- index: Zero-based index of the character to be returned. Converted to an integer — undefined is converted to 0.

- return value: 
> A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of the range of 0 – str.length - 1, charAt() returns an empty string.
```
import std.string as str;

assert(str.char_at('The quick brown fox jumps over the lazy dog.', 4) == 'q');


```
## char\_code\_at(value, index)
> The `char_code_at` method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

params:
- value: the string value
- index: Zero-based index of the character to be returned. Converted to an integer — undefined is converted to 0.

- return value: 
> An integer between 0 and 65535 representing the UTF-16 code unit value of the character at the specified index. If index is out of range of 0 – str.length - 1, charCodeAt() returns NaN.
```
import std.string as str;

assert(str.char_code_at('The quick brown fox jumps over the lazy dog.', 4) == 113);
```

## code\_point\_at(value, pos)
> The `code_point_at` method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.
- value: the string value
- pos: Zero-based index of the character to be returned. Converted to an integer — undefined is converted to 0.

- return value: A non-negative integer representing the code point value of the character at the given index.
  - If index is out of the range of 0 – str.length - 1, codePointAt() returns undefined.
  - If the element at index is a UTF-16 high surrogate, returns the code point of the surrogate pair.
  - If the element at index is a UTF-16 low surrogate, returns only the low surrogate code point.

```
import std.string as str;

assert(str.code_point_at('☃★♲', 1) == 9733);
```
## concat(value, ...values)
> The `concat` method concatenates the string arguments to the calling string and returns a new string.

params:
- value: the string value
- values: One or more strings to concatenate to str.

- return value: 
> A new string containing the combined text of the strings provided.
```
import std.array as arr;

let a = [1, 2];
let e = arr.concat(a, [3, '444'], [5]);

assert(e == [1, 2, 3, '444', 5]);
```
## ends_with(value, search, pos)
> The `ends_with` method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

params:
- value: the string value
- search: The characters to be searched for at the end of str. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes endsWith() to search for the string "undefined", which is rarely what you want.
- pos: optional. The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length.

- return value: 
> true if the given characters are found at the end of the string, including when searchString is an empty string; otherwise, false.
```
import std.string as str;

assert(str.ends_with('Cats are the best!', 'best!'));
assert(str.ends_with('Cats are the best!', 'best!', 17));
assert(str.ends_with('Is this a question?', 'question') == false);
```
## from\_char\_code(value, ...codes)
> The `from_char_code` static method returns a string created from the specified sequence of UTF-16 code units.

params:
- value: the string value
- codes: A number between 0 and 65535 (0xFFFF) representing a UTF-16 code unit. Numbers greater than 0xFFFF are truncated to the last 16 bits. No validity checks are performed.

- return value: 
> A string of length N consisting of the N specified UTF-16 code units.
```
import std.string as str;

assert(str.from_char_code(189, 43, 190, 61) == '½+¾=');

```

## from\_code\_point(value, ...codes)
> The `from_code_point` static method returns a string created from the specified sequence of code points.

params:
- value: the string value
- codes: An integer between 0 and 0x10FFFF (inclusive) representing a Unicode code point.

- return value: 
> A string created by using the specified sequence of code points.

```
import std.string as str;

assert(str.from_code_point(9731, 9733, 9842, 0x2F804) == '☃★♲你');

```

## includes(value, search, pos)
> The `includes` method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

params:
- value: the string value
- serach: A string to be searched for within str. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes includes() to search for the string "undefined", which is rarely what you want.
- pos: optional. The position within the string at which to begin searching for searchString. (Defaults to 0.)

- return value: 
> true if the search string is found anywhere within the given string, including when searchString is an empty string; otherwise, false.

```
import std.string as str;

assert(str.includes('The quick brown fox jumps over the lazy dog.', 'fox') == true);

```

## index_of(value, search, pos)
> The `index_of` method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

params:
- value: the string value
- search: Substring to search for. All values are coerced to strings, so omitting it or passing undefined causes indexOf() to search for the string "undefined", which is rarely what you want.
- pos: optional. The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0. If position is greater than the length of the calling string, the method doesn't search the calling string at all. If position is less than zero, the method behaves as it would if position were 0.
  - 'hello world hello'.indexOf('o', -5) returns 4 — because it causes the method to behave as if the second argument were 0, and the first occurrence of o at a position greater or equal to 0 is at position 4.
  - 'hello world hello'.indexOf('world', 12) returns -1 — because, while it's true the substring world occurs at index 6, that position is not greater than or equal to 12.
  - 'hello world hello'.indexOf('o', 99) returns -1 — because 99 is greater than the length of hello world hello, which causes the method to not search the string at all.

- return value: 
> The index of the first occurrence of searchString found, or -1 if not found.

```
import std.string as str;

assert(str.index_of('The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?', 'dog') == 40);
assert(str.index_of('The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?', 'dog', 41) == 52);

```

## is\_well\_formed(value)
> The `is_well_formed` method of String values returns a boolean indicating whether this string contains any lone surrogates.

params:
- value: the string value


- return value:
> Returns true if this string does not contain any lone surrogates, false otherwise.

```
import std.string as str;

assert(str.is_well_formed("ab\uD800") == false);
```

## last\_index\_of(value, search, pos)
> The `last_index_of` method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

params:
- value: the string value
- search: Substring to search for. All values are coerced to strings, so omitting it or passing undefined causes lastIndexOf() to search for the string "undefined", which is rarely what you want.
- pos: optional. The method returns the index of the last occurrence of the specified substring at a position less than or equal to position, which defaults to +Infinity. If position is greater than the length of the calling string, the method searches the entire string. If position is less than 0, the behavior is the same as for 0 — that is, the method looks for the specified substring only at index 0.
  - 'hello world hello'.lastIndexOf('world', 4) returns -1 — because, while the substring world does occurs at index 6, that position is not less than or equal to 4.
  - 'hello world hello'.lastIndexOf('hello', 99) returns 12 — because the last occurrence of hello at a position less than or equal to 99 is at position 12.
  - 'hello world hello'.lastIndexOf('hello', 0) and 'hello world hello'.lastIndexOf('hello', -5) both return 0 — because both cause the method to only look for hello at index 0.

- return value: 
> The index of the last occurrence of searchString found, or -1 if not found.

```
import std.string as str;


assert(str.last_index_of('The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?', 'dog') == 52);
```
## match(value, regex)
> The `match` method retrieves the result of matching a string against a regular expression.
- value: the string value
- regex: A regular expression object, or any object that has a Symbol.match method.

  - If regexp is not a RegExp object and does not have a Symbol.match method, it is implicitly converted to a RegExp by using new RegExp(regexp).

  - If you don't give any parameter and use the match() method directly, you will get an Array with an empty string: [""], because this is equivalent to match(/(?:)/).



- return value: An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
  - If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups are not included.
  - If the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, match() will return the same result as RegExp.prototype.exec() (an array with some extra properties).

```
import std.string as str;

assert(str.match('The quick brown fox jumps over the lazy dog. It barked.', '[A-Z]', 'g') == ["T", "I"]);

```
## match_all(value, regex)
> The `match_all` method returns an iterator of all results matching a string against a regular expression, including capturing groups.

params:
- value: the string value
- regex: A regular expression object, or any object that has a Symbol.matchAll method.

  - If regexp is not a RegExp object and does not have a Symbol.matchAll method, it is implicitly converted to a RegExp by using new RegExp(regexp, 'g').

  - If regexp is a regex, then it must have the global (g) flag set, or a TypeError is thrown.


- return value: 
> An iterable iterator object (which is not restartable) of matches.
```
import std.string as str;

let array = str.match_all('test1test2', 't(e)(st(\\d?))', 'g');

assert(array[0] == ["test1", "e", "st1", "1"]);
assert(array[1] == ["test2", "e", "st2", "2"]);

```
## normalize(value)
> The `normalize` method returns the Unicode Normalization Form of the string.

params:
- value: the string value

- return value: 
> A string containing the Unicode Normalization Form of the given string.
```
import std.string as str;

assert(str.normalize('\u0041\u006d\u00e9\u006c\u0069\u0065') == 'Amélie');
```
## pad_end(value, len, pad)
> The `pad_end` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

params:
- value: the string value
- len: The length of the resulting string once the current str has been padded. If the value is less than or equal to str.length, the current string will be returned as-is.
- pad: optional. The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).

- return value: 
> A String of the specified targetLength with the padString applied at the end of the current str.
```
import std.string as str;

assert(str.pad_end('Breaded Mushrooms', 25, '.') == 'Breaded Mushrooms........');
```

## pad_start(value, len, pad)
> The `pad_start` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

params:
- value: the string value
- len: The length of the resulting string once the current str has been padded. If the value is less than or equal to str.length, then str is returned as-is.
- pad: optional. The string to pad the current str with. If padString is too long to stay within the targetLength, it will be truncated from the end. The default value is the unicode "space" character (U+0020).

- return value: 
> A String of the specified targetLength with padString applied from the start.
```
import std.string as str;

assert(str.pad_start('5581', 16, '*') == '************5581');
```

## repeat(value, count)
> The `repeat` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

params:
- value: the string value
- count: An integer between 0 and +Infinity, indicating the number of times to repeat the string.

- return value: 
> A new string containing the specified number of copies of the given string.

```
import std.string as str;

assert(str.repeat('Happy! ', 3) == 'Happy! Happy! Happy! ');

```

## replace(value, pattern, replacement)
> The `replace` method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

params:
- value: the string value
- pattern: Can be a string or an object with a Symbol.replace method — the typical example being a regular expression. Any value that doesn't have the Symbol.replace method will be coerced to a string.
- replacement: Can be a string or a function.
  - If it's a string, it will replace the substring matched by pattern. A number of special replacement patterns are supported; see the Specifying a string as the replacement section below.
  - If it's a function, it will be invoked for every match and its return value is used as the replacement text. The arguments supplied to this function are described in the Specifying a function as the replacement section below.

- return value: 
> A new string, with one, some, or all matches of the pattern replaced by the specified replacement.
```
import std.string as str;

assert(str.replace('The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?', 'dog', 'monkey') == 'The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?');

```

## replace_all(value, pattern, replacement)
> The `replace_all` method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

params:
- value: the string value
- pattern:
- replacement:

- return value: 
> A new string, with all matches of a pattern replaced by a replacement.
```
import std.string as str;

assert(str.replace_all('The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?', 'dog', 'monkey') == 'The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?');

```

## search(value, pattern)
> The `search` method executes a search for a match between a regular expression and this String object.

params:
- value: the string value
- pattern: A regular expression object, or any object that has a Symbol.search method.

  - If regexp is not a RegExp object and does not have a Symbol.search method, it is implicitly converted to a RegExp by using new RegExp(regexp).

- return value: 
> The index of the first match between the regular expression and the given string, or -1 if no match was found.

```
import std.string as str;

assert(str.search('The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?', '[^\\w\\s]', 'g') == 43);

```
## slice(value, start, end)
> The `slice` method extracts a section of a string and returns it as a new string, without modifying the original string.

params:
- value: the string value
- start: The index of the first character to include in the returned substring.
- end: optional. The index of the first character to exclude from the returned substring.

- return value: 
> A new string containing the extracted section of the string.

```
import std.string as str;

assert(str.slice('The quick brown fox jumps over the lazy dog.', 31) == 'the lazy dog.');

```
## split(value, separator, limit)
> The `split` method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

params:
- value: the string value
- separator: The pattern describing where each split should occur. Can be undefined, a string, or an object with a Symbol.split method — the typical example being a regular expression. Omitting separator or passing undefined causes split() to return an array with the calling string as a single element. All values that are not undefined or objects with a @@split method are coerced to strings.
- limit: optional. A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

  - The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
  - If limit is 0, [] is returned.

- return value: 
> An Array of strings, split at each point where the separator occurs in the given string.
```
import std.string as str;

let items = str.split('The quick brown fox jumps over the lazy dog.', ' ');
assert(items[3] == 'fox');

```
## starts_with(value, search, pos)
> The `starts_with` method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

params:
- value: the string value
- search: The characters to be searched for at the start of this string. Cannot be a regex. All values that are not regexes are coerced to strings, so omitting it or passing undefined causes startsWith() to search for the string "undefined", which is rarely what you want.
- pos: optional. The start position at which searchString is expected to be found (the index of searchString's first character). Defaults to 0.

- return value: 
> true if the given characters are found at the beginning of the string, including when searchString is an empty string; otherwise, false.

```
import std.string as str;

assert(str.starts_with('Saturday night plans', 'Sat'));
assert(str.starts_with('Saturday night plans', 'Sat', 3 ) == false);
```

## substring(value, start, end)
> The `substring` method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

params:
- value: the string value
- start: The index of the first character to include in the returned substring.
- end: optional. The index of the first character to exclude from the returned substring.

- return value: 
> A new string containing the specified part of the given string.

```
import std.string as str;

assert(str.substring('Mozilla', 1, 3) == 'oz');
```

## to\_lower\_case(value)
> The `to_lower_case` method returns the calling string value converted to lower case.

params:
- value: the string value

- return value: 
> A new string representing the calling string converted to lower case.
```
import std.string as str;

assert(str.to_lower_case('The quick brown fox jumps over the lazy dog.') == 'the quick brown fox jumps over the lazy dog.');
```

## to\_upper\_case(value)
> The `to_upper_case` method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

params:
- value: the string value

- return value: 
> A new string representing the calling string converted to upper case.
```
import std.string as str;

assert(str.to_upper_case('The quick brown fox jumps over the lazy dog.') == 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');

```
## trim(value)
> The `trim` method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
- value: the string value

- return value: A new string representing str stripped of whitespace from both its beginning and end. Whitespace is defined as white space characters plus line terminators. 
```
import std.string as str;


assert(str.trim('   Hello world!   ') == 'Hello world!');
```

## trim_end(value)
> The `trim_end` method removes whitespace from the end of a string and returns a new string, without modifying the original string. trimRight() is an alias of this method.

params:
- value: the string value

- return value: 
> A new string representing str stripped of whitespace from its end (right side). Whitespace is defined as white space characters plus line terminators.
```
import std.string as str;

assert(str.trim_end('   Hello world!   ') == '   Hello world!');
```


## trim_start(value)
> The `trim_start` method removes whitespace from the beginning of a string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.

params:
- value: the string value

- return value: 
> A new string representing str stripped of whitespace from its beginning (left side). Whitespace is defined as white space characters plus line terminators.

```
import std.string as str;


assert(str.trim_start('   Hello world!   ') == 'Hello world!   ');
```
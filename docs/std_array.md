# array
> import std.array as arr;

## at(values, index)
> The `at` method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

- values: the array values
- index: Zero-based index of the array element to be returned, converted to an integer. Negative index counts back from the end of the array — if index < 0, index + array.length is accessed.
- return value: The element in the array matching the given index. Always returns undefined if index < -array.length or index >= array.length without attempting to access the corresponding property.


## concat(values, ...elements)
> The `concat` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
- values: the array values
- elements: the arrays to be merged.
- return value: a new array.

## copy_within(values, target, start, end) 
> The `copy_within` method shallow copies part of an array to another location in the same array and returns it without modifying its length.
- values: the array values
- target: Zero-based index at which to copy the sequence to
- start: Zero-based index at which to start copying elements from
- end: optional. Zero-based index at which to end copying elements from, converted to an integer. copyWithin() copies up to but not including end
- return value: The modified array.

## every(values, callback)
> The `every` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
- values: the array values
- callback: A closure to execute for each element in the array. It should return a truthy value to indicate the element passes the test, and a falsy value otherwise. The function is called with the following arguments:
  - element: The current element being processed in the array.
  - index: The index of the current element being processed in the array.
  - array: The array every() was called upon.

- return value: true if callback returns a truthy value for every array element. Otherwise, false.

## fill(values, value, start ,end)
> The `fill` method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
- values: the array values
- value: Value to fill the array with. Note all elements in the array will be this exact value: if value is an object, each slot in the array will reference that object.
- start: optional. Zero-based index at which to start filling,
- end: optional. Zero-based index at which to end filling
- return value: The modified array, filled with value.

## filter(values, callback)
> The `filter` method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
- values: the array values
- callback: A closure to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise. The function is called with the following arguments:
  - element: The current element being processed in the array.
  - index: The index of the current element being processed in the array.
  - array: The array filter() was called upon.

- return value: A shallow copy of a portion of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned.


## find(values, callback)
> The `find` method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
- values: the array values
- callback: A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:
  - element: The current element being processed in the array.
  - index: The index of the current element being processed in the array.
  - array: The array find() was called upon.

- return value: The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

## find_index(values, callback)
> The `find_index` method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
- values: the array values
- callback: A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:
  - element: The current element being processed in the array.
  - index: The index of the current element being processed in the array.
  - array: The array find_index was called upon.

- return value: The index of the first element in the array that passes the test. Otherwise, -1.

## find_last(values, callback)
> The `find_last` method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
- values: the array values
- callback: A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:
  - element: The current element being processed in the array.
  - index: The index of the current element being processed in the array.
  - array: The array find_last was called upon.

- return value: The value of the element in the array with the highest index value that satisfies the provided testing function; undefined if no matching element is found.

## find_last_index(values, callback)
> The `find_last_index` method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
- values: the array values
- callback: A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:
  - element: The current element being processed in the array.
  - index: The index of the current element being processed in the array.
  - array: The array find_last_index() was called upon.

- return value: The index of the last (highest-index) element in the array that passes the test. Otherwise -1 if no matching element is found.

## flat(values, depth)
> The `flat` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- values: the array values
- depth: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
- return value: A new array with the sub-array elements concatenated into it.



## flat_map(values, callback)
> The `flat_map` method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
- values: the array values
- callback: A function to execute for each element in the array. It should return an array containing new elements of the new array, or a single non-array value to be added to the new array. The function is called with the following arguments:
  - element: The current element being processed in the array.
  - index: The index of the current element being processed in the array.
  - array: The array flat_map was called upon.

- return value: A new array with each element being the result of the callback function and flattened by a depth of 1.

## for_each(values, callback)
> The `for_each` method executes a provided function once for each array element.
- values: the array values
- callback: A function to execute for each element in the array. Its return value is discarded. The function is called with the following arguments:
  - element: The current element being processed in the array.
  - index: The index of the current element being processed in the array.
  - array: The array for_each was called upon.

- return value: undefined

## includes(values, search, from)
> The `includes` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
- values: the array values
- search: The value to search for.
- from: optional. Zero-based index at which to start searching, converted to an integer.
- return value: A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

## index_of(values, search, from)
> The `index_of` method returns the first index at which a given element can be found in the array, or -1 if it is not present.
- values: the array values
- search: Element to locate in the array.
- from: optional. Zero-based index at which to start searching, converted to an integer.
- return value: The first index of the element in the array; -1 if not found.

## is_array(values)
> The `is_array` static method determines whether the passed value is an Array.
- values: the array values
- return value: true if value is an Array; otherwise, false. false is always returned if value is a TypedArray instance.

## join(values, separator)
> The `join` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
- values: the array values
- separator: optional. Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
- return value: A string with all array elements joined. If arr.length is 0, the empty string is returned.

## keys(values)
> The `keys` method returns a new array iterator object that contains the keys for each index in the array.
- values: the array values
- return value: new array of keys.

## last_index_of(values, search, from)
> The `last_index_of` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
- values: the array values
- search: Element to locate in the array.
- from: optional. Zero-based index at which to start searching backwards, converted to an integer.
- return value: The last index of the element in the array; -1 if not found.

## map(values, callback)
> The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

- values: the array values
- callback: A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:
  - element: The current element being processed in the array.
  - index: The index of the current element being processed in the array.
  - array: The array map was called upon.

- return value: A new array with each element being the result of the callback function.

## pop(values)
> The `pop` method removes the last element from an array and returns that element. This method changes the length of the array.
- values: the array values
- return value: The removed element from the array; undefined if the array is empty.

## push(values, elements)
> The `push` method adds the specified elements to the end of an array and returns the new length of the array.
- values: the array values
- elements: The element(s) to add to the end of the array.
- return value: The new length property of the object upon which the method was called.

## reduce(values, callback, init)
> The `reduce` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

> The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

- values: the array values
- callback: A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:
  - accumulator: The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
  - currentValue: The value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
  - currentIndex: The index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
  - array: The array reduce() was called upon.

- init: A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.

- return value: The value that results from running the "reducer" callback function to completion over the entire array.

## reverse(values)
> The `reverse` method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

> To reverse the elements in an array without mutating the original array, use toReversed().

- values: the array values
- return value: The reference to the original array, now reversed. Note that the array is reversed in place, and no copy is made.

## shift(values)
> The `shift` method removes the first element from an array and returns that removed element. This method changes the length of the array.
- values: the array values
- return value: The removed element from the array; undefined if the array is empty.

## slice(values, start, end)
> The `slice` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
- values: the array values
- start: optional. Zero-based index at which to start extraction, converted to an integer.
- end: optional. Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.

- return value: A new array containing the extracted elements.

## some(values, callback)
> The `some` method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

- values: the array values
- callback: A function to execute for each element in the array. It should return a truthy value to indicate the element passes the test, and a falsy value otherwise. The function is called with the following arguments:
  - element: The current element being processed in the array.
  - index: The index of the current element being processed in the array.
  - array: The array some was called upon.

- return value: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.

## sort(values, comparator)
> The `sort` method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

> The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

> To sort the elements in an array without mutating the original array, use toSorted().

- values: the array values
- comparator: A function that defines the sort order. The return value should be a number whose sign indicates the relative order of the two elements: negative if a is less than b, positive if a is greater than b, and zero if they are equal. NaN is treated as 0. The function is called with the following arguments:
  - a: The first element for comparison. Will never be undefined.
  - b: The second element for comparison. Will never be undefined.
- return value:

## splice(values, start, deleteCount, ...items)
> The `splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

> To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

- values: the array values
- start: Zero-based index at which to start changing the array, converted to an integer.
- deleteCount: optional. An integer indicating the number of elements in the array to remove from start.

  - If deleteCount is omitted, or if its value is greater than or equal to the number of elements after the position specified by start, then all the elements from start to the end of the array will be deleted. However, if you wish to pass any itemN parameter, you should pass Infinity as deleteCount to delete all elements after start, because an explicit undefined gets converted to 0.

  - If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

- items: The elements to add to the array, beginning from start.
  - If you do not specify any elements, splice() will only remove elements from the array.

- return value:
    - An array containing the deleted elements.
    - If only one element is removed, an array of one element is returned.
    - If no elements are removed, an empty array is returned.

## to_string(values)
> The `to_string` method returns a string representing the specified array and its elements.
- values: the array values
- return value: A string representing the elements of the array.

## unshift(values, ...elements)
> The `unshift` method adds the specified elements to the beginning of an array and returns the new length of the array.
- values: the array values 
- elements: The elements to add to the front of the arr.

- return value: The new length property of the object upon which the method was called.


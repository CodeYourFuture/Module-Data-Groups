// arrays are stored by reference.
// Reference: A reference points to a location in memory.
// consider the following example:

// const list = [10, 20 ,30]
// const copy = list;
// copy.push(40, 50);
// console.log(list);
// console.log(copy);

// shared reference:
// we can also check these variables share the same reference.

// const list = [10, 20, 30]
// const copy = list;

// console.log(list === copy) //  log is true

// if we made two different arrays with the same contents they would not be equal.

const list = [10, 20, 30]
const copy = [10, 20, 30]

console.log(list === copy) //  log false

// value vs reference
// in JS arrays and objects are reference type. everything else is value type.
// when something is passed by value it means that a copy of actual data is given to a variable or a function__ not the original data itself.
// so if you change the copy the original data stays the same.
// As strings are value type: in JS strings, numbers, boolean, null, undefined, symbols, and bigints are primitive types which is called value types, which means they are stored directly as values not reference.
// in short: Passed by value: creates a copy
// passed by reference: points to the same memory.
// 'Passed' refers to when you give a value to something.
// for example: let a = 10,
// let b = a; ----> here 10 is passed from a to b


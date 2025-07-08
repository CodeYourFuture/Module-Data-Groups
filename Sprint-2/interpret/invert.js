// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
/*When invert is called with { a: 1 }, the loop runs once, and invertedObj.key 
= value assigns 1 to the key "key". The result is:
 */
// b) What is the current return value when invert is called with { a: 1, b: 2 }
/*{ a: 1, b: 2 }*/
// c) What is the target return value when invert is called with {a : 1, b: 2}
/* { "1": "a", "2": "b" }*/
// c) What does Object.entries return? Why is it needed in this program?
/* Object.entries returns an array of key-value pairs for the given object.
Object.entries({ a: 1, b: 2 })  returns [["a", 1], ["b", 2]]
// d) Explain why the current return value is different from the target output
  /*  It uses a fixed key "key" (invertedObj.key = value) instead of dynamically
   using the value as the key.

    It overwrites the same key "key" in each iteration, losing the previous 
    key-value pair.
    */
// e) Fix the implementation o#f invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Use the value as the new key
  }

  return invertedObj;
}
console.log(invert({ a: 1 })); 
console.log(invert({ a: 1, b: 2 })); 
console.log(invert({ x: 10, y: 20 })); 
console.log(invert({})); // {}
console.log(invert({ foo: "bar", baz: "qux" })); 
/*$ cd interpret 

sripa@LAPTOP-CLQ688JA MINGW64 ~/Desktop/CYF/Module-Data-Groups/sprint-2/interpret (main)
$ node invert.js
{ '1': 'a' }
{ '1': 'a', '2': 'b' }
{ '10': 'x', '20': 'y' }
{}
{ bar: 'foo', qux: 'baz' }

sripa@LAPTOP-CLQ688JA MINGW64 ~/Desktop/CYF/Module-Data-Groups/sprint-2/interpret (main)
$ */ 
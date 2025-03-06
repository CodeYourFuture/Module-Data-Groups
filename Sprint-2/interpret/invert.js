// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/*function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}
*/
// a) What is the current return value when invert is called with { a : 1 }
//The function currently does not invert keys and values—it simply copies the input object.;
// b) What is the current return value when invert is called with { a: 1, b: 2 }
//invert({ a: 1, b: 2 }) the function does not swap keys and values; it just returns the original object.;
// c) What is the target return value when invert is called with {a : 1, b: 2}
//We want the function to swap keys and values: { "1": "a", "2": "b" }{ "1": "a", "2": "b" }
// d) What does Object.entries return? Why is it needed in this program?
/*Object.entries({ a: 1, b: 2 });
Output: [ ['a', 1], ['b', 2] ] Object.entries(obj) returns an array of key-value pairs from obj.
This method is needed because it allows iteration over an object's key-value pairs, making it easy 
to swap them.*/
// e) Explain why the current return value is different from the target output
/* invertedObj[key] = value;
This does not swap the key and value. Instead, it simply copies the original key-value pairs 
into invertedObj.
The correct way is:  invertedObj[value] = key;
This dynamically assigns the value as the key and the key as the value.*/
// f) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
   const invertedObj = {};
   for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
   }
   return invertedObj;
 }
console.log(invert({ a: 1 })); 
console.log(invert({ a: 1, b: 2 })); 
console.log(invert({ x: 10, y: 20 })); 
console.log(invert({})); 
console.log(invert({ a: "hello", b: "world" }));
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
/*
key = "a" and value = 1
invertedObj.key = 1, so invertedObj becomes { key: 1 }.
the output is key: 1
*/

// b) What is the current return value when invert is called with { a: 1, b: 2 }
/*
after the first iteration invertedObj will be {key : 1 }
on the second iteration:
key = "b"  and value = 2
invertedObj.key = 2 the key property is overwritten and invertedObj will become {key : 2}
*/

// c) What is the target return value when invert is called with {a : 1, b: 2}
/*
{
"1" : "a",
"2" : "b"
}
*/

// c) What does Object.entries return? Why is it needed in this program?
/*
Object.entries(obj) returns an array of key-value pairs (as arrays) from the object.
[
["a", 1],
["b", 2]
]
why is it needed in this program because it allow to easily loop through the keys and values of the object to 
perform the inversion
*/

// d) Explain why the current return value is different from the target output
/*
inside the loop invertedObj.key = value it overwrites the pervious key-value pair
we need to assign the value as the new key in invertedObj and the key as the new value 
invertedObj[value] = key;
*/
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
/*
function invert(obj){
const invertedObj = {};
for (const [key, value] of object.entries(obj)){
invertedObj[value] = key;
}
return invertedObj;
}
*/
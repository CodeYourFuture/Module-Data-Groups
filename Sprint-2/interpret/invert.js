// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

console.log(invert({ a: 1, b: 2 })); // Expected output: { '1': 'a', '2': 'b' }



/*
a) What is the current return value when invert is called with { a : 1 }
    *the value { key: 1 }

b) What is the current return value when invert is called with { a: 1, b: 2 }
    *the first pair is { key: 1 }  
    *and the second pair the value is  { key: 'b' } that means the first pair is 
    being overwritten by the second pair, so the final return value is { key: 'b' }

c) What is the target return value when invert is called with {a : 1, b: 2}
    *the target return value is { "1": "a", "2": "b" }

d) What does Object.entries return? Why is it needed in this program?
    *Return value: It returns an array of arrays, where each sub-array is a [key, value] 
    pair (e.g., [['a', 1]]).
    *Why it's needed: Objects are not iterables by default. We need Object.entries 
    to convert the object into an array so we can use the for...of loop to go through each pair.

e) Explain why the current return value is different from the target output
    *Literal Property Creation: The current code uses dot notation (invertedObj.key), 
    which creates a property literally named "key" instead of using the value stored 
    inside the key variable.

    *Overwriting: Because it keeps targetting the same literal property name ("key"), 
    each iteration overwrites the previous one. This is why the final object only contains 
    the last value processed.

    *Target vs. Current: The target output requires bracket notation (invertedObj[value]) 
    to dynamically assign the new keys based on the input's values.


f) Fix the implementation of invert (and write tests to prove it's fixed!)
    expect({ a: 1, b: 2 })toEqual({ '1': 'a', '2': 'b' } ) now is working as expected

**/



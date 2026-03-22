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

console.log(invert({ a: 1, b: 2 }));


// a) What is the current return value when invert is called with { a : 1 }. ANSWER =  { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }. ANSWER = { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}. ANSWER = { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
//ANSWER:
// c(i)  Object.entries(obj) returns an array of [key, value] pairs e.g ({ a: 1, b: 2 }) → [["a", 1], ["b", 2]]
// c(ii) Object.entries allows you to loop through both keys and values .

// d) Explain why the current return value is different from the target output
//ANSWER: It is different because the line is assigning to the literal property "key" instead of using the variable key or value

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}



console.log(invert({ a: 1 }))
console.log(invert({ a: 1, b: 2 }))



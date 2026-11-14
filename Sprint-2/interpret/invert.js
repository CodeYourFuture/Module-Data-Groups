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
module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }

//{key: 1;}

// b) What is the current return value when invert is called with { a: 1, b: 2 }

//{key: 2;}

// c) What is the target return value when invert is called with {a : 1, b: 2}

//{'1' :'a','2':'b' }

// d) What does Object.entries return? Why is it needed in this program?

//Objet.entries takes objects and  returne array with in array or sub arrays.
//in this program it is needed to put the properties in an array as key and value.
// After that line though, the next line takes the key and value and place it in an object again by changing key and value
// position when stored in the object

// e) Explain why the current return value is different from the target output
//The crrent output is different becouse it is only storing the last element in the loop
// with the key name "key" . So when it is printed out it comes forexample {'key': 1}
//and also the value and key dont change position.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)

// fixed the implementation and now it is printing the target value

// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    const valKey = String(value); 
    if (invertedObj.hasOwnProperty(valKey)) {
      if (Array.isArray(invertedObj[valKey])) {
        invertedObj[valKey].push(key);
      } else {
        // Convert to array with existing + new key
        invertedObj[valKey] = [invertedObj[valKey], key];
      }
    } else {
      invertedObj[valKey] = key;
    }
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// Object.entries({ a: 1 })  returns [['a', 1]] - an array with one pair: key "a" and value 1
// so in the loop key = "a", value = 1
// If you write invertedObj.key = value;

     //This creates a property literally named "key" on invertedObj,

     //So the object becomes { key: 1 } — which is not what we want.
// Instead, using bracket notation: invertedObj[key] = value;
    //Uses the value of the variable key (which is "a"),
    //So it creates a property "1" with value "a" on the inverted object,
    //Resulting in { 1: "a" }, which is the intended behavior.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key: 2} it overwrites the previous value of key


// c) What is the target return value when invert is called with {a : 1, b: 2}
// we want to change the position of the key and value
// {"1": "a", "2": "b}

// c) What does Object.entries return? Why is it needed in this program?
// it returns the object in to array
// Object.entries ({a: 1, b: 2}) returns 
// [["a", 1], ["b", 2]]

// d) Explain why the current return value is different from the target output
// this line invertedObj.key = value; 
// it is not using the key variable it is adding a property named key.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)


module.exports = invert;
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

// a) What is the current return value when invert is called with { a : 1 }
the current return value is {key :1}. 
// b) What is the current return value when invert is called with { a: 1, b: 2 }
the current return value is {key: 2}.
// c) What is the target return value when invert is called with {a : 1, b: 2}
the target return value should be {"1": "a", "2" : "b"}.
// c) What does Object.entries return? Why is it needed in this program?
object.entries() returns an array of key/value pairs of an object. it is needed in this program to loop through the object and access both the key and value at the same Time .
// d) Explain why the current return value is different from the target output
because using the key element in the loop is not correct. as using it in  this line :    invertedObj.key = value;
creats a propty called key rather than using it as a variable . it also doesn't swap the key/vlaue . 
// e) Fix the implementation of invert (and write tests to prove it's fixed!)


test ("invert should swap keys and values in an object with one key and value", ()=> {
expect(invert({a :1})).toEqual({"1" :"a"})
});

test ("invert should swap keys and values in an object with multiple keys and values", ()=> {
expect(invert({a :1, b: 2})).toEqual({"1" :"a", "2" : "b"})
});

test('invert should return an empty object when given an empty object', ()=> {
  expect(invert({})).toEqual({});
});
// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
     //console.log(key, value);
     invertedObj[value] = key;
    
  }

  return invertedObj;
}
 console.log(invert({a:1}));
// a) What is the current return value when invert is called with { a : 1 }
// it should return {key:1}, as "key" is a variable here.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// it will return:{key:2},


// c) What is the target return value when invert is called with {a : 1, b: 2}
//{1:"a" , 2:"b"}

// c) What does Object.entries return? Why is it needed in this program?
// it converts each object's properties to indivisual arrays

// d) Explain why the current return value is different from the target output
//this function has 2 unexpected reaction:
//1)for each pair of kay,value it overwrites the new contents with the previous one. "invertedObj.key = value" should be "invertedObj[key] = value"
//2)it doesn't convert key. "invertedObj.key = value" shoould be "invertedObj[value]= key"

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
module.exports=invert;
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
console.log(invert({a:1})) // output {1:a}
console.log(invert({ a: 1, b: 2 })) // output {1:a,2:b}
console.log(invert({})) //output {{}}
console.log(invert({name:'Mike',age:33})) // output {Mike:'name', 33:age}

// a) What is the current return value when invert is called with { a : 1 }
// The return value is {key:1}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
//The return value is {key:2}
// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value should be {1:a,2:b}
// c) What does Object.entries return? Why is it needed in this program?
// Object.entries return the keys and values of the object(obj)
// d) Explain why the current return value is different from the target output
// The difference happen when using the dot notation to access literal string instead of expression, it does not use the value of key variable.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)

//test 1:
const result1 = invert({a:1});
const expected1 = {1:'a'};
console.log(`Test 1: Input {a:1}, Expected ${JSON.stringify(expected1)}, Actual ${JSON.stringify(result1)}`);
console.log(`Result: ${JSON.stringify(result1) === JSON.stringify(expected1) ? 'PASS' : 'FAIL'}`);
//test 2:
const result2 = invert({ a: 1, b: 2 });
const expected2 = {1:'a', 2:'b'};
console.log(`Test 2: Input {a:1, b:2}, Expected ${JSON.stringify(expected2)}, Actual ${JSON.stringify(result2)}`);
console.log(`Result: ${JSON.stringify(result2) === JSON.stringify(expected2) ? 'PASS' : 'FAIL'}`);
//test 3:
const result3 = invert({});
const expected3 = {};
console.log(`Test 3: Input {}, Expected ${JSON.stringify(expected3)}, Actual ${JSON.stringify(result3)}`);
console.log(`Result: ${JSON.stringify(result3) === JSON.stringify(expected3) ? 'PASS' : 'FAIL'}`);
//test 4:
const result4 = invert({name:'Mike',age:33});
const expected4 = {Mike:'name',33:'age'};
console.log(`Test 4: Input {name:'Mike',age:33}, Expected ${JSON.stringify(expected4)}, Actual ${JSON.stringify(result4)}`);
console.log(`Result: ${JSON.stringify(result4) === JSON.stringify(expected4) ? 'PASS' : 'FAIL'}`);

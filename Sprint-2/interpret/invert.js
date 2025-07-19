// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
  

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }
  return invertedObj;
  }
  return invertedObj;
}
console.log(invert({ a: 1, b: 2 })); 

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
// { '1': 'a', '2': 'b' }

// c) What does Object.entries return? Why is it needed in this program?

// d) Explain why the current return value is different from the target output
// it is different because current code is not doing what we was expecting.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
test("invert swaps keys and values in an object", () => {
  const currentOutput = invert({ x: 10, y: 20 });
  const targetOutput = { "10": "x", "20": "y" };
  
  expect(currentOutput).toEqual(targetOutput);
});
test("invert handles multiple key-value pairs", () => {
  const currentOutput = invert({ a: 1, b: 2, c: 3 });
  const targetOutput = { "1": "a", "2": "b", "3": "c" };
  
  expect(currentOutput).toEqual(targetOutput);
});

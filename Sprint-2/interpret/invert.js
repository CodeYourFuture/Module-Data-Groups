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
// Answer: Object.entries({a: 1}) → [["a", 1]]
//loop runs once:
// key = "a", value = 1
// invertedObj.key = value sets property "key" to 1
{ key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: Object.entries({a: 1, b: 2}) → [["a", 1], ["b", 2]]
// loop:
// first iteration sets { key: 1 }
// second iteration overwrites it to { key: 2 }
{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: “Invert” should swap keys and values, and object keys are strings, so numeric values become string keys.
{ "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Answer: Object.entries(obj) returns an array of [key, value] pairs for an object’s own enumerable string-keyed properties.
// It’s useful here because it lets you iterate an object as pairs.
// So Object.entries is just a clean, safe way to get both key and value in one go.

// d) Explain why the current return value is different from the target output
// Answer: The output is wrong because the code has two main bugs: it uses dot notation (invertedObj.key), which creates a literal "key" property instead of using the variable key, 
// and it doesn’t actually swap keys and values, it assigns the value back instead of inverting. 
// As a result, each loop iteration overwrites the same "key" property, leaving only the last value.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[String(value)] = key; // ensure keys are strings
  }

  return invertedObj;
}


describe("invert", () => {
  test("inverts a single key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ "1": "a" });
  });

  test("inverts multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  });

  test("stringifies numeric values as keys", () => {
    const result = invert({ x: 10, y: 20 });
    expect(result).toEqual({ "10": "x", "20": "y" });
  });

  test("later keys override earlier keys when values collide", () => {
    expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" });
  });

  test("works with string values too", () => {
    expect(invert({ a: "cat", b: "dog" })).toEqual({ cat: "a", dog: "b" });
  });
});

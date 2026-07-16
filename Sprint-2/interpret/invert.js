// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("Input must be an object");
  }

  if (Object.keys(obj).length === 0) {
    return {};
  }

  const invertedObj = {};
  const seenValues = new Set();

  for (const [key, value] of Object.entries(obj)) {
    const isKeyValid = typeof key === "string" || typeof key === "number";
    const isValueValid = typeof value === "string" || typeof value === "number";

    if (!isKeyValid || !isValueValid) {
      throw new Error("Keys and values must be a string or a number");
    }

    if (seenValues.has(value)) {
      throw new Error("Values cannot be duplicated");
    }

    seenValues.add(value);
    invertedObj[value] = key;
  }

  return invertedObj;
}

// Handle invalid cases
const INVALID_CASES = [
  [{ a: {} }, "Keys and values must be a string or a number"],
  [{ a: 1, b: 1 }, "Values cannot be duplicated"],
  ["hello", "Input must be an object"],
];

const printInvalidCases = () => {
  for (const [data, expectedMessage] of INVALID_CASES) {
    try {
      invert(data);
      console.log(`Unexpected success for ${JSON.stringify(data)}`);
    } catch (error) {
      console.log("-".repeat(50));
      console.log(
        `Data: ${JSON.stringify(data)}\nExpected: ${expectedMessage}\nReceived: ${error.message}`
      );
    }
  }
};

if (require.main === module) {
  console.log("ERROR MESSAGES");
  printInvalidCases();
  console.log("-".repeat(50));

  const runExample = (input) => {
    try {
      const result = invert(input);
      console.log(
        `Input: ${JSON.stringify(input)} => ${JSON.stringify(result)}`
      );
    } catch (error) {
      console.log(`Input: ${JSON.stringify(input)} => ${error.message}`);
    }
  };

  // Example cases
  runExample({ x: 10, x: 20 });
  runExample({ a: 1 });
  // Invalid cases
  runExample({ x: 20, y: 20 });
  runExample({ a: {} });
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// Current return value is {key: 1}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Current return value is {key: 1, key: 2}
// c) What is the target return value when invert is called with {a : 1, b: 2}
// Target return value when invert is called with {a : 1, b: 2} is {key: 1, key: 2}
// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns the key / value pairs in nested arrays [["a", 1], "b", 2]].  It is needed in order for this programme to be able to work as it requires swapping of keys and values
// d) Explain why the current return value is different from the target output
// The current value is returning a key because it is using the key notation (invertedObj.key). It needs to be returned using brackets and the value and key swapped - inveretedObj[value] = key
// e) Fix the implementation of invert (and write tests to prove it's fixed!)

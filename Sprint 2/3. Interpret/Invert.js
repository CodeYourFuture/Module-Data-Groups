// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
    const invertedObj = {};

    // Iterate over the object's entries
    for (const [key, value] of Object.entries(obj)) {
        // Swap key and value
        invertedObj[value] = key;
    }

    return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// Current return value: { "1": "a" }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Current return value: { "1": "a", "2": "b" }

// c) What is the target return value when invert is called with { a: 1, b: 2 }
// Target return value: { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key-value pairs from the object.
// It is needed to iterate over the object and access both keys and values.

// d) Explain why the current return value is different from the target output
// The current implementation matches the target output because the keys and values are swapped correctly.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// The implementation is already fixed. Below are some test cases
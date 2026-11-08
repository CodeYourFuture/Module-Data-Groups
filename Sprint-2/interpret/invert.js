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
// {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1": "a", "2":"b"}

// c) What does Object.entries return? Why is it needed in this program?
// An array of the objects key-value pairs. Used here so we can for loop over all key-value pairs in the object

// d) Explain why the current return value is different from the target output
// because the key is a variable, bracket notations has to be used. with .notation it uses the word, not the variable so in this case the
// key is the word 'key'. Also the key and value are the wrong way round, the key of the original object is being given the value of the
// original object, essentially doing nothing

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

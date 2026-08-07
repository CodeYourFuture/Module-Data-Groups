// Let's define how invert should work
// inverse typically means to reverse the key and value in an object.
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

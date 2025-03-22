// invert.js

function invert(obj) {
  const invertedObj = {};  // Create an empty object to store the inverted result

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[String(value)] = key;  // Ensure that the key is a string
  }

  return invertedObj;  // Return the inverted object
}

module.exports = invert;  // Export the function to be used in tests

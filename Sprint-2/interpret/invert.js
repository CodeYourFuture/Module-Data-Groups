/**
 * Invert Function
 * Swaps keys and values of an object. If multiple keys share the same value,
 * it groups those keys into an array to prevent overwriting data.
 */
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // Check if the value already exists as a key in our new object
    if (invertedObj[value] === undefined) {
      // First time seeing this: Save it as a string
      invertedObj[value] = key;
    } else if (Array.isArray(invertedObj[value])) {
      // It's already an array: Add the new key to the list
      invertedObj[value].push(key);
    } else {
      // It's a string: Turn it into an array and add the new key
      invertedObj[value] = [invertedObj[value], key];
    }
  }

  return invertedObj;
}

// Ensure this is at the bottom so other files can use it
module.exports = invert;
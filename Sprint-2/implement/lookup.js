function createLookup(input) {
  const objInput = {};

  // Handle the case of an empty input
  if (!input || input.length === 0) {
    return objInput;
  }

  // Check if the input is a single array or an array of arrays
  if (Array.isArray(input[0]) && input[0].length === 2) {
    // Input is an array of arrays
    for (const pair of input) {
      const [key, value] = pair;
      objInput[key] = value;
    }
  } else if (input.length === 2) {
    // Input is a single array [key, value]
    const [key, value] = input;
    objInput[key] = value;
  }

  return objInput;
}
module.exports = createLookup;

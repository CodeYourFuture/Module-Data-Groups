function createLookup(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input should be an array of arrays of code pairs");
  }

  const validArray = arr.every(
    (element) => Array.isArray(element) && element.length === 2
  );
  if (!validArray) {
    throw new Error("Input should be an array of arrays of code pairs");
  }

  return Object.fromEntries(arr);
}

module.exports = createLookup;

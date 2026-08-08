function createLookup(array) {
  // implementation here

  if (!Array.isArray(array)) {
    throw new Error("Wrong input type, expected array");
  }

  if (array.length === 0) {
    throw new Error("Array is empty");
  }

  let output = {};
  for (const i of array) {
    const key = i[0];
    const value = i[1];

    output[key] = value;
  }
  return output;
}

module.exports = createLookup;

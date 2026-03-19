function createLookup(array) {
  // implementation here
  if (!Array.isArray(array) || !array.every((item) => Array.isArray(item)))
    throw new Error("Invalid Input");
  return Object.fromEntries(array);
}
module.exports = createLookup;

function createLookup(arr) {
  // implementation here
  const obj = Object.fromEntries(arr);
  return obj;
}

module.exports = createLookup;

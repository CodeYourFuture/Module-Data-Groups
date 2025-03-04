function createLookup(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`Invalid input, please input an array`);
  }
  const obj = {};
  arr.forEach((element) => {
    const [first, second] = element;
    obj[first] = second;
  });
  return obj;
}

module.exports = createLookup;

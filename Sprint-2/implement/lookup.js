function createLookup(array) {
  // implementation here
  const object = array.reduce((acc, [key, value]) => { acc[key] = value; return acc; }, {});
  return object;
}
module.exports = createLookup;

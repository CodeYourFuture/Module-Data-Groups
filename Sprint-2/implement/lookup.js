function createLookup(argument) {
  // implementation here
  return argument.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

module.exports = createLookup;

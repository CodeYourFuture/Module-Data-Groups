function createLookup(pairs) {
  if (!Array.isArray(pairs)) {
    throw Error;
  }
  const myLookup = {};

  for (let pair of pairs) {
    myLookup[pair[0]] = pair[1];
  }
  return myLookup;
}

module.exports = createLookup;

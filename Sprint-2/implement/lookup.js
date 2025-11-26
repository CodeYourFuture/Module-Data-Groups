function createLookup(pairsArray) {
  // implementation here
const lookup = Object.fromEntries(pairsArray);
return lookup;
}

module.exports = createLookup;

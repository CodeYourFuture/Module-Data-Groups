function createLookup(codes) {
  const lookup = {};

  for (const country of codes){
    lookup[country[0]] = country[1];
  }

  return lookup;
}

module.exports = createLookup;

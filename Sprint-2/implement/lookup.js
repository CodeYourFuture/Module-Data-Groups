function createLookup(codes) {
  if (!codes || !Array.isArray(codes) || !codes.every((currArr) => Array.isArray(currArr))) {
    throw new Error("createLookup needs an array of arrays");
  }

  const lookup = {};

  for (const country of codes) {
    lookup[country[0]] = country[1];
  }

  return lookup;
}

module.exports = createLookup;

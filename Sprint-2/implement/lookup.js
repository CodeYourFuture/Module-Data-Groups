function createLookup(codes) {

  if (!Array.isArray(codes[0])){
    throw new Error("createLookup needs an array of arrays");
  }

  const lookup = {};

  for (const country of codes){
    lookup[country[0]] = country[1];
  }

  return lookup;
}

module.exports = createLookup;

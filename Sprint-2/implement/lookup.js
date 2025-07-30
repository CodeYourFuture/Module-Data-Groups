function createLookup(nestedArray) {
  let finalObject = {};

  nestedArray.forEach((pair) => {
    const key = pair[0];
    const value = pair[1];
    finalObject[key] = value;
  });

  return finalObject;
}

console.log(createLookup([["NG", "Naira"]]));

module.exports = createLookup;

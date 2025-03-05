const createLookup = (arr) => {
  return Object.fromEntries(arr);
  // Can also use the following array method
  /*return arr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});*/
};
console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);

module.exports = createLookup;

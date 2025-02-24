const createLookup = (arr) => {
  return Object.fromEntries(arr);
};
console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);

module.exports = createLookup;

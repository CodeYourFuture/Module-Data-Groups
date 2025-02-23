function createLookup(arr) {
  let arrObj = Object.fromEntries(arr);
  return arrObj; // implementation here
}
console.log(
  createLookup([
    ["US", "USD"],
    ["CA", "CAD"],
  ])
);

module.exports = createLookup;

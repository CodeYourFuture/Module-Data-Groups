// start your function;
function createLookup(input) {
  const output = {};
  for (let pair of input) {
    const key = pair[0];
    const value = pair[1];
    output[key] = value;
  }
  return output;
}
let input = [
  ["US", "USD"],
  ["CA", "CAD"],
];
module.exports = createLookup;

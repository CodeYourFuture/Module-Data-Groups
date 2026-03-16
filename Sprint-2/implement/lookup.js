// start your function;
function createLookup(input) {
  let output = {};
  for (let pair of input) {
    let key = pair[0];
    let value = pair[1];
    output[key] = value;
  }
  return output;
}
let input = [
  ["US", "USD"],
  ["CA", "CAD"],
];
module.exports = createLookup;

function tally(arr) {
  const output = {};
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  arr.forEach((element) => {
    output[element] = (output[element] || 0) + 1;
  });
  return output;
}
module.exports = tally;

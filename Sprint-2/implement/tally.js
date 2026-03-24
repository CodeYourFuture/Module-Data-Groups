function tally(arr) {
  if (!Array.isArray(arr)) throw new Error("Invalid input");

  const output = {};
  for (const item of arr) {
    if (output[item]) {
      output[item] += 1; // increment count if already exists
    } else {
      output[item] = 1; // first occurrence
    }
  }
  return output;
}
let arr = ["a", "b"];
module.exports = tally;

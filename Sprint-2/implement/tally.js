function tally(arr) {
  let output = {};
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  } else if (arr.length === 0) {
    return output;
  }
  for (let item of arr) {
    let count = arr.filter((x) => x === item).length;
    output[item] = count;
  }
  return output;
}
let arr = ["a", "b"];
module.exports = tally;

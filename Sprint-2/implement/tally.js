function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("invalid input");
  }
  let result = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    let item = arr[i];
    result[item] = (result[item] || 0) + 1;
  }
  return result;
}
module.exports = tally;

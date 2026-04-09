function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("invalid input");
  }
  // using Object.create(null) to create a plain object without prototype
  let result = Object.create(null);
  for (let i = 0; i <= arr.length - 1; i++) {
    let item = arr[i];
    result[item] = (result[item] || 0) + 1;
  }
  return result;
}
module.exports = tally;

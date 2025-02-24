function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }
  let result = {};
  for (let i of arr) {
    result[i] = result[i] ? result[i] + 1 : 1;
  }
  return result;
}

module.exports = tally;

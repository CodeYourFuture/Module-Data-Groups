function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array"); //checks input is an array if not throws error
  }

  const result = {};

  for (const item of arr) {
    if (item in result) {
      result[item] = result[item] + 1;
    } else {
      result[item] = 1;
    }
  }

  return result;
}
module.exports = tally;

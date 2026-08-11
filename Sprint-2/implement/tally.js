function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Invalid input!");
  }
  const result = {};
  for (const item of items) {
    const count = Object.hasOwn(result, item) ? result[item] : 0;
    result[item] = count + 1;
  }
  return result;
}
module.exports = tally;

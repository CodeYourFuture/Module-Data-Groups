function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }
  const count = {};
  for (const item of arr) {
    if (Object.hasOwn(count, item)) {
      count[item] = count[item] + 1;
    } else {
      count[item] = 1;
    }
  }
  return count;
}

module.exports = tally;

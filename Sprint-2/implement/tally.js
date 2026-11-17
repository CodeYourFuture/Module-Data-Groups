function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("tally requires an array");
  }
  const counter = {};
  for (const item of items) {
    if (Object.hasOwn(counter, item) === false) {
      counter[item] = 1;
    } else {
      counter[item]++;
    }
  }

  return counter;
}

module.exports = tally;

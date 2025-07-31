function tally(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("Input should be an array");
  }
  const counter = {};
  for (const item of elements) {
    counter[item] = (counter[item] || 0) + 1;
  }
  return counter;
}
module.exports = tally;

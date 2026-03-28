function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  const counts = {};

  for (const prop of array) {
    if (Object.hasOwn(counts, prop)) {
      counts[prop] += 1;
    } else {
      counts[prop] = 1;
    }
  }

  return counts;
}

module.exports = tally;

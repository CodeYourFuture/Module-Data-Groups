function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const counts = {};

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}
        
module.exports = tally;

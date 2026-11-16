function tally(items) {
  const counts = {};
  if (!Array.isArray(items)) {
    throw new Error("tally requires an array");
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (Object.keys(counts).includes(item)) {
      counts[item] = counts[item] + 1;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}

module.exports = tally;

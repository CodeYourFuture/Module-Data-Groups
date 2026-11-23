function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("tally requires an array");
  }

  const counts = {};

  for (const item of items) {
    const key = String(item);

    if (counts.hasOwnProperty(key)) {
      counts[key] += 1;
    } else {
      counts[key] = 1;
    }
  }

  return counts;
}

module.exports = tally;

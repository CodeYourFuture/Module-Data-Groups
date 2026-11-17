function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("tally requires an array");
  }

  const counts = {};

  for (const item of items) {
    const key = String(item);

    if (Object.prototype.hasOwnProperty.call(counts, key)) {
      counts[key] += 1;
    } else {
      Object.defineProperty(counts, key, {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
  }

  return counts;
}

module.exports = tally;

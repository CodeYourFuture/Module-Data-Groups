function dedupe(list) {
  if (!Array.isArray(list))
    throw new Error("Please input an array e.g. [1, 3, 6]");

  if (list.length === 0) return [];

  return [...new Set(list)];
}

module.exports = dedupe;

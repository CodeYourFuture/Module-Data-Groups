function dedupe(arr) {
  const result = []; // This empty array will store unique items
  const seen = new Set(); // Used to track what we've already seen

  for (let item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

module.exports = dedupe;


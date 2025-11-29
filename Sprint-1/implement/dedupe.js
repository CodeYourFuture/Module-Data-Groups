function dedupe(arr) {
  if (arr.length === 0) return [];

  const noDupsArr = [];
  const seenItems = new Set();

  for (const el of arr) {
    if (!seenItems.has(el)) {
      noDupsArr.push(el);
      seenItems.add(el);
    }
  }
  return noDupsArr;
}
module.exports = dedupe;

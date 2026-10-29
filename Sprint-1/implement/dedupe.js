function dedupe(elements) {
  const dedupedArray = [];

  for (value of elements) {
    if (!dedupedArray.includes(value)) {
      dedupedArray.push(value);
    }
  }
  return dedupedArray;
}

module.exports = dedupe;

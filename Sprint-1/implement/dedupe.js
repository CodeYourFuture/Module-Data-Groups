function dedupe(arr) {
  const deduplicates = arr.filter((item, index) => arr.indexOf(item) === index);
  return deduplicates;
}

module.exports = dedupe;

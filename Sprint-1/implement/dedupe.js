function dedupe(array) {
  const seen = new Set();
  return array.filter((item) => {
    if (seen.has(item)) return false;
    seen.add(item);
    return true;
  });
}

module.exports = dedupe;

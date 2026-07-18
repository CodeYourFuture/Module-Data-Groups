function dedupe(arr) {
  if (arr.length === 0) {
    return [];
  }
  const uniqueSet = new Set(arr);
  if (arr.length !== uniqueSet.size) {
    return [...uniqueSet];
  } else {
    return [...arr];
  }
}

module.exports = dedupe;

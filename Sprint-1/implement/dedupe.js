function dedupe(array) {
  const uniqueSet = new Set(array);
  return [...uniqueSet];
}

module.exports = dedupe;

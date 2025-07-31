function dedupe(arr) {
  const unique = [];
  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

module.exports = dedupe;

function dedupe(arr) {
  const result = [];
  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

module.exports = dedupe;

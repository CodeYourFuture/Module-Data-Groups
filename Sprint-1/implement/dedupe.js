function dedupe(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const result = [];
  for (let item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

module.exports = dedupe;

function dedupe(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length !== new Set(arr).size) {
    const cleanedArray = [...new Set(arr)];
    return cleanedArray;
  } else {
    return arr;
  }
}

module.exports = dedupe;

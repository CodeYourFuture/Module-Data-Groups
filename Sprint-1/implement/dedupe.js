function dedupe(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    // Check if item is not already in the result array
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  }

  return result;
}

module.exports = dedupe;

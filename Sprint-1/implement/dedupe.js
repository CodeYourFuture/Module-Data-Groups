function dedupe(inputArray) {
  if (inputArray.length === 0) return inputArray;
  let fixArray = [];
  for (const item of inputArray) {
    if (!fixArray.includes(item)) {
      fixArray.push(item);
    }
  }
  return fixArray;
}

module.exports = dedupe;

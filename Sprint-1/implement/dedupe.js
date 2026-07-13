function dedupe(inputArray) {
  const uniqueElements = [];
  for (const el of inputArray) {
    if (uniqueElements.includes(el)) {
      continue;
    }
    uniqueElements.push(el);
  }
  return uniqueElements;
}

module.exports = dedupe;

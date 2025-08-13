function dedupe(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements.includes(arr[i])) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}

module.exports = dedupe;

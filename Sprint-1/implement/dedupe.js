function dedupe(arr) {
  const elements = [];
  for (const item of arr) {
    if (!elements.includes(item)) {
      elements.push(item);
    }
  }
  return elements;
}
console.log(dedupe([1, 2, 2, 3, 4, 4, 5, 6]));

module.exports = dedupe;


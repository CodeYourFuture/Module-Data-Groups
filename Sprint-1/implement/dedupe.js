function dedupe(elements) {
  if (elements.length === 0) return [];
  return elements.filter((item, index) => elements.indexOf(item) === index);
}
module.exports = dedupe;

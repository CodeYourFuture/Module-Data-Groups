function dedupe(arr) {
  const placeholder = [];

  if (arr.length === 0) {
    return arr;
  }

  arr.forEach((element) => {
    if (!placeholder.includes(element)) {
      placeholder.push(element);
    }
  });

  return placeholder;
}
module.exports = dedupe;

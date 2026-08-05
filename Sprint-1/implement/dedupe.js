function dedupe(input) {
  const newArray = [];
  if (input.length === 0) {
    return [];
  }
  for (const item of input) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}
module.exports = dedupe;

function dedupe(list) {
  const newArray = [];

  for (const item of list) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}
module.exports = dedupe;

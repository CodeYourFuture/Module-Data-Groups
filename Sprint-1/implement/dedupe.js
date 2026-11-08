function dedupe(items) {
  if (items.length === 0) {
    return [];
  }

  let singleOccur = [];
  items.forEach((i) => {
    if (!singleOccur.includes(i)) {
      singleOccur.push(i);
    }
  });
  return singleOccur;
}
module.exports = dedupe;

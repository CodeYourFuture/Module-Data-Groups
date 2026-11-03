function dedupe(elements) {
  const dedupedArr = [];

  for (element of elements) {
    if (!dedupedArr.includes(element)) {
      dedupedArr.push(element);
    }
  }

  return dedupedArr;
}

module.exports = dedupe;

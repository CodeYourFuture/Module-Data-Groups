function dedupe(arr) {
  if (arr.length === 0) return arr;
  else {
    dedupeArray = [];
    arr.forEach((element) => {
      if (!dedupeArray.includes(element)) dedupeArray.push(element);
    });
    return dedupeArray;
  }
}

module.exports = dedupe;

function dedupe(arr) {
  const array = [];
  for (const x of arr) {
    if (!array.includes(x)) {
      array.push(x);
    }
  }
  return array;
}

module.exports = dedupe;

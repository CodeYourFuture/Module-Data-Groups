function dedupe(arr) {
  if (arr.length === 0) {
    return [];
  }

  for (let element of arr) {
    if (arr.indexOf(element) === arr.lastIndexOf(element)) {
      return arr;
    } else {
      arr.splice(arr.lastIndexOf(element), 1);
    }
  }
  return arr;
}

console.log(dedupe([1, "d", 6, 1, 5, "d", null]));

module.exports = dedupe;

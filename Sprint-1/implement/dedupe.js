function dedupe(array) {
  let arrayCopy = [];
  if (array.length == 0) {
    return [];
  }
  array.forEach((element) => {
    if (!arrayCopy.includes(element)) {
      arrayCopy.push(element);
    }
  });
  return arrayCopy;
}

module.exports = dedupe;

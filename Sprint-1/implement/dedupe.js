function dedupe(array) {
  //   const dedupArray = new Set(array); //
  //   return dedupArray;
  return [...new Set(array)];
}

// console.log(dedupe(["a", "a", "a", "b", "b", "c"]));
module.exports = dedupe;

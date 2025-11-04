function dedupe(arr) {
  // This approach keeps only the first occurrence of each element. It checks if the current index is the first time the item appears in the array.
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// console.log(dedupe(["alpha", 2, "alpha", 4, 2, "beta"]));

module.exports = dedupe;

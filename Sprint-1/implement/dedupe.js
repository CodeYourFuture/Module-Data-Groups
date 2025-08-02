function dedupe(arr) {
  const newArray = [... new Set(arr)]
  return newArray;
};

// console.log(dedupe(["b", "c", "a", "b", "c", 1, "a", 2]));
module.exports = dedupe;

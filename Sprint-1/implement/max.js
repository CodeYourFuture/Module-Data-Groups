function findMax(elements) {
  // Makes a new list called elementFinder that only keeps items from elements
  // that are real numbers (not words, not NaN)
  const elementFinder = elements.filter(
    (el) => typeof el === "number" && !isNaN(el)
  );

  // If there are no numbers in the list, return -Infinity (which means “no biggest number”).
  if (elementFinder.length === 0) {
    return -Infinity;
  }

  // Otherwise, return the biggest number from elementFinder.
  return Math.max(...elementFinder);
}

console.log(findMax([1, 2, 20, 4, 5]));
console.log(findMax([1, "2", 3, "four", 5]));
console.log(findMax([NaN, null, 5, 10, "abc"]));
console.log(findMax([NaN, null, "5", "10", "abc"]));

module.exports = findMax;

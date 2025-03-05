function dedupe(elements) {
  if (elements.length === 0) return [];
  else if (elements.length === 1) return elements;

  for (let i = elements.length -1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (elements[j] === elements[i]) {
        elements.splice(i, 1);
        break;
      }
    }
  }
  return elements;
};

module.exports = dedupe;

console.log(dedupe([]));
console.log(dedupe(["a", "b", "c"]));
console.log(dedupe(['a','a','a','b','b','c']));
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8]));
console.log(dedupe([1, 2, 1]));

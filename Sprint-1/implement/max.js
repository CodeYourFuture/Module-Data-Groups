function findMax(elements) {
  if (!Array.isArray(elements) || elements.length === 0) {
    return -Infinity;
  }
    let max = -Infinity;

for (const x of elements) {
  if (typeof x === "number" && Number.isFinite(x)) {
    if (x > max) max = x;
  }
}

return max;
// removed .filter as this creates a new array so this avoids unnecessary clones
  
}

module.exports = findMax;

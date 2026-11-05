
function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }

  for (const item of elements) {
    if (typeof item !== "number" || Number.isNaN(item)) { 
      throw new Error("findMax requires an array of numbers");
    }
  }

  if (elements.length === 0) {
    return -Infinity;
  }

  let max = elements[0];
  for (const item of elements) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}

module.exports = findMax;

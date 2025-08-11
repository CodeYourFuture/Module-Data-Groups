function findMax(elements) {
  let maxElement = 0;

  if (elements.length === 0) {
    return -Infinity;
  }

  elements = elements.filter((num) => typeof num === "number");
  if (elements.length === 0) {
    return -Infinity;
  } else {
    elements = elements.sort((a, b) => a - b);

    maxElement = elements[elements.length - 1];
  }

  return maxElement;
}



module.exports = findMax;

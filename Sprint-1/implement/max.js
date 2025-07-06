function findMax(elements) {
  let maxElement = 0;

  if (elements.length === 0) {
    return "-Infinity";
  }

  elements = elements.filter((num) => typeof num === "number");
  if (elements.length === 0) {
    return "There is not any number in the array";
  } else {
    elements = elements.sort((a, b) => a - b);

    maxElement = elements[elements.length - 1];
  }

  return maxElement;
}

//detect numeric values
function numericValue(arrayElement) {
  if (typeof arrayElement === "number") {
    return true;
  }
}


module.exports = findMax;

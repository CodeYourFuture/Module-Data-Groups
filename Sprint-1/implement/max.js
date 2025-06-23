function findMax(elements) {
  if (!Array.isArray(elements)) {
    return null;
  }
  const new_elements = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (new_elements.length === 0) {
    return -Infinity;
  }
  let max_element = new_elements[0];
  for (let i = 1; i < new_elements.length; i++) {
    if (new_elements[i] > max_element) {
      max_element = new_elements[i];
    }
  }
  console.log(max_element);
  return max_element;
}

const arr = [1, 3, 5, 7];
console.log(findMax(arr));

module.exports = findMax;

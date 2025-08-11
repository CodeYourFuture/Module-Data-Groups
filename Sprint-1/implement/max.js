function findMax(elements) {
  if (!Array.isArray(elements)) {
    // checking if an input is an array
    return null;
  }
  const new_elements = elements.filter(
    // filtering the array elements (take to a new array just the valid numbers)
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (new_elements.length === 0) {
    // checking if an array is empty
    return -Infinity;
  }
  let max_element = new_elements[0]; // assigning to max_element variable value under index 0 in an array
  for (let i = 1; i < new_elements.length; i++) {
    // looping trough an array and comparison each
    if (new_elements[i] > max_element) {
      // value in an array with max_element to reassign it if the next
      max_element = new_elements[i]; // value is greater
    }
  }
  console.log(max_element);
  return max_element;
}

const arr = [1, 3, 5, 7];
console.log(findMax(arr));

module.exports = findMax;

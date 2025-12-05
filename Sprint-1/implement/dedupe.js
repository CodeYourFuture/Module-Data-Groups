function dedupe(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  const result = []; // array to store unique elements
  for (let element of arr) {
    if (!result.includes(element)) {
      // check if element is not already in result
      result.push(element); // add unique element to result array
    }
  }
  return result;
}
module.exports = dedupe;
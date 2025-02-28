function findMax(elements) {
    if (elements.length === 0) {
     return undefined; // Return undefined if the array is empty


}

let max = elements[0]; // Start by assuming the first element is max


for (let i = 1; i < elements.length; i++) {
  if (elements[i] > max) {
    max = elements[i]; // Update max if a larger number is found
  }
}

return max; // Return the largest value found

}

module.exports = findMax;


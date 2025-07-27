function findMax(elements) {
  
  if (!Array.isArray(elements) || elements.length == 0 ) {
    return -Infinity;
  }
  
  const numbers = elements.filter((n) => typeof n === "number");
  if (numbers.length==0) return -Infinity;

  //If an array with one number it should return the value of the element
  if (numbers.length == 1) {
    return numbers[0];
  }

  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max; 
}

module.exports = findMax;

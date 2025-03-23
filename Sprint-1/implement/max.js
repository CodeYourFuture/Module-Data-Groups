function findMax(elements) {
  if (elements.length === 0) { // if this array is empty return -Infinity
    return -Infinity;
  }
  let max = -Infinity;  // we are declaring a variable max and setting it to -Infinity
 
  for (let index = 0; index < elements.length; index++) { // we are looping through the array elements
    if (typeof elements[index] === "number" && elements[index] > max) { //if the element is a number and it is greater than max then update max
      max = elements[index];
    }
  }
  return max; // return the largest element or -Infinity if the array is empty. (we used let instead of const because we are updating the value of max)
}

module.exports = findMax;

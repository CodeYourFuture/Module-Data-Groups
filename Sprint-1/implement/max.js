function findMax(elements) {
  let numbers = [];
  // using for loop to extract numbers from the Array incase array is mixed
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      numbers.push(elements[i]);
    }
  }
  // Return the largest number, else -Infinity if no numbers are found
  if (numbers.length > 0) {
    return Math.max(...numbers);
  } else {
    return -Infinity;
  }
}

// console.log(findMax([1, 2, 3, 4, 10]));
// console.log(findMax([]));
// console.log(findMax([1]));
// console.log(findMax( [4, "hello", "fruit", 2, 5]))
module.exports = findMax;

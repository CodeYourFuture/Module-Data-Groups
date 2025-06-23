function sum(elements) {
  if (!Array.isArray(elements)) {
    // checking if an input is an array
    return null;
  }

  if (elements.length === 0) {
    // checking if an array empty to return 0
    return 0;
  }

  const new_elements = elements.filter(
    (item) => typeof item === "number" && !isNaN(item) // filtering the array elements (take to a new array just the valid numbers)
  );

  if (new_elements.length === 0) {
    return -Infinity; // checking if a new filtered array empty to return -Infinity
  }

  let sum = 0; // assigning new variable sum 0 value (as a start point)
  for (let i = 0; i < new_elements.length; i++) {
    // looping through an array elements
    sum = sum + new_elements[i]; // adding the elements consequently to start point
  }
  console.log(sum);
  return sum;
}

const arr = [1, 2, 5];
sum(arr);

//console.log(sum(arr));
module.exports = sum;

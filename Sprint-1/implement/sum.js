/*In this kata, you will need to implement a function that sums the numerical
 elements of an array


E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/
let a = [3, 5, 7, 9, 10];
let result = sum(a);
console.log(result);


function sum(elements) {
  let total = 0; // Start with 0
  for (let i = 0; i < elements.length; i++) {
    // Loop through each element
    if (typeof elements[i] === "number") {
      // Check if the element is a number
      total = total + elements[i]; // Add the number to total
    }
  }
  return total; // Return the final total sum
}

const elements = ['hey', 10, 'hi', 60, 10];
console.log(sum(elements));  // Print the result



module.exports = sum;

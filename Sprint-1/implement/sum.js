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

    // Loop through each element in the array
    for (let i = 0; i < elements.length; i++) {
        // Check if the element is a number
        if (typeof elements[i] === "number") {
            total = total + elements[i]; // Add the number to total
        }
    }

    return total; // Return the final total sum
}

// Example usage
const elements = ['hey', 10, 'hi', 60, 10];
console.log(sum(elements)); // Output: 80

module.exports = sum; // Export the function for testing


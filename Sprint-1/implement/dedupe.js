
//E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']

// dedupe.js
// dedupe.js
function dedupe(elements) {
    // Start with an empty array to store unique items
    let uniqueElements = [];

    // Loop through each item in the original array
    for (let i = 0; i < elements.length; i++) {
        let currentElement = elements[i]; // Get the current element

        // Check if the current element is already in the uniqueElements array
        if (!uniqueElements.includes(currentElement)) {
            // If it's not in the uniqueElements array, add it
            uniqueElements.push(currentElement);
        }
    }

    // Return the array with only unique items
    return uniqueElements;
}

// Example usage:
const elements = ["a", "a", "a", "b", "b", "c", "c", "d", "f"];
console.log(dedupe(elements)); // Output: ["a", "b", "c", "d", "f"]


module.exports = dedupe; // Export the function so it can be used in tests





/*
function dedupe(array) {
  return [...new Set(array)];
}

const fruits = ["apple", "banana", "apple", "orange", "banana"];
const uniqueFruits = dedupe(fruits);

console.log(uniqueFruits); // Output: ["apple", "banana", "orange"]*/





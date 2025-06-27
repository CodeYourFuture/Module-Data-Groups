const fs = require('fs');
const path = require('path');

// Step 1: Read the file as text
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');

// Split the file into lines 
const numbers = input
  .split('\n') // Split by new lines
  .map(Number);// converts string to real numbers

console.log(numbers); // Example output

// Example logic: sum all numbers
const result = numbers.reduce((acc, num) => acc + num, 0);
console.log("Result:", result);
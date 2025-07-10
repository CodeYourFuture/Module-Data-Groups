const fs = require('fs');
const path = require('path');
// Read file synchronously (assumes input.txt is in the same folder)
const filePath = path.join(__dirname, 'input.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');
// Process the file: split lines, clean, convert to numbers
const list = fileContent
  .split('\n')
  .map(line => line.trim())
  .filter(line => line !== '')
  .map(Number);

// Sum function
function sum(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}

// Calculate and log the result
const total = sum(list);
console.log(`${total} is the total`);

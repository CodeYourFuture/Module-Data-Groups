const fs = require("fs"); // Import the File System module

// Read the file content
const input = fs.readFileSync("input.txt", "utf8"); // 'utf8' ensures the data is read as a string

console.log("Current directory:", process.cwd());

const inputArray = input.split("\n");
console.log(inputArray);

const numberArray = inputArray.map(Number);
console.log(numberArray);

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(sum(numberArray));

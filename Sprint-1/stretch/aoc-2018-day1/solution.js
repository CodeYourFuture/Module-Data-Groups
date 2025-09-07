const fs = require("fs");

// Read input.txt file synchronously
const input = fs.readFileSync("input.txt", "utf8");

// Convert input lines to an array of numbers
const changes = input.trim().split("\n").map(Number);

function calculateFrequency(changes) {
  let frequency = 0;
  for (const change of changes) {
    frequency += change;
  }
  return frequency;
}

const result = calculateFrequency(changes);
console.log("Resulting frequency:", result);


// the solution was 582
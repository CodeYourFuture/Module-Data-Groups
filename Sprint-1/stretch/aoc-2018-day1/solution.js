const fs = require("fs");

// Load the input file
const input = fs.readFileSync("input.txt", "utf-8")
  .split("\n")           // Split by line
  .filter(Boolean)       // Remove empty lines
  .map(Number);          // Convert each line to a number

function findFirstRepeatedFrequency(changes) {
  const seen = new Set([0]);
  let frequency = 0;
  let index = 0;

  while (true) {
    frequency += changes[index];
    if (seen.has(frequency)) {
      return frequency; // First repeated frequency found
    }
    seen.add(frequency);
    index = (index + 1) % changes.length; // Loop through the list
  }
}

const firstRepeated = findFirstRepeatedFrequency(input);
console.log("First frequency reached twice:", firstRepeated);


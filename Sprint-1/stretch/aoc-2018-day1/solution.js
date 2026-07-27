const fs = require("fs");

const text = fs.readFileSync("./input.txt", "utf8");

const numbers = text
  .trim()
  .split("\n")
  .map(Number);

let frequency = 0;

for (const number of numbers) {
  frequency += number;
}

console.log(frequency);
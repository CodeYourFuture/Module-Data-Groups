const fs = require("fs");
const path = require("path");

const changes = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split(/\r?\n/)
  .filter((line) => line.trim() !== "")
  .map(Number);

// Part 1: resulting frequency after all changes
const finalFrequency = changes.reduce((total, change) => total + change, 0);
console.log("Part 1:", finalFrequency);

// Part 2: first frequency reached twice
let frequency = 0;
const seen = new Set([0]);
let firstRepeat;
while (firstRepeat === undefined) {
  for (const change of changes) {
    frequency += change;
    if (seen.has(frequency)) {
      firstRepeat = frequency;
      break;
    }
    seen.add(frequency);
  }
}
console.log("Part 2:", firstRepeat);

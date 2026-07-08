const fs = require("fs");
const path = require("path");

// Read input relative to this file so script can be run from anywhere
const data = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const changes = data
  .split(/\r?\n/)
  .map((s) => s.trim())
  .filter(Boolean)
  .map(Number);

// Part 1: final frequency after one pass
const finalFrequency = changes.reduce((acc, change) => acc + change, 0);

// Part 2: first repeated cumulative frequency (iterate the list repeatedly)
function findFirstDuplicate(arr) {
  const seen = new Set([0]);
  let freq = 0;

  while (true) {
    for (const change of arr) {
      freq += change;
      if (seen.has(freq)) return freq;
      seen.add(freq);
    }
  }
}

const firstDuplicate = findFirstDuplicate(changes);

console.log("Final frequency (part 1):", finalFrequency);
console.log("First repeated frequency (part 2):", firstDuplicate);

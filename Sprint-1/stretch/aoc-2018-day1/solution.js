const fs = require("fs");
const path = require("path");

const changes = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .trim()
  .split("\n")
  .map(Number);

// Part 1: sum all frequency changes
const part1 = changes.reduce((acc, n) => acc + n, 0);
console.log("Part 1 - Resulting frequency:", part1);

// Part 2: find the first frequency reached twice
function firstRepeatedFrequency(changes) {
  const seen = new Set();
  let freq = 0;
  seen.add(freq);

  while (true) {
    for (const change of changes) {
      freq += change;
      if (seen.has(freq)) return freq;
      seen.add(freq);
    }
  }
}

const part2 = firstRepeatedFrequency(changes);
console.log("Part 2 - First repeated frequency:", part2);

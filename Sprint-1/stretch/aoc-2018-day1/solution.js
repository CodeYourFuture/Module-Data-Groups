
import fs from "node:fs";

//  Puzzle input
const changes = fs
  .readFileSync(new URL("./input.txt", import.meta.url), "utf8")
  .trim()
  .split("\n")
  .map(Number);

// Part One
function calculateFrequency(changes) {
  let frequency = 0;

  for (let change of changes) {
    frequency += change;
  }

  return frequency;
}

// Part Two
function findRepeatedFrequency(changes) {
  let frequency = 0;
  const visited = new Set([0]);

  while (true) {
    for (let change of changes) {
      frequency += change;

      if (visited.has(frequency)) {
        return frequency;
      }

      visited.add(frequency);
    }
  }
}

// Display answers
console.log("Part One:", calculateFrequency(changes));
console.log("Part Two:", findRepeatedFrequency(changes));

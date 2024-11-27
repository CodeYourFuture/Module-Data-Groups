const fs = require("fs");
const path = require("path");

// Get the current directory of the script
const filePath = path.join(__dirname, "./input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const changes = data.split("\n").filter((line) => line.trim() !== "");

  // Part One: Calculate the final frequency
  const finalFrequency = calculateFrequency(changes);
  console.log("Final frequency after all changes:", finalFrequency);

  // Part Two: Find the first repeated frequency
  const firstRepeatedFrequency = findFirstRepeatedFrequency(changes);
  console.log("First repeated frequency:", firstRepeatedFrequency);
});

function calculateFrequency(changes) {
  //   let frequency = 0;
  //   for (const change of changes) {
  //     frequency += parseInt(change, 10);
  //   }
  return changes.reduce((acc, change) => acc + Number(change), 0);
}
function findFirstRepeatedFrequency(changes) {
  let frequency = 0;
  const seenFrequencies = new Set([frequency]);

  while (true) {
    for (const change of changes) {
      frequency += Number(change);
      if (seenFrequencies.has(frequency)) {
        return frequency;
      }
      seenFrequencies.add(frequency);
    }
  }
}

const fs = require("fs");
const path = require("path");

function calculateFrequency(changes) {
  return changes.reduce((acc, change) => acc + change, 0);
}

function readInputFile(filePath) {
  const inputFile = path.resolve(filePath);
  const data = fs.readFileSync(inputFile, "utf-8");
  const changes = data.split("\n").map((line) => parseInt(line, 10));
  return changes;
}

module.exports = { calculateFrequency, readInputFile };

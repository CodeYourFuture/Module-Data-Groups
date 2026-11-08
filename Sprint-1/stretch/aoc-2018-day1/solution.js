const fs = require("fs");
const inputText = fs.readFileSync("input.txt", "utf8");

function calculateResultingFrequency(frequencyChangeLines) {
  const lines = frequencyChangeLines.split("\n");
  const frequencyChangeAsNumbers = lines.map((change) => Number(change));
  let resultingFrequency = 0;

  for (const frequencyChange of frequencyChangeAsNumbers) {
    resultingFrequency += frequencyChange;
  }
  return resultingFrequency;
}
console.log(calculateResultingFrequency(inputText));

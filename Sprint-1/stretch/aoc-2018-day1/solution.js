const fs = require('fs');

function calibrateFrequency(changes) {
  let currentFrequency = 0;

  for (const change of changes) {
    currentFrequency += parseInt(change, 10);
  }

  return currentFrequency;
}

const filename = 'input.txt';
const fileContents = fs.readFileSync(filename, 'utf8');
const changes = fileContents.split('\n').map(line => line.trim());

const result = calibrateFrequency(changes);
console.log("Resulting Frequency:", result);


 

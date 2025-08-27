const fs = require('fs');
const path = require('path');
const inputFilePath = path.join(__dirname, 'input.txt');

const inputString = fs.readFileSync(inputFilePath, 'utf8');

function solvePart1(inputString) {
    const changes = inputString.trim().split('\n').filter(line => line.length > 0);
    const numericChanges = changes.map(change => Number(change));
    let currentFrequency = 0;

    for (const change of numericChanges) {
        currentFrequency += change;
    }

    return currentFrequency;
}

const finalFrequency = solvePart1(inputString);
console.log(finalFrequency);

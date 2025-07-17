const fs = require('node:fs');
let fileData = fs.readFileSync('./input.txt', 'utf-8');

function calculateFrequency(fileData) {
    fileData = fileData.split("\n");
    frequency = 0;
    for (let element of fileData) {
        if (!isNaN(element)) {
            frequency += Number(element);
        }
    }
    return frequency;
}

console.log(`Resulting frequency is: ${calculateFrequency(fileData)}`);
const fs = require('fs');
const path = require('path');
// Function to calculate the resulting frequency
const calculateFrequency = (changes) => {
    let frequency = 0; // Start at zero
    for (let change of changes) 
        frequency += parseInt(change, 10); 
    return frequency;
};

const inputFilePath = path.join(__dirname, 'input.txt');
let puzzleInput;

try {
    const fileContent = fs.readFileSync(inputFilePath, 'utf-8');
    puzzleInput = fileContent.split(/\r?\n/).filter(line => line.trim() !== ''); 
} catch (error) {
    console.error('Error reading input file:', error);
    process.exit(1); 
}

// Calculate and log the resulting frequency
const result = calculateFrequency(puzzleInput);
console.log('Resulting frequency:', result);

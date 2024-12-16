const fs = require('fs');

function calculateResultingFrequency() {
    // Read the input file
    const data = fs.readFileSync('Sprint-1/stretch/aoc-2018-day1/input.txt', 'utf8');
    
    // Split the data into an array of frequency changes
    const frequencyChanges = data.trim().split('\n').map(Number);
    
    // Initialize the starting frequency
    let currentFrequency = 0;
    
    // Apply each frequency change
    for (const change of frequencyChanges) {
        currentFrequency += change;
    }
    
    // Return the resulting frequency
    return currentFrequency;
}

// Call the function and log the result
console.log(calculateResultingFrequency());

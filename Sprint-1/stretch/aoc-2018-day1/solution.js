// Import the input string from the input.js file
const inputString = require('./input');

// Solves the Advent of Code Day 1: Chronal Calibration problems.
// It calculates the resulting frequency after applying all changes and finds 
// the first repeated frequency.
function solveChronalCalibration(frequencyChanges) {
    // Calculate the resulting frequency by summing all frequency changes
    let resultingFrequency = 0;
    for (const change of frequencyChanges) {
        resultingFrequency += change;
    }

    // Find the first repeated frequency by tracking seen frequencies in a Set
    let currentFrequency = 0;
    const seenFrequencies = new Set();
    seenFrequencies.add(0);

    // Initialize the first repeated frequency as null
    let firstRepeatedFrequency = null;

    // Continue looping until we find the first repeated frequency
    while (firstRepeatedFrequency === null) {
        for (const change of frequencyChanges) {
            currentFrequency += change;

            if (seenFrequencies.has(currentFrequency)) {
                firstRepeatedFrequency = currentFrequency;
                break;
            }

            seenFrequencies.add(currentFrequency);
        }
    }

    // Return the results as an object
    return {
        resultingFrequency: resultingFrequency,
        firstRepeatedFrequency: firstRepeatedFrequency
    };
}

// Convert the input string into an array of numbers
const frequencyChangesArray = inputString.trim().split('\n').map(Number);

// Solve the problem and print results
const results = solveChronalCalibration(frequencyChangesArray);

console.log(`
  --- Chronal Calibration Results ---
  Part One (Resulting Frequency): ${results.resultingFrequency}
  Part Two (First Repeated Frequency): ${results.firstRepeatedFrequency}
`);

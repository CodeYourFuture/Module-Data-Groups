// 〰️ Advent of Code - Day 1: Chronal Calibration
// 〰️ This program calculates the resulting frequency by processing changes from a file (input.txt).
// 〰️ Each line in the file represents a frequency change (e.g., +1, -2, +3).
// 〰️ The goal is to sum all the changes to find the final frequency.


// 〰️ Step 1: Import the 'fs' module to work with the file system.
const fs = require('fs');

// 〰️ Step 2: Import the 'path' module to construct absolute file paths (platform independent).
const path = require('path');

// 〰️ Step 3: Construct the absolute path to the input.txt file.
// 〰️ The file is located in the same folder as the script, so we use '__dirname' to get the current script directory.
const filePath = path.join(__dirname, 'input.txt');

// 〰️ Step 4: Read the content of the input.txt file.
// 〰️ - We use the 'utf8' encoding to read the file as a string.
// 〰️ - The callback function handles the file content or an error if something goes wrong.
fs.readFile(filePath, 'utf8', function (error, data) {
  // 〰️ Step 5: If there's an error (e.g., the file doesn't exist), log it and stop the program.
  if (error) {
    console.log('Error reading the file:', error);
    return;
  }

  // 〰️ Step 6: Split the file content into an array of strings, where each string is a line from the file.
  // 〰️ - The file has one frequency change per line, so we use '\n' (newline) to separate them.
  const changes = data.split('\n'); 

  // 〰️ Step 7: Initialize the starting frequency to 0.
  let frequency = 0; 

  // 〰️ Step 8: Loop through the array of changes and add each value to the frequency.
  // 〰️ - Each value is a string, so we convert it to a number using parseInt.
  // 〰️ - We also check for invalid lines (e.g., empty lines) and skip them.
  for (let i = 0; i < changes.length; i++) {
    const change = parseInt(changes[i], 10); // 〰️ Convert the string to a number
    if (!isNaN(change)) { // 〰️ Skip if the line isn't a valid number.
      frequency += change; // 〰️ Add the change to the current frequency.
    }
  }

   // 〰️ Step 9: Print the final calculated frequency to the console.
  console.log('Final frequency:', frequency); 
  console.log('File path:', filePath);
});
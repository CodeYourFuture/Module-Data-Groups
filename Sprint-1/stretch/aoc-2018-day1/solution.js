// Starting with a frequency of zero, what is the resulting frequency after all of the changes in frequency have been applied?

// Outputs
// Current frequency  0, change of +1; resulting frequency  1.
// Current frequency  1, change of -2; resulting frequency -1.
// Current frequency -1, change of +3; resulting frequency  2.
// Current frequency  2, change of +1; resulting frequency  3.
// In this example, the resulting frequency is 3.

// Here are other example situations:

// +1, +1, +1 results in  3
// +1, +1, -2 results in  0
// -1, -2, -3 results in -6

/*
To be able to complete this function we need to access the values in the input.txt file in the same directory therefore, we use require("fs") to read the file synchronously (the program will wait for the file to be completely read before moving on to the next line of code).
This is the name of a built-in Node.js module called the "File System" module.
"require("fs")" loads the module and gives access to its file-handling functions (like readFileSync, readFile and writeFileSync). 
The fs module allows us to read and write files in the file system, which is necessary for this task to read the input.txt file synchronously. 
Here the "fs" variable name is just a convention (short for "file system") but it can be anything.

The variable "data" stores the contents of the "input.txt" file, which is read using fs.readFileSync. We pass the filename and the 'utf8' arguments to tell Node.js to read the file as a text string using UTF-8 encoding rather than getting binary data.
*/
const fs = require("fs");
const data = fs.readFileSync("./input.txt", "utf8");

function calculateFrequency(data) {
  return data
    .split("\n") //split the input string ino an array by taking the element from each line in the input file
    .map((line) => line.trim()) //trim each line to remove any leading or trailing whitespace or newline characters
    .filter((line) => line) //filter out any empty lines
    .map(Number) //convert each string in the array to a number;
    .reduce((sum, num) => sum + num, 0); //reduce the array of numbers to a single sum, starting from 0
}

console.log(calculateFrequency(data)); //Output is 529

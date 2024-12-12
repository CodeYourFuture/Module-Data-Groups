//to deal with input.txt I had to look up how to deal with text files in Javascript

//require('fs') is a node method that can be used to access files

const fs = require('fs');
//the input from input.txt
//for some reason this is only working with the absolute path
const textInput = fs.readFileSync('/home/serna-malala/CYF/Module-Data-Groups/Sprint-1/stretch/aoc-2018-day1/input.txt', 'utf-8');


//split the lines and make sure that they are numeric
//.split converts each line into an array
//.map(Number) basically makes each elemnt in the array a numeric value
const eachLine = textInput.split('\n').map(Number);

let value = 0;

for (const newLineValue of eachLine) {

    value += newLineValue;
}
console.log(value);
return value;


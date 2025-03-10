const fs = require("fs"); // created a variable called fs and using the file system method to import our input.txt file.

const input = fs.readFileSync("input.txt", "utf8"); // created a variable called input and a method of readFileSync for importing our input.txt file while also specifying Node read the file as string and not as binary that why we included utf8 encoding.

const sum = input.split("\n").map(Number); // created a variable of sum while implementing  .split(/n) method which split the string by new line. and also map(Number) which convert a  string into a number. 

let myInput = 0; // declared a variable called myIunput

for (let index = 0; index < sum.length; index++)  // implemented a for loop to loop through the array and sum myInput which is 0 to sum arr, which is the input.txt file. 
  myInput += sum[index];


console.log(myInput); // evaluating my input

const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8");
function calculateFrequency(arg1){
    let inputToArray = arg1.split('\n').map(Number);
    let updatedFrequency = inputToArray.reduce((a,b)=> a + b, 0);
    return updatedFrequency;
}
console.log(calculateFrequency(input));

//another way of writing this code using for loop!: 

function calculateFrequency_V2(arg_v2){
const arg_v2_converted = arg_v2.split("\n").map(Number);
let frequency = 0;
for (const item of arg_v2_converted){
    frequency+=item;
}
return frequency
}
console.log(calculateFrequency_V2(input));
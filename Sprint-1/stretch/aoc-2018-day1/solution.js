
const fs = require('fs');

const data = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });
const sumNumFileArray = data.split("\n").reduce(((sum,num)=> sum + Number(num)),0)
console.log(sumNumFileArray);//595
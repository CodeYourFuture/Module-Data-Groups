const fs = require('fs');

//Using the sum function that iterates through an array and accumulates the sum of all elements in the array we implemented earlier in implement/sum.js
const sum = require('../../implement/sum.js');

//Storing input data in an array as string elements
const input = fs.readFileSync('./input.txt', 'utf8').split('\n');

// Converting input data to integers
const numbers = input.map(Number);

// Calculating the sum of all numbers in the array
const totalSum = sum(numbers);

console.log(`The sum of all numbers in the array is: ${totalSum}`);
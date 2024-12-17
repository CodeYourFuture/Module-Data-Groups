// Create a function that takes three numbers as parameters
//   and returns the largest of the three

function largestNum(num1, num2, num3) {
   let num = num1; 
  
  if (num2 > num) { 
    num = num2; 
  }
  
  if (num3 > num) { 
    num = num3; 
  }
  
  return num; 
}


console.assert(largestNum(5, 3, 7) === 7, "largest number in third position");
console.assert(largestNum(2, 9, 3) === 9, "largest number in second position");
console.assert(largestNum(9, 2, 3) === 9, "largest number in first position");
console.assert(
  largestNum(1.3, 2.7, 3.1) === 3.1,
  "largest number from decimal numbers"
);
console.assert(
  largestNum(-3, -4, -5) === -3,
  "largest number from negative numbers"
);

function tally(array) {                    //(array) is the input to the function

     if (!Array.isArray(array)){              //checking if array is actually an array
  throw new Error("Input must be an array");
  }
    
  if (array.length === 0){                //if array is empty return a empty array 
    return []
  }
  
 
  const result = {}                       //creates result as an empty object which will store the counts
  

  for (const item of array){             //'for' loops through every item in the array 
  if (result[item]){                    // checks if the item is already in the result{}
      result[item]++}                   // If it is then '++' tells it to add 1 to the value 
    
    else {
      result[item] = 1;                // else is saying that if it doesn't exist then we give it a value of 1 
    }
    
}

   return result;
}

module.exports = tally;

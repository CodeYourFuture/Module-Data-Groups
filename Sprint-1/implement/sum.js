function sum(arr) {
    let sumTotal = 0 ; // let sumTotal = 0

    for (let index = 0; index < arr.length; index++) { // loop through the array
        const num = arr[index]; // declare a variable num to hold the value of the current arr[index]

         
        if (typeof num === 'number') { // check if the value of the current arr is a number
            sumTotal +=arr[index];  // add the value of the current arr[index] to the sumTotal. 
           
        }
        
    }
      return sumTotal; // return the sumTotal.

   
    }

module.exports = sum;

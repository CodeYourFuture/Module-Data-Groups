function sum(elements) {
    if (elements.length === 0) return 0; // if array is input is empty returns 0

   let total = 0; // create a variable to hold the sum

   // iterate over each element in the array
    for (const value of elements){
        // checks if each of the values are numbers
        if (typeof value === `number`){
            // adds the numbers to the total sum
            total += value;
        }
    }
return total; // returns the total sum after the loop has finished adding all the numbers
}

module.exports = sum;

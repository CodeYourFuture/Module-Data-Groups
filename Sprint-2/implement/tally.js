function tally(arr) {
 if (!Array.isArray(arr)) { 
    //this line checks if arr is not an array, if it's not an array it will throw error.
        throw new Error("not an array");
      }
    
    const count = {};
 for(const item of arr){
    count[item]=(count[item]||0)+1; // this line is where we update the count of each item in the count object.
    //count[item]=> is checking if already exists as a key in the count object.
    // ||0 =>  this changes the undefined count to zero if the item have not seen in the count object and then we add 1 .
 } 
 return count;  
}

module.exports = tally;

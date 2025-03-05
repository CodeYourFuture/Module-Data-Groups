function tally(arr) {
    if(!Array.isArray(arr)){
        throw new Error ("Input must be an array");
    }
    const result = {};
 // Loop through the array to count occurrences of each item
    for(let item of arr){
        result[item] = (result[item] || 0) +1;
    }
    return result;
}

module.exports = tally;

function findMax(elements) {
    let maxNum = -Infinity; // lets say the first element is the smallest possible element
    
    if(elements.length === 0){ //for empty array return -Infinity
        return "Invalid Input : Empty Array cant have Maximum num.";
    }

    for(let num of elements){ //loop for each element of the array and 

        if (typeof num === 'number' && num > maxNum){ //only do if the type of the element is number and is larger
            maxNum = num ;
        }
        
    }
    return maxNum;
}
//if all our array elements are other data types since it skips all in our look it avoids them and form an empty array then it will return -Infinity.
module.exports = findMax;
console.log(findMax([]));
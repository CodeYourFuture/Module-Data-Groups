function dedupe(arr) {
    let newArr = [];    //initializing an empty newArr to store our new returned array
    if (arr.length === 0){ // checking if the array is empty i.e length is zero
        return []; // return an empty array
    }
    for(let n of arr ){ // for each members of the arr which is n  
         if (!newArr.includes(n)) //if our empty newArr dont includes n (even once) push it 
            { 
                newArr.push(n);
            }
                    }
    return newArr; // after operating return our newArr
}

module.exports = dedupe;

/* For Note . this is a short code to return result of an array with out the duplicated elements
function dedupe(arr) {
  return [...new Set(arr)];
}
*/

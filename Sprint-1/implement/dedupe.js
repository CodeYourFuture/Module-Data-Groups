function dedupe(array) {
    if (array.length == 0){ // check if array is empty
        return [];
    }
   let mySet = new Set(array); // create set mySet
   let dedupeArray = Array.from (mySet); // create new array from the set mySet
   return dedupeArray;
}

module.exports = dedupe;
function contains(objectGiven, element) {

    //loop through the object property
    for (const property in objectGiven) {
        if (property === element) {
            //if property is the same as the given element
            return true;
        }
        return false;
    }

}

console.log(contains({ a: 1, b: 2 }, 'a'));
console.log(contains({ a: 1, b: 2 }, 'c'));
console.log(contains(['a', 1, 'b', 2], 'c'));

module.exports = contains;
function dedupe(array) {
    let noDuplicates = [];
    for (let i=0; i<array.length; i++){
        if (!noDuplicates.includes(array[i])){
            noDuplicates.push(array[i]);
        }
    }
    return noDuplicates;
}
console.log(dedupe([]));
console.log(dedupe([1,1,2,2,6,7,9,9]));
console.log(dedupe([1,2,3]));
console.log(dedupe([2,2,1]));

function dedupe(arr) {
    // initialize an empty array 
    let dedupedArr =[];
    for( element of arr){
        if(!dedupedArr.includes(element)){
            dedupedArr.push(element);
        }
    
    }
    return dedupedArr
}
module.exports = dedupe;
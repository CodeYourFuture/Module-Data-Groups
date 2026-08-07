function findMax(elements) {
    if (elements.length === 0){
        return -Infinity;
    }
    let max = -Infinity;
   for(let item of elements){
    if(typeof item !== "number"){
        continue;
    }
    if(item > max){
        max = item;
    }
   }
    return max;
}
module.exports = findMax;

function findMax(elements) {
    let filtered = elements.filter((el) => typeof el === "number");
    if (filtered.length === 0){
       return -Infinity
    } 
    if (filtered.length === 1) {
        return filtered[0]
        }
    
    
   let max = filtered.reduce((a,b)=>Math.max(a,b))
   return max
    
}
console.log(findMax([1.5, "text", 2.3, null, 0.8]));


module.exports = findMax;

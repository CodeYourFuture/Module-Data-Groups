function findMax(elements) {
    if (elements.length === 0) return -Infinity; 
    let max = elements[0]; 
    for (let i = 1; i < elements.length; i++) {
        if (elements[i] > max) {
            max = elements[i];
        }
    }
    return max;
}
let myArr = [1,'a',2, 3]
console.log(findMax(myArr));

module.exports = findMax;

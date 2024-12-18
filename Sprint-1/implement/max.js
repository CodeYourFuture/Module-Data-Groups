function findMax(array) {
    if(array.length ===0){
        return -Infinity;
    }

    let max = -Infinity;
    let closestNegative = null;

    for (let i = 0; i < array.length; i++) {
        if (typeof arr[i] === 'number') {
            if(arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < 0) {
                if(closestNegative === null || arr[i] > closestNegative){
                    closestNegative = arr[i];
                }
            }
        }
    }
if (max === -Infinity) {
    return closestNegative === null ? closestNegative : null;
}
}
    
//const numbers = [-2, -4, -5, 0];
//let maxNumber = findMax(numbers, numbers.length);
//console.log(maxNumber)
module.exports = findMax;

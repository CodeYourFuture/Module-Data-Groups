function findMax(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

module.exports = findMax;

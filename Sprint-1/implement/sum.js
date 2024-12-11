function sum(elements) {
    let total = 0;

    for(let i = 0; i < elements.length; i++){
        total += elements[i];
    }
    return total;
}

module.exports = sum;

console.log(sum([20, 10, 5]));
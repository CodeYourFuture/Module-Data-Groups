function sum(elements) {
    let sum = 0;

    for ( const element of elements) {
        if (Number.isFinite(element)) {
        sum += element;
        }
    }

    return sum;
}

console.log(sum([0.5, 2.5, 3.5]));
module.exports = sum;

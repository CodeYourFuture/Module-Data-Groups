function sum(elements) {
    if (elements.length == 0) {
        return 0;
    }
    else if (elements.length == 1) {
        return sum[0];
    }
    else if (elements.length > 1) {
        const numbersOnly = elements.filter(element => typeof element === 'number');
        if (numbersOnly.length == 0) {
            return Infinity;
        }
        const sumValues = numbersOnly.reduce((accumulator, currentValue) => accumulator + currentValue);
        return sumValues;
    }
}
console.log(sum([-1, -5, -3]));
module.exports = sum;

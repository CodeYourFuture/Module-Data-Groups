function sum(elements) {
    const numbers = elements.filter(element => typeof element === 'number'&& !isNaN(element) && element !== Infinity && element !== -Infinity);
    if (numbers.length === 0) {
        return 0;
    }
    let totalSum =  numbers.reduce((accu ,curr)=> accu + curr,0)
    return totalSum
}

module.exports = sum;

let x = sum([Infinity, -Infinity]);
console.log(x)
 
function sum(elements) {
    const numbers = elements.filter(element => typeof element === 'number');
    if (numbers.length === 0) {
        return 0;
    }
    let totalSum =  numbers.reduce((accu ,curr)=> accu + curr,0)
    return totalSum
}

module.exports = sum;

 
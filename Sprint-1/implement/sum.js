function sum(list) {
    const numbers = list.filter(n => Number.isFinite(n));
    let total = 0;
    for (n of numbers) {total += n};
    return total;
}

module.exports = sum;

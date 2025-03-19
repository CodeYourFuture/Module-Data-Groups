function sum(elements) {
    const onlyNumbers = elements.filter(element => typeof element === "number");
    let total = 0;
    for (let i = 0; i < onlyNumbers.length; i++) {
        total += onlyNumbers[i];
        }
        return total;
}
module.exports = sum;

console.log(sum([10, 20, 30]));
console.log(sum(['hey', 10, 'hi', 60, 10]));
console.log(sum([-10, -20, 30, 40]));

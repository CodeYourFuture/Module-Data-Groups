function sum(elements) {
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
        sum += elements[i];
    }
    return sum
}

let numbers = ["c", 3, 4, "hi", 7];
console.log(sum(numbers));

module.exports = sum;

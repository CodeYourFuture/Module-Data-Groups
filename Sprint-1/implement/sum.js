function sum(elements) {

    // 〰️ Ensure the input is an array
    if (!Array.isArray(elements)) {
        return 0; // 〰️ Return 0 if input is not an array
    }

    let total = 0; // 〰️ Initialize the sum

    for (let i = 0; i < elements.length; i ++) {
        // 〰️ Check if the element is a number and not NaN or Infinity
        if (typeof elements[i] === "number" && !isNaN(elements[i])) { 
            total += elements[i]; // 〰️ Add the number to the total
        }
    }

    return total; // 〰️ Return the total sum
    

}

console.log(sum([]));
console.log(sum([42]));
console.log(sum([-10, -20, 30]));
console.log(sum([1.5, 2.5, 3.5]));
console.log(sum(['hello', 10, 'world', 20]));
console.log(sum(['a', 'b', 'c', null, undefined, {}]));
console.log(sum("not an array"));
console.log(sum(123));
console.log(sum([Infinity, 1]));
console.log(sum([Infinity, Infinity]));
console.log(sum([NaN, 1]));
console.log(sum([Infinity, -Infinity]));

module.exports = sum;

function sum(list) {
    // Remember this filters the list to only include numbers and ignore strings or other types
    const filterList = list.filter(
        (el) => typeof el === "number" && !isNaN(el)
    );
    
    // If there are no numbers, return 0
    if (filterList.length === 0) {
        return 0;
    }
    // If the sum is negative, return 0; otherwise, return the sum
    const total = filterList.reduce((acc, curr) => acc + curr, 0);
    return total;
}

console.log(sum([10, 20, 30])); // 60
console.log(sum(['hey', 10, 'hi', 60, 10])); // 80
console.log(sum([])); // 0
console.log(sum([-10, -20, 30])); // 0

module.exports = sum;

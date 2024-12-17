function findMax(elements) {

    let maxElement = -Infinity;


    //loop through element that is considered a number

    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] === "number" || !isNaN(elements[i])) {

            let compareNumber = Number(elements[i]);
            //loop through each elemnt and compare the value against -Infinity
            if (compareNumber >= maxElement) {
                maxElement = compareNumber;
            }
        }
    }

    return maxElement


}

// console.log(findMax([30, 50, 10, 40]))
// console.log(findMax(['hey', 10, 'hi', 60, 10]))
//console.log(findMax(['serna', 'malala', 'sernamalala', 'hello', 'annyeong', 'hola', 'bonjour']))

console.log(findMax(['serna', -25, 5.45, 'hello', 4.5, 98, 839, "840"]))
console.log(findMax(['serna', -25, 5.45, 'hello', 4.5, 98, 839, [840]]))
console.log(findMax(['serna', -25, 5.45, 'hello', 4.5, 98, 839, ["840"]]))

module.exports = findMax;

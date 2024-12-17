function sum(elements) {

    let isNumberAvailable = false;
    let sumValue = 0;

    if (elements.length === 0) {
        //return 0 if list is empty as stated in the instructions
        return 0;
    }

    else {
        //loop through element that is considered a number and add it to sumValue

        for (let i = 0; i < elements.length; i++) {
            if (!isNaN(Number(elements[i]))) {

                isNumberAvailable = true;

                sumValue += Number(elements[i]);

            }

        }
        //if there are no numerical values
        if (!isNumberAvailable) {
            return -Infinity;
        }

        return sumValue
    }
}

// console.log(sum([30, 50, 10, 40]))
// console.log(sum(['hey', 10, 'hi', 60, 10]))
// console.log(sum(['serna', 'malala', 'sernamalala', 'hello', 'annyeong', 'hola', 'bonjour']))

console.log(sum([1, "5", 1]));

module.exports = sum;

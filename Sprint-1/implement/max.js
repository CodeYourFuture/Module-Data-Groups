function findMax(elements) {

    let maxElement = -Infinity;
    let numberAvailable = false;

    if (elements.length === 0) {
        //return infinity if list is empty as stated in the instructions
        return -Infinity;
    }

    else {
        //loop through element that is considered a number

        for (let i = 0; i < elements.length; i++) {
            if (!isNaN(elements[i])) {

                numberAvailable = true;
                //loop through each elemnt and compare the value against -Infinity
                if (Number(elements[i]) > maxElement) {
                    maxElement = Number(elements[i]);

                }
            }

        }
        if (!numberAvailable) {
            return -Infinity;
        }

        return maxElement
    }
}

// console.log(findMax([30, 50, 10, 40]))
// console.log(findMax(['hey', 10, 'hi', 60, 10]))
//console.log(findMax(['serna', 'malala', 'sernamalala', 'hello', 'annyeong', 'hola', 'bonjour']))
module.exports = findMax;

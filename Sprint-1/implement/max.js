function findMax(elements) {

    let maxElement = -Infinity;

    if (elements.length === 0) {
        //return infinity if list is empty as stated in the instructions
        return Infinity;
    }

    else {

        for (let i = 0; i < elements.length; i++) {
            if (!isNaN(elements[i])) {

                if (Number(elements[i]) > maxElement) {
                    maxElement = Number(elements[i]);

                }
            }

        }

        return maxElement
    }
}

// console.log(findMax([30, 50, 10, 40]))
// console.log(findMax(['hey', 10, 'hi', 60, 10]))
module.exports = findMax;

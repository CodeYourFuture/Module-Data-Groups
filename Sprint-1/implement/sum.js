function sum(elements) {
    // return 0 if elements is empty. If elements has 1 item, return this item.
    if (elements.length == 0) {
        return 0;
    } else if (elements.length === 1 && typeof elements[0] == "number") {
        return elements[0];
    }
    // declare variables to use it later.
    let total = 0;
    let copyElementsStr = [];
    // check if there is a non-number item inside the elements.
    for (let i = 0; i < elements.length; i++) {
        // If item is number, add item to the total array.
        if (typeof elements[i] === "number") {
            total += elements[i];
            // If item is not a number, add item to the copyElementsStr array.
        } else if (typeof elements[i] !== "number") {
            copyElementsStr.push(elements[i]);
        }
    }
    // check if given array has only non-number items and return the last item.
    if (elements.length == copyElementsStr.length) {
        return 0;
    }

    // return sum    
    return total;
}

module.exports = sum;

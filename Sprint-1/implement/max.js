function findMax(elements) {
    // return -Infinity if elements is empty. If elements has 1 item, return this item.
    if (elements.length === 0) {
        return -Infinity;
    }
   
    let copyElements = [];
    let copyElementsStr = [];
    // check if there is a non-number item inside the elements.
    for (let i = 0; i < elements.length; i++) {
        // If item is number, add item to the copyElements array.
        if (typeof elements[i] === "number") {
            copyElements.push(elements[i]);
            // If item is not a number, add item to the copyElementsStr array.
        } else if (typeof elements[i] !== "number") {
            copyElementsStr.push(elements[i]);
        }
    }
    // check if given array has only non-number items
    if (elements.length === copyElementsStr.length) {
        return 0;
    }

    // sort array to find the largest number.
    const sortedElements = copyElements.sort((a, b) => a - b);
    const largestNum = sortedElements[sortedElements.length - 1];
    return largestNum;

}
findMax([3, 5, 20, 70, 5]);
module.exports = findMax;

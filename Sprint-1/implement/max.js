
function findMax(elements) {
    // Step 1: Handle the case for an empty array
    if (elements.length === 0) {
        return -Infinity; // Conventionally, this is the smallest number possible in JavaScript.
    }

    // Step 2: Filter out only the numeric values
    const numericElements = [];// creates an empty array named NumericElements, it will store only the numerial values from the elements array. we are doing this to have a place to collect valid numerical items while iterating though the elements
    for (const item of elements) {// to begin a loop that goes through each element in the array element, const item assigns the current value of the iteration to the variable item, for example, if the element is [10,20,30] the first item will be 10, the second 20 and the 3rd 30. It allowz to process every value in the array one by one
        if (typeof item === "number") {// checks if the current item is a number, and that only numerical value are added to the array, typeof is in built operator that determines the type of value, thus, it will return number is the value of item is a number, === checks for strict equality, that allows to check the type is exactly number and not something that can be converted into a number
            numericElements.push(item); //if the condition before is true, it adds current item to the numericalElements array through .push() method which adds an element to the end of array. so it takes numericElements.push(item), it attaches item to the numericElements array
        }
    }

    // Step 3: Handle the case where no numeric elements are found
    if (numericElements.length === 0) {
        return -Infinity; // If there are no numbers, return -Infinity as the default.
    }

    // Step 4: Find the maximum number in the numeric array
    let maxNumber = numericElements[0]; // here we are checking the initial value of maxNumber to the first element of the array numericElements[0], [0] is the first index, because before comparing numbers, we need a starting point and we have a valid number to compare with
    for (const number of numericElements) {
        if (number > maxNumber) {// it checks if the current number is greater than maxNumber, if a larger number is found, we need to update maxNumber, if maxNu,=mber = 10, number =20, since 20>10, this condition is true
            maxNumber = number; // if the condition number >maxNumber is true, it assigns the value of number to maxNumber. this ensures that the largest number is in the loop
        }
    }

    return maxNumber; // after the loop is finished, it returns the value of maxNumber

  module.exports = findMax;

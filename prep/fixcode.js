// can we fix this code?

function doubleAllNumbers(numbers) {
    let doubledNumbers = []; // initialize to an empty array.

    for(let n of numbers) {
        doubledNumbers.push(n * 2);
        //const newValue = n * 2
       // doubledNumbers.push(newValue); // we can use this method as well.
        
    }

    return doubledNumbers
}

const myNums = [10, 20, 30]
//const newArray = doubleAllNumbers(myNums); // we can use this method as well.
//console.log(newArray);
console.log(doubleAllNumbers(myNums)); // This should output [20, 40, 60]

// the first thing we are doing we are declaring a function.
// we are calling the function.
// add parameter 'numbers'.
// doubledNumbers need to have a value.



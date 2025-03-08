/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.

test ("get an empty array,return infinity", () => {
    EmptArr = findMax([]);
    expect(Infinity).toEqual(Infinity)
})

// Given an array with one number
// When passed to the max function
// Then it should return that number

test ("get an array with one number,return that number", () => {

    oneNum = findMax([7]);
    expect(oneNum).toEqual(7);

})

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test ("get an array with both +,- numbers, return the max number from +", ()=>{
    MixArr = findMax([1,-2,3,-4,5,7]);
    expect(MixArr).toEqual(7);
        
    }
)
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test ("get an array with negative number, return the max one", () =>{
    NegArr = findMax([-1,-4,-5,-7]);
    expect(NegArr).toEqual(-1);
})

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test ("get an array with decimal number,return the max decimal number", () =>{
    DecArr = findMax([2.3,2.4,2.5,2.7]);
    expect(DecArr).toEqual(2.7);

})

// Given an array with non-number values and numeric values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

test ("get an array with both non-num & num, get the max from num & ignore non-num", () =>{
    MixArr = findMax([7,6,5,4,"CYF"]);
    expect(MixArr).toEqual(7);
})

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

test ("get an arrary with all string value , return no number",() => {
    StrArr = findMax(["a","b","c"]);
    expect(StrArr).toEqual("This array have no numbers");
})
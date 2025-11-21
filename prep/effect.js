// side effect: currently calculateMedian mutates its input__ the array of numbers. 
// This mutation is called a side effect.
// A side effect is any change in program's state or interaction with the outside world made by a function.
// function add(a, b) {
//     return a + b;
// }
// // This function is without side effect. it only returns a value and does not effect the outside world.

// // function with side effects:
// let total = 0;

// function addToTotal(value){
//     total += value ;
// }

// the variable total is changed --- that is a side effect.
// Bug: a bug is an error, mistake or unexpected behavior in your code.
// example: a bug happens when your code runs without crashing but produces the wrong result.

function add(a, b){
    return a - b; // Bug: used minus instead of plus
}
console.log(add(3, 2)); // output 1, expected 5.

// we can use splice to get the middle item.

function calculateMedian(list) {
    const middleIndex = Math.floor(list.length / 2)
    const median = list.splice(middleIndex, 1 [0])

    return median;
}

// The splice() method adds and or removes array elements.
// The splice() method overwrites(write too much) the original array.
// const members = ["Tony", "Azin", "Ahmad", "Baba", "Iswat", "Hadi", "Khor", "Joy",];
// members.splice(2, 0, "Asma", "Wilson");
// here Add 'Asma' and 'Wilson' in 2nd index.

// Math.floor rounds a number Down to the nearest number.
//let x = Math.floor(1.6)// output is 1.

// in the code above 'list.splice(middleIndex, 1)[0] '1' means go to middleIndex and remove 1 element from here.
// like in this example: 
let list = ["10", "20", "30", "40", "50"]
let middleIndex = 2;

// visual:
// Index:  0    1    2    3    4
// List:  [10] [20] [30] [40] [50]
// Here the middleIndex is 2 that is the element 30.

list.splice(2, 1);
// meaning go to index 2 and remove one element from there.

// so js cut out the element 30 and return it in an array [30]
// change the original array to [10, 20, 40, 50]


function findMax(elements) {
// Given an empty array
// When passed to the max function
// Then it should return -Infinity

if (elements.length ===0)
{
    return Infinity;
}

// Given an array with one number
// When passed to the max function
// Then it should return that number
else 
{
    maxNum = Math.max(...elements);
    return maxNum;
}
}

module.exports = findMax;

test1 = findMax([]);
console.log(test1);

test2 = findMax([7]);
console.log(test2);

test3 = findMax([2,3,7,6,8,9,]);
console.log(test3);

test4 = findMax([1,"hello",3,4,"CYF"]);
console.log(test4);

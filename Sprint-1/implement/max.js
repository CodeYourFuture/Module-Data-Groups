function findMax(elements) {

// if the array length is 0 return infinity
if (elements.length ===0)
{
    return Infinity;
}
// if the array not include non-numeric number 
else if (elements.every(item => isNaN(item)=== false))
{
    maxNum = Math.max(...elements);
    return maxNum;
}
// if all the values in array have string 
else if (elements.every(item => isNaN(item)=== true))
{
    return "This array have no numbers";
}
// if the array include non-numeric number
else 
{
    numArr = elements.filter(item => typeof item === 'number');
    return Math.max(...numArr);
    
}
}

module.exports = findMax;
//empty array
test1 = findMax([]);
console.log(test1);

//one numeric number array
test2 = findMax([7]);
console.log(test2);

//array with numbers 
test3 = findMax([2,3,7,6,8,9,]);
console.log(test3);

//array with mixing numeric and non-numeric
test4 = findMax([1,"hello",3,4,"CYF"]);
console.log(test4);

//array with negative number 
test5 = findMax([-1,-7,-8,-6]);
console.log(test5);

//array with mix negative number & positive number
test6 = findMax([1,-7,-8,6]);
console.log(test5);

//array with decimal numbers
test7 = findMax([0.1,3.5,7.7]);
console.log(test7);

// array with num number number
test8 = findMax(["a","b","c"]);
console.log("An array with string values only return :",test8);
    
function calculateMean(list) {
    let total = 0;
     
    for (const item of list) {
        total += item;
    }
    console.log("the total of the array is", total);
    console.log("the element has", list.length, "elements");
    return total / list.length;
}

calculateMean([1,2,3,4,5]);
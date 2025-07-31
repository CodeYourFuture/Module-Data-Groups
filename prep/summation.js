// To sum a list we can start by creating a variable total with an initial value of 0.
// We then need to repeatedly add each value in the list to our total.

function sumValues(list) {
    let total = 0;
    total += list[0]; // access a list element and add to total
    total += list[1];
    total += list[2];
    total += list[3];
    total += list[4];
    return total;
}

console.log(sumValues([1, 2, 3, 4, 5]));
// However, this approach is flawed.


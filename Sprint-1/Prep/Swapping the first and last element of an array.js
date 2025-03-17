function swapFirstAndLast(arr) {
    // Your code here
    const firstElement= arr.shift();
    const lastElement = arr.pop();
    arr.unshift(firstElement);
    arr.push(lastElement);
    return arr;
}

const myArr= [1, 2, 3, 4, 5];

console.log(swapFirstAndLast(myArr));
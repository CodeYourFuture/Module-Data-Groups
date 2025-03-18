function sum(elements) {
    let count = 0
    if(elements.length == 0) return 0
    else{
        for (let i = 0; i < elements.length; i++) {
            if (isNaN(elements[i]) == true) {
                continue
            }
            count+=elements[i]
        }
    }
    return count
}

let myArr = [0.1,0.2,0.3]
let myArr1 = [1]
let myArr2= ['x', 'abc', 'a', 'hello']
let myArr3= ['x', 1, 3, 'hello']
console.log(sum(myArr));
console.log(sum(myArr1));
console.log(sum(myArr2));
console.log(sum(myArr3));

module.exports = sum;

function tally(arr) {
    let count = {}

    if (Array.isArray(arr)){
    arr.forEach(element => {
        count[element] = (count[element] || 0) + 1

        
    });
return count
    }else {return "Error! Please enter an array as your input"}
}

console.log(tally(5565654))

//tally(['a']), target output: { a: 1 }
 //* tally(['a', 'a', 'a']), target output: { a: 3 }
 // tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }
module.exports = tally;

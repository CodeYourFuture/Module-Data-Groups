function dedupe(array) {
    let arrayCopy = [];
    if (array.length == 0) {
        return [];
    }
    else if (array.length != 0) {
        array.forEach(element => {
            if (!arrayCopy.includes(element)) {
                arrayCopy.push(element);    
        }
    });
        return arrayCopy;
    }


}

console.log(dedupe(["a", "b", "c"]))
module.exports = dedupe;

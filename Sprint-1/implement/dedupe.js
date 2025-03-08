/*function dedupe(array) {
    copyArray =[]
    array.map(x => !copyArray.includes(x) ? copyArray.push(x): "") 
    return copyArray 
    }*/
function dedupe(arr){
    return [... new Set(arr)]
}
console.log(dedupe(['a','a','a','b','b','c', 'd']))

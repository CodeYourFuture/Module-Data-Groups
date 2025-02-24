function dedupe(array) {
    copyArray =[]
    array.map(x => !copyArray.includes(x) ? copyArray.push(x): "") 
    return copyArray 
    }



function dedupe(array) {
    
    return [...new Set(array)];

}

console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8]))

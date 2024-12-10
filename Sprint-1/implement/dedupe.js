function dedupe(dupe) {
    
    return [...new Set(dupe)];

}

console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8]))

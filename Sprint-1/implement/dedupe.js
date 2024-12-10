function dedupe(dupe) {
    dupe.sort((a,b) => a - b);

    return dupe;

}

console.log(dedupe([3, 5, 1, 2, 4]))

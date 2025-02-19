function finalFrequency(changes) {
    let frequency = 0;
    for (let change of changes) {
        frequency += change;
    }
    return frequency;
}

let changes = [2, -1, 5, -4]
console.log(finalFrequency(changes)); // output = 2
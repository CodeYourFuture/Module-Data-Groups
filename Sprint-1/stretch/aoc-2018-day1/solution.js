function resultingFrequency(changes) {

    let frequency = 0;

    for (let i = 0; i < changes.length; i++) {
        frequency += changes[i];
    }
    return frequency;
}

module.exports = resultingFrequency;

console.log(resultingFrequency([-10, -12, +1, +14, +11, -19, -4]));
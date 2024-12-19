function calibrateFrequency(changes) {
    let currentFrequency = 0;

    for (const change of changes) {
        currentFrequency += parseInt(change, 10);
    }

    return currentFrequency;
}

const frequencyChanges = [ "+1",  "-1", "+2", "-2", "+3", "-3"]

const result = calibrateFrequency(frequencyChanges);
console.log("Resulting Frequency:", result);


 
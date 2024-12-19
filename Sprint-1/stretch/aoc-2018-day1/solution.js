function calibrateFrequency(changes) {
    let currentFrequency = 0;

    for (const change of changes) {
        currentFrequency += parseInt(change, 10);
    }

    return currentFrequency;
}

const frequencyChanges = [ "+1",  "+1",  "-2", "+3", "+1", "-1", "-1", "-2", "-3"]

const result = calibrateFrequency(frequencyChanges);
console.log("Resulting Frequency:", result);


//i am confused by this kata i have only developed a function, should we create our own frequency? i used the one the website gave us
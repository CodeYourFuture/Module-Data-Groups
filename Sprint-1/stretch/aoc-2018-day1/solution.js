const fs = require('fs');
const path = require('path');

try {
    const input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), "utf-8")
                    .trim()
                    .split('\n')
                    .map(i => parseInt(i, 10));

    // Part 1: Calculate the resulting frequency
    const part1Result = input.reduce((a, b) => a + b, 0);
    console.log("Part 1 - Resulting Frequency:", part1Result);

    // Part 2: Find the first frequency reached twice
    let sum = 0;
    let set = new Set([0]);
    let length = input.length;
    let part2Result = null;

    for (let i = 0; ; i = (i + 1) % length) {
        sum += input[i];

        if (set.has(sum)) {
            part2Result = sum;
            break;
        } else {
            set.add(sum);
        }
    }

    console.log("Part 2 - First Repeated Frequency:", part2Result);
} catch (err) {
    console.error("Error:", err.message);
}
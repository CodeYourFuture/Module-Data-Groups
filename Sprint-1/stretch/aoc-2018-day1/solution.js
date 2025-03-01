const fs = require("fs");
function fileHandler() {
  fs.readFile("stretch/aoc-2018-day1/input.txt", "utf8", (err, data) => {
    if (err) throw err;
    let values = data;
    let frequency = 0;
    listOfValues = values.split("\n");
    for (change of listOfValues) {
      frequency += +change;
    }
    console.log(frequency);
  });
}
fileHandler();

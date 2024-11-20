const fs = require("fs");
const path = require("path");

function calculate_calibration(filePath) {
  let start = 0;

  const absolutePath = path.join(__dirname, filePath);

  fs.readFile(absolutePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    data = data.split('\n')

    for (const degree of data) {
      start += +degree
    }
    return start
  });
}

calculate_calibration("input.txt");

const fs = require("fs");

let inputData;
fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  inputData.push(...data.split("\n"));
  // console.log(inputData);
});

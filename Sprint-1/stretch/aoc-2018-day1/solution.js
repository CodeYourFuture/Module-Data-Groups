function day1Puzzle1(textFile) {
  const fs = require("fs");
  const inputFile = fs.readFileSync(textFile, "utf8");
  const lines = inputFile.split("\n");
  let countOP = 0;
  let countCP = 0;
  //console.log(inputFile.length);
  for (let i = 0; i < inputFile.length; i++) {
    if (inputFile[i] === "(") {
      countOP++;
    } else {
      countCP++;
    }
  }
  return (countOP - countCP);
}


function day1Puzzle2(textFile) {
    const fs = require("fs");
    const inputFile = fs.readFileSync(textFile, "utf8");
    const lines = inputFile.split("\n"); 
    let floorCount= 0;
    for (let i = 0; i < inputFile.length; i++) {
      if (inputFile[i] === "(") {
        floorCount++;
      } else {
        floorCount--;
      }
      if (floorCount==-1){
        return i+1;
      }
    }
}

function day2Puzzle1(textFile) {
  const fs = require("fs");
  const inputFile = fs.readFileSync(textFile, "utf8");
  const lines = inputFile.split("\n");
 
  for (let i = 0; i < inputFile.length; i++) {
    
  }
}

function calculateArea(dimension){
  let dimensionArray=dimension.split("x");
  let s1 = parseInt(dimensionArray[0]) * parseInt(dimensionArray[1]);
  let s2 = parseInt(dimensionArray[0]) * parseInt(dimensionArray[2]);
  let s3 = parseInt(dimensionArray[1]) * parseInt(dimensionArray[2]);

  let extraPaper = Math.min(s1,s2,s3);
  let totalWrapPaper=(2*s1)+(2*s2)+(2*s3)+extraPaper
  return totalWrapPaper;;
   
}


console.log(day1Puzzle1("Day1.txt"));
console.log(day1Puzzle2("Day1.txt"));
console.log(day2Puzzle1("Day2.txt"));
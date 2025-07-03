function day1Puzzle1(textFile) {
  const fs = require("fs");
  const inputFile = fs.readFileSync(textFile, "utf8");
  
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

function day2Puzzle1_totalWrappingPaper(textFile) {
  const fs = require("fs");
  const inputFile = fs.readFileSync(textFile, "utf8");
  const lines = inputFile.split("\n");
  let totalWrapPaper=0
  for (let i = 0; i < lines.length; i++) {
    totalWrapPaper += calculateWrapingPaper(lines[i]);
  }
   return totalWrapPaper;
}

function calculateWrapingPaper(dimension){
  let dimensionArray=dimension.split("x");
  let s1 = parseInt(dimensionArray[0]) * parseInt(dimensionArray[1]);
  let s2 = parseInt(dimensionArray[0]) * parseInt(dimensionArray[2]);
  let s3 = parseInt(dimensionArray[1]) * parseInt(dimensionArray[2]);

  let extraPaper = Math.min(s1,s2,s3);
  let totalWrapPaper=(2*s1)+(2*s2)+(2*s3)+extraPaper
  return totalWrapPaper;;
   
}

function day2Puzzle2_totalRibbon(textFile) {
  const fs = require("fs");
  const inputFile = fs.readFileSync(textFile, "utf8");
  const lines = inputFile.split("\n");
  let totalRibbon = 0;
  for (let i = 0; i < lines.length; i++) {
    totalRibbon += calculateRibbon(lines[i]);
  }
  return totalRibbon;

}

function calculateRibbon(dimension) {
  let dimensionArray = dimension.split("x");
  let d1 = parseInt(dimensionArray[0]);
  let d2 = parseInt(dimensionArray[1]);
  let d3 = parseInt(dimensionArray[2]);
  let wrapRibbon=(d1*2)+(d2*2);
  let bowRibbon=d1*d2*d3;
  return wrapRibbon + bowRibbon;
}

console.log(day1Puzzle1("Day1.txt"));
console.log(day1Puzzle2("Day1.txt"));
console.log(day2Puzzle1_totalWrappingPaper("Day2.txt"));
console.log(day2Puzzle2_totalRibbon("Day2.txt"));
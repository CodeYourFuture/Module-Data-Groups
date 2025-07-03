function readInputFromFile(textFile){
  const fs = require("fs");
  const inputFile = fs.readFileSync(textFile, "utf8");
  const lines = inputFile.split("\n");
  let countOP=0;
  let countCP=0;
  //console.log(inputFile.length);
  for (let i=0;i<inputFile.length;i++){
    if (inputFile[i]==="("){
        countOP++ 
    }else{
        countCP++
    }
  }
  console.log(countOP-countCP);
}

readInputFromFile("Day1.txt");
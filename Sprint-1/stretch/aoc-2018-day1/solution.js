
const fs = require('fs');

fs.readFile('/root/CYF/Module-Data-Groups/Sprint-1/stretch/aoc-2018-day1/input.txt', (err, data) => {
  if (err) throw err;
  console.log(device(data.toString().split("\n")));
});

function device(array){
    let result = 0;
    for(let i =0; i < array.length; i++){
        if(array[i].slice(0, 1) == "+"){
            result += Number(array[i].slice(1, array[i].length));
        }
        else{
            result -= Number(array[i].slice(1, array[i].length));
        }
        
    }
    return result;
}


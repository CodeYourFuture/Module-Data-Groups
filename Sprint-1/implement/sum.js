function sum(elements) {

if (!Array.isArray(elements)) {
    return Infinity;
  }

  const onlyNumbers = elements.filter((item) => typeof item === "number");


let total= 0

for( const num of onlyNumbers ){
 total+= num ;
}

return total;
}


module.exports = sum;




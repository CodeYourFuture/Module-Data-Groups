 function createLookup(codePairs){
  let newObj = {} ;    //i created a newObj to store my data
   
  for(let n of codePairs){    //for each item in code pairs i.e the array pairs 
      newObj[n[0]] = n[1];    //assign the first sec as country code and next sec as currency code.
    }
  return newObj;
 }

module.exports = createLookup;


/*
 function createLookup(codePairs){

  let [data1 , data2] = codePairs;
  let newObj = {} ;
  if (data1.length === data2.length){
    for(let n of codePairs){
      newObj[n[0]] = n[1];
    }
    return newObj;
  }

 }
very simple implementation
 function createLookup(codePairs) {
  let [x,y] = codePairs;
  let [a,b] = x;
  let [c,d] = y;
  console.log(`{ '${a}' : '${b}' , 
    '${c}' :'${d}' }`);

}
    createLookup([["US", "USD"],["CA", "CAD"]]);

*/

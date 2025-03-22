function createLookup(countryCurrency) {

    // put into the object 
      let  exchange = Object.fromEntries(countryCurrency)
      return exchange;
      
   
  
}

const c = [['US','USD'],["UK","Pound"]];
console.log(createLookup(c));

module.exports = createLookup;

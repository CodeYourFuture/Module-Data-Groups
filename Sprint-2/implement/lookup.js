function createLookup(countryCurrency) {
  const lookup={}
  for(const[country,code] of countryCurrency)
{
  lookup[country]=code;
   }
   return lookup;
    }
  
 

module.exports = createLookup;

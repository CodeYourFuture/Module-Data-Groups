function parseQueryString(queryString) {
  const queryParams = {};                                        //declares a variable with the value of an empty object
  if (queryString.length === 0) {                                //if the query string is empty return empty object
    return queryParams;
  }
  
  const [key, ...rest] = queryString.split("=");                 //splits the querystring in to arrays where it finds'=', assigns the first part as the value for key
   const value = rest.join("=");                              //it joins the two arrays from 'rest' with '=' resulting in a string
   queryParams[key] = value;                                  //adds the key:value pair to the object
   if (value.length===0)return { [key]: "missing value" };    // checks for missing value
   if (key.length===0) return {"missing key":value,}           // checks for missing value
  
  return queryParams;
}



console.log(parseQueryString("letter=o&age=34"));



module.exports = parseQueryString;

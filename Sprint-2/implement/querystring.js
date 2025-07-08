function parseQueryString(queryString) {
  const queryParams = {};                                        //declares a variable with the value of an empty object
  if (queryString.length === 0) {                                //if the querry string is empty return empty object
    return queryParams;
  }
  const [key, ...rest] = queryString.split("=");                 //splits the queystring in to arrays where it finds'=', assigns the first part as the value for key
  const value = rest.join("=");                              //it joins the two arrays from 'rest' with '=' resulting in a string
  queryParams[key] = value;                                  //adds the key:value pair to the object
  
  return queryParams;
}



console.log(parseQueryString("equation=x=y+1"));



module.exports = parseQueryString;

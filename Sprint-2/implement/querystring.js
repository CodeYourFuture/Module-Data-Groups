function parseQueryString(queryString) {
   queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  } else if(queryString.includes("&")){
      const keyValuePairs = queryString.split("&");

        for (const pair of keyValuePairs) {
          const [key, value] = pair.split("=");
          queryParams[key] = value;
        }
    return queryParams;
 } else if(!queryString.includes("&")){
   // break it from the first instance of "="
    const [key, ...rest] = queryString.split("=");
    //console.log(key) //debug
    const value = rest.join("=")
    //console.log(value)//debug
    queryParams[key] = value;
    return queryParams;
 }
}

const queryString2 = "equation=x=y+1";
console.log(parseQueryString(queryString2)); // expect "equation": "x=y+1",

module.exports = parseQueryString;

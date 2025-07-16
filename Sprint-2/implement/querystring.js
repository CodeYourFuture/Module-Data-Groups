//function parseQueryString(queryString) {
  //const queryParams = {};
  //if (queryString.length === 0) {
    //return queryParams;
  //}
  //const keyValuePairs = queryString.split("&");

  //for (const pair of keyValuePairs) {
  
    //const [key, value] = pair.split("=");
    //queryParams[key] = value;
  //}
  //return queryParams;
//}

//module.exports = parseQueryString;

function parseQueryString(queryString){
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  
  const keyValuePairs = queryString.split("&");
  
  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");

    const key = pair.slice(0, index);
    const value = pair.slice(index+1);

    const decodedKey= decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value.replace(/\+/g, " "));

    queryParams[decodedKey]=decodedValue;

    }
    return queryParams;
  }
  
  
   module.exports = parseQueryString;
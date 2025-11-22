function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  for (let i = 0; i < keyValuePairs.length; i++){
    const pair = keyValuePairs[i];
    const indexOfEquals = pair.indexOf("=");
    if(indexOfEquals === -1){
    } 
    else{
      const key = pair.slice(0, indexOfEquals);
      const value = pair.slice(indexOfEquals + 1);
      queryParams[key] = value;
    }
  }




  //for (const pair of keyValuePairs) {
    //const [key, value] = pair.split("=");
    //queryParams[key] = value;
  }

  return queryParams;


module.exports = parseQueryString;

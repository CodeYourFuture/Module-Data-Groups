function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  let keyValuePairs = []
  if(queryString.includes("&")){
    keyValuePairs = queryString.split("&");
    }
    else{
      keyValuePairs.push(queryString);
    }
  

  for (const pair of keyValuePairs) {
    
    if( pair.split("=").length<2){
      const key = pair.split("=")[0];
      queryParams[key] = "";
    }
    else if(pair.split("=").length ===2){
      const [key, value] = pair.split("=");
      queryParams[key] = value;
    }
    else{
      const key = pair.split("=")[0];
      const value = pair.split("=").slice(1).join("=");
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;

function parseQueryString(queryString) {
  const queryParams = {};
  if(!queryString || queryString.trim() === "") {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
     if (!pair.includes("=")) continue; 
    
    const [key, value = ""] = pair.split("=");
  
    if (key.trim() !== "") {
      queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  }


  return queryParams;
}

module.exports = parseQueryString;

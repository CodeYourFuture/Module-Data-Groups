function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const separatorIndex = pair.indexOf("=");

     if (separatorIndex === -1) {
      queryParams[pair] = "";
       } else {
       const key = decodeURIComponent(pair.slice(0, separatorIndex));
       const value = decodeURIComponent(pair.slice(separatorIndex + 1));
       queryParams[key] = value;
       }
   }
  return queryParams;
}

module.exports = parseQueryString;


console.log(parseQueryString("equation=x=y+1"));
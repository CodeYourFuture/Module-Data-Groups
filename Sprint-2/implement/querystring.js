function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {

    const idx = pair.indexOf("=");
   
    if (idx === -1) {
         const key = decodeURIComponent(pair.replace(/\+/g, " "));
      queryParams[key] = "";
    }  else {
      const key = decodeURIComponent(pair.substring(0, idx).replace(/\+/g, " "));
      const value = decodeURIComponent(pair.substring(idx + 1).replace(/\+/g, " "));
      queryParams[key] = value;
    }
}
return queryParams;
}

module.exports = parseQueryString;

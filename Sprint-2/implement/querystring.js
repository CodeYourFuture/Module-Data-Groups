function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.trim().length === 0) {//trim spaces and check for an empty space
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [rawKey, ...rawValue] = pair.split("=");// keep elements after first '=
    if(!rawKey) continue;//ignore cases where there is no key
    const key= decodeURIComponent(rawKey);//it will decode key and value to handle url encoded characters
    const value= rawValue.length> 0 ? decodeURIComponent(rawValue.join("=")) : "";
    queryParams[key] = value;
    
  }

  return queryParams;
}

module.exports = parseQueryString;

function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString === "") {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Ignore empty pairs
    if (pair === "") continue;

   
    const equalsIndex = pair.indexOf("=");

    let key, value;

    if (equalsIndex === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, equalsIndex);
      value = pair.slice(equalsIndex + 1);
    }

    
    key = decodeURIComponent(key.replace(/\+/g, " "));
    value = decodeURIComponent(value.replace(/\+/g, " "));

    
    if (queryParams.hasOwnProperty(key)) {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [queryParams[key], value];
      }
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;

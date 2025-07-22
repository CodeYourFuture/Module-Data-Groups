 function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");

    let key, value;

    if (index !== -1) {
      key = decodeURIComponent(pair.substring(0, index));
      value = decodeURIComponent(pair.substring(index + 1));
    } else {
      key = decodeURIComponent(pair);
      value = "";
    }

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

 function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) {
      console.warn("Skipping empty query segment");
      continue;
    }
    
    const index = pair.indexOf("=");

    let key, value;

    try {
      if (index !== -1) {
      key = decodeURIComponent(pair.substring(0, index));
      value = decodeURIComponent(pair.substring(index + 1));
    } else {
      key = decodeURIComponent(pair);
      value = "";
    }
  } catch (error) {
      console.warn(`Invalid URL in query segment: "${pair}":`);
      continue;
  }

    if (!key) {
      console.warn(`Skipping query pair with empty key: "${pair}"`);
      continue;
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

//console.log(parseQueryString("city=New%20Jersey&age=60&city=London"));
//console.log(parseQueryString("city=New%20York&city=Los%20Angeles&city=London"));
//console.log(parseQueryString("occasion=happy%20birthday&gift=mobile%20phone"));

//console.log(parseQueryString("name=John%&age=25"));

module.exports = parseQueryString;

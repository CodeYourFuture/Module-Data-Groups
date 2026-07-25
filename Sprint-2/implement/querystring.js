function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const everything = pair.split("=");
    const key = everything.shift();
    const value = everything.join("=");
    queryParams[key] = value;

    //console.log(key);
    //console.log(values);
    //const [key, value] = pair.split("=");
    //queryParams[key] = values;
  }

  return queryParams;
}

module.exports = parseQueryString;

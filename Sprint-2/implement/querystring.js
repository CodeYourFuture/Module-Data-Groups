function parseQueryString(queryString) {
  

  if (typeof queryString !== "string") {
    throw new Error("invalid input");
  }

  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  if (!queryString.includes("=")) {
    throw new Error("invalid query string format");
  }

  const keyValuePairs = queryString.split("&");
<<<<<<< HEAD
  console.log(keyValuePairs);
=======

  
>>>>>>> 9bfc1d248bfc0c0bfc03053d950873de7e52b25d

  for (const pair of keyValuePairs) {
    console.log(pair);
    if (!pair) continue;

    const [key, value] = pair.split("=");
    console.log(key);
    console.log(value);
    if (!key) {
      throw new Error("invalid query string format");
    }

    queryParams[decodeURIComponent(key)] = value
      ? decodeURIComponent(value)
      : "";
  }

  return queryParams;
}

module.exports = parseQueryString;

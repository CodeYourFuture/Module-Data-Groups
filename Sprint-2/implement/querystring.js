function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [encodedKey, ...valueParts] = pair.split("="); // Split only on the first "=" and values can contain "="
    if (!encodedKey) continue; // if key is missing, skip.

    const key = decodeURIComponent(encodedKey);  // decodeURIComponent(encodedKey) makes sure that encoded characters (like %20 for spaces) are converted properly
    const value = decodeURIComponent(valueParts.join("=") || ""); // valueParts.join("=") joins back any values that contains "=" or split by =, while || "" makes sure that if there are no value(s), it will be an empty string "".

   
    if (queryParams[key]) {
      queryParams[key] = [].concat(queryParams[key], value); // queryParams[key] is converted into an array, and new values are added the existing one thereby handling duplicate keys.
    } else {
      queryParams[key] = value; // but if key appeared only once, the single value will be stored
    }
  }

  return queryParams;
}

module.exports = parseQueryString;


  

  


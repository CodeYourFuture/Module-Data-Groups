function parseQueryString(queryString) {
  const result = {};

  if (queryString.length === 0) {
    return result;
  }

  const keyValuePairs = queryString.split("&");

  for (let pair of keyValuePairs) {
    const cleanPair = pair.replace(/\+/g, " ");
    // Step 3: Change all '+' signs into regular spaces
    const firstEqualIndex = cleanPair.indexOf("=");

    let key, value;

    if (firstEqualIndex === -1) {
      key = cleanPair;
      value = "";
    } else {
      key = cleanPair.slice(0, firstEqualIndex);
      value = cleanPair.slice(firstEqualIndex + 1);
    }

    let decodedKey, decodedValue;
    try {
      // Try to decode normally
      decodedKey = decodeURIComponent(key);
    } catch (error) {
      // If it's a broken code (like "100%"), just use the raw text instead of crashing!
      decodedKey = key;
    }

    try {
      decodedValue = decodeURIComponent(value);
    } catch (error) {
      decodedValue = value;
    }

    // Step 6: Put them into our boxes (Handling the Stretch Goal too!)
    if (result.hasOwnProperty(decodedKey)) {
      // If the box already has a secret message, make it a list or add to the list
      if (!Array.isArray(result[decodedKey])) {
        result[decodedKey] = [result[decodedKey]];
      }
      result[decodedKey].push(decodedValue);
    } else {
      // If the box is brand new, just put the message inside
      result[decodedKey] = decodedValue;
    }
  }

  return result;
}

module.exports = parseQueryString;

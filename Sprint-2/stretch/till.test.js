const totalTill = require("./till.js");


test ("Get all coins , sum up the coins, return the total pound", () =>{
    const till = {
        "1p": 10,
        "5p": 6,
        "50p": 4,
        "20p": 10,
      };
    expect(totalTill(till)).toEqual('£4');
})
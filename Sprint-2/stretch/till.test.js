const totalTill = require('./till.js'); 
  
  test('should return £4.40 for the provided example till', () => {
    const till1 = {
      "1p": 10,
      "5p": 6,
      "50p": 4,
      "20p": 10,
    };
    expect(totalTill(till1)).toBe('£4.40');
  });




  test('should return £1.00 for a till with only 1p coins', () => {
    const till2 = {
      "1p": 100, 
    };
    expect(totalTill(till2)).toBe('£1.00');
  });



//   test('should return £3.00 for a till with multiple coin types', () => {
//     const till4 = {
//       "1p": 50,   // 50 coins of 1p
//       "5p": 20,   // 20 coins of 5p
//       "10p": 10,  // 10 coins of 10p
//       "20p": 5,   
//     };
//     expect(totalTill(till4)).toBe('£3.50');
//   });

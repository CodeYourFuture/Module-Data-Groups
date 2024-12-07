const invert=require('./invert')

test("invert on { a: 1, b: 2 } returns { '1': 'a', '2': 'b' }", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' });
  });
  
  test("invert on { x: 10, y: 20 } returns { '10': 'x', '20': 'y' }", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ '10': 'x', '20': 'y' });
  });
  
  test("invert on { a: 1, b: 2, c: 3 } returns { '1': 'a', '2': 'b', '3': 'c' }", () => {
    expect(invert({ a: 1, b: 2, c: 3 })).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });
  test("invert on { a: 1 } returns { '1': 'a' }", () => {
    expect(invert({ a: 1 })).toEqual({ '1': 'a' });
  });
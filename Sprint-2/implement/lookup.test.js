const createLookup = require('./lookup');

describe('createLookup', () => {
  const people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  test('creates a lookup object with IDs as keys and names as values', () => {
    const idLookup = createLookup(
      people,
      (person) => person.id,
      (person) => person.name
    );
    expect(idLookup).toEqual({ '1': 'Alice', '2': 'Bob', '3': 'Charlie' });
  });

  test('creates a lookup object with names as keys and IDs as values', () => {
    const nameLookup = createLookup(
      people,
      (person) => person.name,
      (person) => person.id
    );
    expect(nameLookup).toEqual({ Alice: 1, Bob: 2, Charlie: 3 });
  });

  test('returns an empty object when given an empty array', () => {
    const emptyLookup = createLookup([], (item) => item, (item) => item);
    expect(emptyLookup).toEqual({});
  });

  test('returns an empty object when given a non-array', () => {
    const nonArrayLookup = createLookup('not an array', (item) => item, (item) => item);
    expect(nonArrayLookup).toEqual({});
  });
});
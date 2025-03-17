const getCheapestBook = require("./Get Cheapest Book");

test("returns the title of the cheapest book", () => {
    const book1 = { title: "Book 1", author:"George Orwell", category: "Science Fiction", subcategory: "Dystopia", cost: 10 };
    const book2 = { title: "Book 2", author:"George Orwell", category: "Science Fiction", subcategory: "Dystopia", cost: 20 };
    const result = getCheapestBook(book1, book2);
    expect(result).toBe("Book 1");
});

test("returns the title of the cheapest book when the first book is cheaper", () => {
    const book1 = { title: "Book 1", author:"George Orwell", category: "Science Fiction", subcategory: "Dystopia", cost: 10 };
    const book2 = { title: "Book 2", author:"George Orwell", category: "Science Fiction", subcategory: "Dystopia",  cost: 20 };
    const result = getCheapestBook(book1, book2);
    expect(result).toBe("Book 1");
});

test("returns the title of the cheapest book when the second book is cheaper", () => {
    const book1 = { title: "Book 1", author:"George Orwell", category: "Science Fiction", subcategory: "Dystopia", cost: 10 };
    const book2 = { title: "Book 2", author:"George Orwell", category: "Science Fiction", subcategory: "Dystopia",  cost: 20 };
    const result = getCheapestBook(book1, book2);
    expect(result).toBe("Book 1");
});




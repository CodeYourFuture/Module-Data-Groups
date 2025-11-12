function getCheapest(book1, book2) {
  const cost1 = book1.cost;
  const cost2 = book2.cost;

  if (cost1 < cost2) {
    return book1.title; // book1 is cheaper
  } else {
    return book2.title; // book2 is cheaper (or equal)
  }
}
// Write a function called `getCheapest` that will take 2 book objects as parameters
//  and return the name of the cheaper book

const fictionBook = {
  title: "1984",
  author: "George Orwell",
  category: "Dystopian Fiction",
  subcategory: "Political",
  cost: 9.99,
};

const productivityBook = {
  title: "Atomic Habits",
  author: "James Clear",
  category: "Self-Help",
  subcategory: "Productivity",
  cost: 16.2,
};

// this should output 1984
console.log(getCheapest(fictionBook, productivityBook));




// this is for plural 
function getCheapest(books) {
  if (books.length === 0) return null; // Handle empty array case

  let cheapestBook = books[0]; // Start with the first book as the cheapest

  for (let i = 1; i < books.length; i++) {
    if (books[i].cost < cheapestBook.cost) {
      cheapestBook = books[i]; // Update if we find a cheaper book
    }
  }

  return cheapestBook.title;
}
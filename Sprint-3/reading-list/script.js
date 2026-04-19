// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function readingList(books) {
  const bookList = document.getElementById("book-list");

  books.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.classList.add(book.alreadyRead ? "read" : "unread");

    card.innerHTML = `
      <img src="${book.bookCoverImage}" alt="${book.title}" />
      <div>
        <h2>${book.title}</h2>
        <p>By ${book.author}</p>
        <p>${book.alreadyRead ? "Already read ✅" : "Not read yet 📖"}</p>
      </div>
    `;

    bookList.appendChild(card);
  });
}

readingList(books);

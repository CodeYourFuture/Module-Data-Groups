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

function readingListApp(books) {
  const container = document.getElementById("reading-list-app");
  if (!container) return;

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const bookItem = document.createElement("div");
    bookItem.className = "book";
    bookItem.style.backgroundColor = book.alreadyRead ? "green" : "red";

    const bookInfo = document.createElement("div");
    bookInfo.innerHTML = `<strong>${book.title}</strong> by <strong>${book.author}</strong>`;

    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    img.alt = `${book.title} cover`;

    bookItem.appendChild(bookInfo);
    
    bookItem.appendChild(img);
    container.appendChild(bookItem);
  }
}

readingListApp(books);

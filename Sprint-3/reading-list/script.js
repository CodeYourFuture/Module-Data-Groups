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

const booksContainer = document.getElementById("content");

books.forEach((book) => {
  const bookElement = document.createElement("ul");
  bookElement.style.border = "1px solid #ccc";
  bookElement.style.margin = "10px";
  bookElement.style.padding = "10px";
  bookElement.style.display = "flex";
  bookElement.style.alignItems = "center";
  bookElement.style.gap = "15px";

  const bookImageElement = document.createElement("img");
  bookImageElement.src = book.bookCoverImage;
  bookImageElement.alt = book.title;
  bookImageElement.style.width = "100px";
  bookImageElement.style.height = "150px";

  const bookInfoElement = document.createElement("div");

  const bookTitleElement = document.createElement("h3");
  bookTitleElement.textContent = book.title;

  const bookAuthorElement = document.createElement("p");
  bookAuthorElement.textContent = `Author: ${book.author}`;

  const readStatusElement = document.createElement("p");
  readStatusElement.textContent = book.alreadyRead
    ? "Already read"
    : "Not read yet";

  bookInfoElement.appendChild(bookTitleElement);
  bookInfoElement.appendChild(bookAuthorElement);
  bookInfoElement.appendChild(readStatusElement);

  bookElement.appendChild(bookImageElement);
  bookElement.appendChild(bookInfoElement);

  booksContainer.appendChild(bookElement);
});

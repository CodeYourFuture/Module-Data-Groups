const titleEl = document.querySelector("title");
titleEl.textContent = "Reading list app";
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

function readingList(bookArray) {
  const contentEl = document.getElementById("content");
  const ulListEl = document.getElementById("reading-list");

  for (const book of bookArray) {
    const li = document.createElement("li");
    ulListEl.appendChild(li);
    li.textContent = `${book.title} by ${book.author}`;
    const img = document.createElement("img");
    li.appendChild(img);
    img.src = book.bookCoverImage;

    if (book.alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
  }
}
readingList(books);
// Render the list of books on the page. Each book should have a title, author and image and a background colour that is set dependent on whether we have read the book or not.

// ## 🧭 Strategy

// Try and outline your strategy / approach for solving this problem before you get started. There is also a test suite provided to help you meet the acceptance criteria in the issue.
// The end result should look something like this
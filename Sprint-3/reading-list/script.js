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
  const readingListElement = document.getElementById("reading-list");

  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.classList.add("book-item");
    listItem.style.backgroundColor = book.alreadyRead ? "green" : "red";

    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book-details");
    bookDetails.innerHTML = `
      <span class="book-title">${book.title}</span><br />
      <span class="book-author">by ${book.author}</span>
    `;

    const bookImage = document.createElement("div");
    bookImage.classList.add("book-image");
    bookImage.innerHTML = `<img src="${book.bookCoverImage}" width="150" height="200" />`;

    listItem.appendChild(bookDetails);
    listItem.appendChild(bookImage);
    readingListElement.appendChild(listItem);
  });
}

// Call the function to render the books
readingList(books);



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
function renderBooks(bookList) {
  const readingList = document.getElementById("reading-list");

  bookList.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.style.backgroundColor = book.alreadyRead ? "green" : "red"; // Set background color directly
    listItem.style.marginBottom = "20px"; // Add space between books

    const bookInfo = document.createElement("div");
    bookInfo.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;
    listItem.appendChild(bookInfo); // Add title and author first

    const bookImage = document.createElement("img");
    bookImage.src = book.bookCoverImage;
    bookImage.alt = `${book.title} cover`;
    listItem.appendChild(bookImage); // Add image below title and author

    readingList.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderBooks(books);
});



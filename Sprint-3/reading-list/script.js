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
function displayBooks(bookList) {
  const listContainer = document.getElementById("reading-list");

  bookList.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.style.cssText = `
      background-color: ${book.alreadyRead ? "green" : "red"};
      padding: 15px;
      margin: 15px 0;
      border-radius: 8px;
      color: white;
      display: flex;
      align-items: center;
      gap: 15px;
    `;

    const bookDetails = document.createElement("div");
    bookDetails.innerHTML = `<strong>${book.title}</strong><br>by ${book.author}`;

    const bookImage = document.createElement("img");
    bookImage.src = book.bookCoverImage;
    bookImage.alt = `${book.title} cover`;
    bookImage.style.width = "100px";

    listItem.appendChild(bookImage);
    listItem.appendChild(bookDetails);
    listContainer.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayBooks(books);
});

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
// Function to display books
function displayBooks(bookList) {
  const listContainer = document.getElementById("reading-list");

  bookList.forEach((book) => {
    // Create the list item
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

    // Create the title and author container
    const bookDetails = document.createElement("div");
    bookDetails.innerHTML = `<strong>${book.title}</strong><br>by ${book.author}`;

    // Create the book image
    const bookImage = document.createElement("img");
    bookImage.src = book.bookCoverImage;
    bookImage.alt = `${book.title} cover`;
    bookImage.style.width = "100px";

    // Append elements
    listItem.appendChild(bookImage);
    listItem.appendChild(bookDetails);
    listContainer.appendChild(listItem);
  });
}

// Run the function after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  displayBooks(books);
});
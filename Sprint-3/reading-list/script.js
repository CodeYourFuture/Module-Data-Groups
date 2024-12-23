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
function readingList(books) {
  const bookList = document.getElementById("book-list");

  // Create a div for each book

  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    //background color
    bookDiv.style.backgroundColor = book.alreadyRead ? "#d4edda" : "#f85c70";

    //book title
    const title = document.createElement("h3");
    title.textContent = book.title;

    //book author
    const author = document.createElement("p");
    author.textContent = `by ${book.author}`;

    //book image
    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    img.alt = book.title;

    // Append elements to the book div
    bookDiv.appendChild(img);
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);

    // Append book div to the book list
    bookList.appendChild(bookDiv);
  });
}

// Call the function to display the books
readingList(books);
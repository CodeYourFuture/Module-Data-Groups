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


function readingList() {
  // Step 1: List of books
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
  ];

  // Step 2: Find where to display the books
  const bookList = document.getElementById("bookList"); // Make sure there's an element with this ID in your HTML

  // Step 3: Go through each book
  for (let i = 0; i < books.length; i++) {
    const book = books[i]; // Get the current book

    // Step 4: Create a box (div) for the book
    const bookBox = document.createElement("div");
    bookBox.style.border = "1px solid black"; // Add a border
    bookBox.style.margin = "10px"; // Add some space around the box
    bookBox.style.padding = "10px"; // Add some space inside the box

    // Step 5: Set the background color based on whether the book is read
    if (book.alreadyRead) {
      bookBox.style.backgroundColor = "green"; // Read books have a green background
    } else {
      bookBox.style.backgroundColor = "red"; // Unread books have a red background
    }

    // Step 6: Add the book's title
    const title = document.createElement("h3");
    title.textContent = book.title; // Set the text to the book's title
    bookBox.appendChild(title); // Add the title to the box

    // Step 7: Add the book's author
    const author = document.createElement("p");
    author.textContent = "Author: " + book.author; // Set the text to the book's author
    bookBox.appendChild(author); // Add the author to the box

    // Step 8: Add the book's cover image
    const image = document.createElement("img");
    image.src = book.bookCoverImage; // Set the image source
    image.style.width = "100px"; // Set the image size
    bookBox.appendChild(image); // Add the image to the box

    // Step 9: Add the book box to the page
    bookList.appendChild(bookBox);
  }
}




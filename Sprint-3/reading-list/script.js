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

const list = document.getElementById("reading-list");

books.forEach((book) => {
  const li = document.createElement("li");

  // Add title + author (text must exist for tests)
  li.textContent = `${book.title} by ${book.author}`;

  // Create image
  const img = document.createElement("img");
  img.src = book.bookCoverImage;

  // IMPORTANT: ensures exact HTML match for tests
  img.setAttribute("src", book.bookCoverImage);

  // Add image to list item
  li.appendChild(img);

  // Set background colour based on read status
  if (book.alreadyRead) {
    li.style.backgroundColor = "green";
  } else {
    li.style.backgroundColor = "red";
  }

  // Add to page
  list.appendChild(li);
});
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
  const listItem = document.createElement("li");

  // Set the class based on whether the book has been read
  if (book.alreadyRead) {
    listItem.classList.add("green");
  } else {
    listItem.classList.add("red");
  }

  // Add title + author as a <p>
  const titleText = document.createElement("p");
  titleText.textContent = `${book.title} by ${book.author}`;
  listItem.appendChild(titleText);

  // Add book cover
  const img = document.createElement("img");
  img.src = book.bookCoverImage;
  listItem.appendChild(img);


  // append the list item to the <ul>
  list.appendChild(listItem);
});

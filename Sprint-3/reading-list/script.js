// script.js

// Array of book objects
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    image: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
    read: false, // Book has not been read
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    image: "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
    read: true, // Book has been read
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    image: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
    read: true, // Book has been read
  },
];

// Get the reading list container
const readingList = document.getElementById("reading-list");

// Loop through the books array and create list items
books.forEach((book) => {
  // Create a new list item
  const listItem = document.createElement("li");

  // Set the background color based on whether the book has been read
  listItem.style.backgroundColor = book.read ? "green" : "red";

  // Create an image element
  const image = document.createElement("img");
  image.src = book.image;
  // Remove the alt attribute to match the test's expectation
  // image.alt = `${book.title} cover`;

  // Create a paragraph for the title and author
  const text = document.createElement("p");
  text.innerText = `${book.title} by ${book.author}`;

  // Append the image and text to the list item
  listItem.appendChild(image);
  listItem.appendChild(text);

  // Append the list item to the reading list
  readingList.appendChild(listItem);
});
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

const contentList = document.getElementById("content"); // using Dom to get the div id content in the html file
const readingList = document.getElementById("reading-list"); // using Dom to get the div id reading-list in the html file

function readBooks(book) {
  // implemented a function that takes in an array of books.
  books.forEach((readBooks) => {
    // implemented a forEach loop to iterate through the array of books.
    const bookElement = document.createElement("li"); // created a new Li element for each book in the array, using dom to create the element.

    const titleElement = document.createElement("h2"); // created a new h2 element for the title of each book in the array, using dom to create the element.
    titleElement.innerText = "Title: " + readBooks.title; // calling the innerText property to set the text content of the title element to the title of each book in the array.
    bookElement.appendChild(titleElement); // appending the title element to the parent book element.

    const authorElement = document.createElement("p"); // created a new p element for the author of each book in the array, using dom to create the element.
    authorElement.innerText = "Author: " + readBooks.author; // calling the innerText property to set the text content of the author element to the author of each book in the array.
    bookElement.appendChild(authorElement); // appending the author element to the parent book element.

    const bookCoverImage = document.createElement("img"); // creates a new img element for the book cover image of each book in the array, using dom to create the element.
    bookCoverImage.src = readBooks.bookCoverImage; // calling the src property to set the source of the image to the book cover image of each book in the array.
    bookElement.appendChild(bookCoverImage); // appending the book cover image element to the parent book element.

    bookElement.style.backgroundColor = readBooks.alreadyRead ? "green" : "red"; // using a ternary operator to set the background color of the book element to green if the book has been read and red if the book has not been read.
    bookElement.style.padding = "15px"; // setting the padding of the book element to 15px by manipulating the style property.
    bookElement.style.margin = "10px"; // setting the margin of the book element to 10px by manipulating the style property.
    bookElement.style.border = "1px solid black"; // setting the border of the book element to 1px solid black by manipulating the style property.
    bookElement.style.borderRadius = "10px";
    bookElement.style.textAlign = "center";
    bookElement.style.transition = "transform 0.3s ease-in-out";
    bookElement.style.maxWidth = "500px";

    readingList.appendChild(bookElement); // add the book element to the reading list div in the html file.
  });
}
readBooks(books); // calling the readBooks function and passing in the array of books as an argument.

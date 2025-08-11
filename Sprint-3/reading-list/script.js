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

// 〰️ Function to render the reading list dynamically on the webpage
function renderReadingList(books) {
  // 〰️ Select the DOM element with id 'reading-list' where the list of books will be displayed
  const readingList = document.getElementById("reading-list");

  // 〰️ Iterate over each book in the books array
  books.forEach((book) => {
    // 〰️ Create a list item <li> for each book to represent it in the reading list
    const listItem = document.createElement("li");

    // 〰️ Set the background color of the list item based on whether the book has been read
    // 〰️ If the book is read, set the background color to green, otherwise red
    listItem.style.backgroundColor = book.alreadyRead ? "green" : "red";

    // 〰️ Create a div to contain the book's title and author
    const bookInfo = document.createElement("div");

    // 〰️ Create an <h2> element for the book title
    const bookTitle = document.createElement("h2");

    // 〰️ Create a <p> element for the book author
    const bookAuthor = document.createElement("p");

    // 〰️ Set the text content of the book title to include both title and author information
    bookTitle.innerText = `${book.title} by ${book.author}`;

    // 〰️ Create an <img> element to display the book cover image
    const bookImage = document.createElement("img");
    // 〰️ Set the src attribute of the image to the book's cover image URL
    bookImage.src = book.bookCoverImage;
    // 〰️ Set the alt attribute of the image to a description of the book
    bookImage.alt = `${book.title} by ${book.author} - book cover`;
    
    // 〰️ Append the book title and author information to the bookInfo div
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);

    // 〰️ Append the book cover image and the book information div to the list item <li>
    listItem.appendChild(bookImage);
    listItem.appendChild(bookInfo);

    // 〰️ Append the list item to the readingList element (this will display it on the webpage)
    readingList.appendChild(listItem);
  });
}

// 〰️ Call the renderReadingList function to display the books on the webpage
renderReadingList(books);
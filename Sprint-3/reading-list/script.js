//create a function to display the books in the reading list
function displayBooks() {
  const bookListElement = document.getElementById("reading-list");
  bookListElement.innerHTML = ""; // Clear the existing list

  books.forEach((book) => {
    // Create a single <li> element
    const bookElement = document.createElement("li");
    
    // Set background color based on alreadyRead status
    bookElement.style.backgroundColor = book.alreadyRead ? "lightgreen" : "rgb(245, 43, 43)";
    
    // Add text content (title & author), adding in paragraph makes the text more readable and styling easier
    bookElement.innerHTML = `<p>${book.title}</br> by ${book.author.toUpperCase()}</p>`;

    // Create and configure the image
    const bookElementCover = document.createElement("img");
    bookElementCover.src = book.bookCoverImage;
    bookElementCover.alt = book.title;
    bookElementCover.style.width = "100px"; // Set image size
    bookElementCover.style.marginLeft = "10px"; // Add spacing

    // Append the image inside the <li>
    bookElement.appendChild(bookElementCover);
    
    // Append the <li> to the <ul> 
    bookListElement.appendChild(bookElement);
  });
}



window.onload = displayBooks;

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


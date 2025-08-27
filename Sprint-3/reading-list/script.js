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

// Function to display the reading list
function displayReadingList() {
  const readingList = document.getElementById("reading-list");
  
  // Loop through each book and create list items
  books.forEach(book => {
    // Create list item
    const li = document.createElement("li");
    
    // Set background color based on whether the book has been read
    li.style.backgroundColor = book.alreadyRead ? "green" : "red";
    
    // Create and add the book cover image
    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    li.appendChild(img);
    
    // Create and add the book information
    const bookInfo = document.createElement("div");
    bookInfo.innerHTML = `
      <p>by ${book.author}</p>
      <h2>${book.title}</h2>
    `;
    li.appendChild(bookInfo);
    
    // Add the list item to the reading list
    readingList.appendChild(li);
  });
}

// Call the function when the page loads
window.addEventListener("load", displayReadingList);

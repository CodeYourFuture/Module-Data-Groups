/* first need to create a function which is taking a parameter as a array of books. 
  need to render the list of books. set back ground color based on read or unread.
  need to take the inner content like title ,image and writer name .
 append book to ul list.
 call the function when page load to display book list
*/
function readingList(books){
  const bookList= document.getElementById("reading-list");
  bookList.innerHTML="";// clear list before adding books
  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.classList.add("book-item");
    
    listItem.style.backgroundColor = book.alreadyRead ? "green" : "red"; //set back ground color: Green for read, Red for unread
    // Create book content
    listItem.innerHTML = `
      <div>
        <h3>${book.title}</h3>
        <img src="${book.bookCoverImage}">
        <p>by ${book.author}</p>
      </div>
    `;

    bookList.appendChild(listItem); // Append to the list
  });
}

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

document.addEventListener("DOMContentLoaded", () => readingList(books));


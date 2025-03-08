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
//a function which accept bookObj containing property of books as an array.
function readingList(bookObj){
  for (let i = 0; i < bookObj.length; i++) {
    let bookTitle = bookObj[i].title; //for each iteration store the title in bookTitle
    let bookAuthor = bookObj[i].author; //for each iteration store the author in bookAuthor
    let bookCover = bookObj[i].bookCoverImage; //for each iteration store the url of book cover in bookCover
    let ul = document.getElementById("reading-list"); // get the element from my document with id reading-list and let it be ul
    let li = document.createElement("li"); //then create html element called li with "li" element value
    ul.appendChild(li); //then append the created element li as a child in parent ul
    li.innerHTML = `${bookTitle}${bookAuthor} <img src=${bookCover} alt="cover image">`; // then assign the innerHTML of our li element by the value given after = sign
    bookObj[i].alreadyRead? (li.style.backgroundColor = "blue"): (li.style.backgroundColor = "red");
    // if alreadyread is true assign blue as the background color of li if not red.
  }
}
readingList(books);
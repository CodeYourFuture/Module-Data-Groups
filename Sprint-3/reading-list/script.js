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


//1: get elements
const readingList = document.querySelector("#reading-list");

//2: display LIST OF BOOKS
 books.forEach((book) => {
  let listItem = document.createElement("li")
  listItem.innerHTML = `
  <p> ${book.title}</p> by ${book.author}
  <br>
  <img src="${book.bookCoverImage}" alt= "${book.title} cover" width ="100"> 
  `;
  //if alreadyRead is true set background color to green else to red
  if(book.alreadyRead){
    listItem.style.backgroundColor = "green"
  }else {
    listItem.style.backgroundColor = "red"
  }
  // add each list element
  readingList.appendChild(listItem);

 });








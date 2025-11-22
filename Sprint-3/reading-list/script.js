document.addEventListener("DOMContentLoaded", () => {
  //elements of page to interact with
   for (let book of books){
    const title = book.title;
    const author = book.author;
    const alreadyRead = book.alreadyRead;
    const bookCoverImage = book.bookCoverImage;
    const readingListDom = document.getElementById("reading-list")

    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    if (alreadyRead == true){
      bookDiv.classList.add("alreadyRead");
    }
    let titleDom = document.createElement("p");
    titleDom.innerText = title;
    let authorDom = document.createElement("p");
    authorDom.innerText = author;
    let imageDom = document.createElement("img");
    imageDom.src = bookCoverImage; 


    bookDiv.appendChild(titleDom);
    bookDiv.appendChild(authorDom);
    bookDiv.appendChild(imageDom);

    readingListDom.appendChild(bookDiv);
   }
   
});



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


// for the tests, do not modify this array of books.


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

//
//create <li> elements
//add the content of the objects to the <li>s
    //extract each object from the array
//append the <li>s to the <ul> tag in html    



  function displaybooks(book) {
    const bookTitle = document.createElement("p");
    bookTitle.textContent = book.title;
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    const titleAuthor = document.createElement("p");
    titleAuthor.textContent =
      bookTitle.textContent + " by " + bookAuthor.textContent;

    const image = document.createElement("img");
    image.src = book.bookCoverImage;

    const allTogether = document.createElement("li");
    allTogether.appendChild(titleAuthor);
    allTogether.appendChild(image);

    if (book.alreadyRead === false) {
      allTogether.style.backgroundColor = "red";
    } else {
      allTogether.style.backgroundColor = "green";
    }

    document.querySelector("#reading-list").appendChild(allTogether);
  }

  for (let i = 0; i < books.length; i++) {
    displaybooks(books[i]);
  }


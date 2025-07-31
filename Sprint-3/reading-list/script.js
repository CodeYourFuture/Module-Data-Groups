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

const bookList = document.querySelector("#reading-list");

function readingList(arr) {
  arr.forEach((bookInfo) => {
    const list = document.createElement("li");
    list.classList.add("item");
    const hTitle = document.createElement("h2");
    hTitle.textContent = bookInfo.title;
    const pAuthor = document.createElement("p");
    pAuthor.textContent = `By ${bookInfo.author}`;
    list.appendChild(hTitle);
    list.appendChild(pAuthor);
    bookList.append(list);

    const img = document.createElement("img");
    img.setAttribute("src", bookInfo.bookCoverImage);
    list.append(img);

    if (bookInfo.alreadyRead) {
      list.style.backgroundColor = "green";
    } else {
      list.style.backgroundColor = "red";
    }
  });
}

readingList(books);

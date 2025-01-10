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

const readingList = document.getElementById("content");
function populateBooks(bookArray) {

  bookArray.forEach(item => {

    const listItem = document.createElement("ul");
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const image = document.createElement("img");
    let colour = "red";
    if (item.alreadyRead === true) {
      colour = "green";
    }
    title.textContent = `${item.title} by ${item.author}`;
    image.src = item.bookCoverImage;
    readingList.style.textAlign = "center";
    div.style.background = colour;
    div.style.maxWidth = "500px";
    image.style.width = "200px";
    readingList.appendChild(listItem);
    listItem.appendChild(div);
    div.appendChild(title);
    div.appendChild(image);
  });
}

populateBooks(books);
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

const ulElement = document.getElementById("reading-list");

const colors = ["#f4a261", "#2a9d8f", "#e76f51", "#264653", "#e9c46a"];

let index = 0;

for (let [key, value] of Object.entries(books)) {
  let liElement = document.createElement("li");
  liElement.innerHTML = `<p>${value.title} by ${value.author}</p>
                          <img src="${value.bookCoverImage}" alt="${value.title} cover" style="width:400px">`;
  liElement.style.backgroundColor = colors[index % colors.length];
  index++;

  ulElement.appendChild(liElement);
}

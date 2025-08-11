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

for (i = 0; i < books.length; i++) {
    let container = document.getElementById("reading-list")

    let listItem = document.createElement("li");
    let text = document.createElement("p")
    let image = document.createElement("img")

    let title = books[i].title + " by " + books[i].author
    text.innerHTML = title
    text.style.fontSize = 18

    image.src = books[i].bookCoverImage
    image.width = 125
    image.alt = books[i].title

    listItem.style.marginBottom = 15

    books[i].alreadyRead ? listItem.style.backgroundColor = "green" : listItem.style.backgroundColor = "red"

    listItem.appendChild(text)
    listItem.appendChild(image)

    container.appendChild(listItem)
}






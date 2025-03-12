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

let list = document.querySelector("#reading-list")

for (let element of books){
  let li = document.createElement("li")
  li.innerHTML = `<p>${element.title} by ${element.author}</p> 
  <img src="${element.bookCoverImage}" alt ="${element.title}" width = 150px height = 230px />`

  if(element.alreadyRead){
    li.style.backgroundColor = "green"
  }else{li.style.backgroundColor = "red"}
  list.append(li)
}

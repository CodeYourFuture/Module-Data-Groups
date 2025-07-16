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


//create <li> elements
//add the content of the objects to the <li>s
    //extract each object from the array
//append the <li>s to the <ul> tag in html    



//book1
const book1Title=document.createElement("p")
book1Title.textContent=books[0].title;
const book1Author=document.createElement("p");
book1Author.textContent=books[0].author;
const titleAuthor=book1Title.textContent +" by " + book1Author.textContent;
const image1=document.createElement("img");
image1.innerHTML=books[0].bookCoverImage

const list1 = document.createElement("li");
document.querySelector("#reading-list").appendChild(titleAuthor);


  


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

////////////++++++Creating a function to display our array on the html page++++++++//////////////////


function readingList(listId, arr) {

  const myList = document.getElementById(listId);

  arr.forEach(item => {  // Using fo each to iterate over our array of books

    const li = document.createElement("li");  // creating an li element

    const title = document.createElement('h3') //creating a h3 element for the title and appending it to li
    title.textContent = item.title
    li.appendChild(title)

    const author = document.createElement('p') //creating a p element for the author and appending it to li
    author.textContent = item.author
    li.appendChild(author)

    const bookCoverImage = document.createElement('img') //creating an img element for the book cover and appending it to li
    bookCoverImage.src = item.bookCoverImage
    li.appendChild(bookCoverImage)
    
    const alreadyReadStatus = item.alreadyRead;

    alreadyReadStatus ?  li.style.backgroundColor = 'green' : li.style.backgroundColor = 'red' // adding a set dependent bg-color

    myList.appendChild(li); // adding the li element to the parent ul element
  })

}

readingList("reading-list", books);  // calling readingList 


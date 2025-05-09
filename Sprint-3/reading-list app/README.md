# Reading List

First off, once you've branched off `main`, then update the title element in `index.html` to "Reading list app"

The function **readingList** takes an array of book objects:

```js
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  ...
];
```

Render the list of books on the page. Each book should have a title, author and image and a background colour that is set dependent on whether we have read the book or not.

## 🧭 Strategy

Try and outline your strategy / approach for solving this problem before you get started. There is also a test suite provided to help you meet the acceptance criteria in the issue.

The end result should look something like this

![reading-list](reading-list.png)

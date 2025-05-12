** start of script.js **

const books = [
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "Brave New World", authorName: "Aldous Huxley", releaseYear: 1932 }
];

function sortByYear(firstBook, secondBook) {
  if (firstBook.releaseYear < secondBook.releaseYear) {
    return -1;
  } else if (firstBook.releaseYear > secondBook.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);

console.log("Filtered and Sorted Books:");
console.log(filteredBooks);


** end of script.js **


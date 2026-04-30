
const book1 = new Book("title1", "author1", "genre1");


const myLibrary = [book1, 'book2', 'book3'];

function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

console.log(myLibrary);


//create book array
//store book details
// multiple entries, calling array calls out constructor details
// innerHTML = "title": this.title; "author": this.author; "genre": this.genre 
//
function Status(read){
  this.read = "read";
}



function Book(title, author, genre, id, read) {

    this.title = title;
    this.author = author;
    this.genre = genre;
    this.id = id;
    Status.call(this, read);
    // this.bookInfo = function(){
    //   console.log(this.title, this.author, this.genre);
    // }
}

//samplebooks
const book1 = new Book("title1", "author1", "genre1", "bf6e770bf7f0");
const book2 = new Book("title2", "author2", "genre2", "7ce6556076c7");
const book3 = new Book("title3", "author3", "genre3", "4222c148fb64");
//

let myLibrary = [book1, book2, book3];
let entryBook = [];

Object.setPrototypeOf(Book, Status);
console.log(Object.setPrototypeOf(Book, Status))

Book.prototype.sayStatus = function(){
  return `book is ${this.read}`
}
console.log(book1.sayStatus());




// function addBookToLibrary() {
// }

const UUID = function(){
  return crypto.randomUUID().toString().substring(0, 19);
}


function addBook(bookarray){
//push to array
  for(const item of bookarray){
   
  const bkEntry = document.createElement("div");
  const bkDeets = document.createElement("div")
    bkDeets.id = 'bookDeets'
    const bkHeader = document.createElement("p");
      const bkTitle = document.createTextNode(item.title);
      bkHeader.appendChild(bkTitle);
    const bkAuthor = document.createElement("p");
      const bkAuthTxt = document.createTextNode(item.author);
      bkAuthor.appendChild(bkAuthTxt);
    const bkGenre = document.createElement("p");
      const bkGenTxt = document.createTextNode(item.genre);
      bkGenre.appendChild(bkGenTxt);

    bkDeets.appendChild(bkHeader);
    bkDeets.appendChild(bkAuthor);
    bkDeets.appendChild(bkGenre);


  const bkButton = document.createElement("div")
    bkButton.id = 'bookBtn'
    const bkRead = document.createElement("button");
      bkRead.id = 'read';
      bkRead.value = 'read';
      bkRead.textContent = "read";
      bkRead.addEventListener("click", () => {
         const bkStatus = document.createElement("p");
          const bkSttstext = document.createTextNode(item.read);
          bkStatus.appendChild(bkSttstext);
          bkDeets.appendChild(bkStatus);
        console.log("read");
        bkEntry.style.backgroundColor = "rgba(92, 97, 96, 0.5)";
        bkRead.style.backgroundColor = "rgba(92, 97, 96, 0.5)"
      })
    const bkRemove = document.createElement("button");
      bkRemove.addEventListener("click", () =>{
       console.log("remove")
        bkEntry.remove();
      })
      bkRemove.id = 'remove';
      bkRemove.value = 'remove';
      bkRemove.textContent = " - ";

    bkButton.appendChild(bkRead);
    bkButton.appendChild(bkRemove);

    bkEntry.appendChild(bkDeets);
    bkEntry.appendChild(bkButton);

  bkEntry.classList.add("bookItem");
  document.getElementById("shelf").appendChild(bkEntry)

  }

}

addBook(myLibrary);

//form pop-up//

  const formDesc = document.createElement("h1")
    const formName = document.createTextNode("thisbook");
      formDesc.appendChild(formName);

  const formTitle = document.createElement("label")
    const formLabel = document.createTextNode("booktitle");
      formTitle.setAttribute("for", "title")
      formTitle.appendChild(formLabel);

  const putTitle = document.createElement("input")
      putTitle.type = "text";
      putTitle.placeholder = "book";
      putTitle.name = "title";

const popForm = document.createElement("div")

const poptest = popForm
  .appendChild(formDesc)
  .appendChild(formTitle)
  .appendChild(putTitle);

  poptest.classList.add("bookitem");

const popAdd = document.getElementById("popAdd")
  const inTitle =  document.getElementById("inTitle");
  const inAuthor = document.getElementById("inAuthor");
  const inGenre = document.getElementById("inGenre");
    
function openForm(){
  document.getElementById("addForm").style.display = "block";
   
     inTitle.value = "";
     inAuthor.value = "";
     inGenre.value = ""; 
  
}

function closeForm(){
  event.preventDefault();
  document.getElementById("addForm").style.display = "none";
     
    const titleVal = inTitle.value;
    const authorVal = inAuthor.value;
    const genreVal = inGenre.value;

    const inBook = new Book(titleVal, authorVal, genreVal, UUID());
  
   entryBook.push(inBook);

  addBook(entryBook)


  console.log("array", myLibrary);
  console.log("array2",  entryBook);

}

popAdd.addEventListener("mouseup", () => {

  entryBook = [];
  console.log("array2", entryBook);
  console.log("clicklift")
})


//function for appending only new array

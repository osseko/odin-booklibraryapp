
const book1 = new Book("title1", "author1", "genre1", "bf6e770bf7f0");
const book2 = new Book("title2", "author2", "genre2", "7ce6556076c7")
const book3 = new Book("title3", "author3", "genre3", "4222c148fb64")
const book4 = new Book("asdf", "bsadf", "dfaine", "3127ca5cb6db")

const myLibrary = [book1, book2, book3, book4];
//let uuid = crypto.randomUUID();

// console.log(myLibrary);

function uniqueId(id){
  return crypto.randomUUID();
}

// console.log("uuid",uniqueId());

function Book(title, author, genre, id) {

    this.title = title;
    this.author = author;
    this.genre = genre;
    this.id = id;

    this.bookInfo = function(){
      console.log(this.title, this.author, this.genre);
    }
    // this.uniqueId = function(){
    //   return crypto.randomUUID();
    // }
    // the constructor...
}

book3.bookInfo();
// function addBookToLibrary() {
// }

function addBook(bookarray){
//push to array
  for(const item of bookarray){
   
  const bkEntry = document.createElement("div");
    const bkHeader = document.createElement("p");
      const bkTitle = document.createTextNode(item.title);
      bkHeader.appendChild(bkTitle);
    const bkAuthor = document.createElement("p");
      const bkAuthTxt = document.createTextNode(item.author);
      bkAuthor.appendChild(bkAuthTxt);
    const bkGenre = document.createElement("p");
      const bkGenTxt = document.createTextNode(item.genre);
      bkGenre.appendChild(bkGenTxt);
    // const bkUID = document.createElement("p");
    //   const UUID = document.createTextNode("UUID");
    //   bkUID.append("UUID");

    bkEntry.appendChild(bkHeader);
    bkEntry.appendChild(bkAuthor);
    bkEntry.appendChild(bkGenre);
    // bkEntry.appendChild(bkUID);


  bkEntry.classList.add("bookItem");
  document.getElementById("shelf").appendChild(bkEntry)

    // console.log("item", item);
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

console.log("pop", poptest);

function openForm(){
  document.getElementById("addForm").style.display = "block";

}

function closeForm(){
  event.preventDefault();
  document.getElementById("addForm").style.display = "none";
  // adds info to array
     
  const popAdd = document.getElementById("popAdd")
    const inTitle =  document.getElementById("inTitle").value;
    const inAuthor = document.getElementById("inAuthor").value;
    const inGenre = document.getElementById("inGenre").value;


    const book5 = new Book("abc", "123", "444");
  myLibrary.push(book5);
  console.log("array", myLibrary);
}

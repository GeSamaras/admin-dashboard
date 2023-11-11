// book object

const myLibrary = [];
let display = document.getElementsByClassName("display");

function Book(title, author, pages, read) {
    // the constructor...
    console.log("Book constructor called");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function(){
        if (read == true) {
            return "Read";
        } else {
            return "Not Read";
        }
    };
}


//Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.


function addBookToLibrary() {
    // display book objects on page
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let title = book.title;
        let author = book.author;
        let pages = book.pages;
        let read = book.read;
        let bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        bookCard.innerHTML = `
            <div class="bookTitle">${title}</div>
            <div class="bookAuthor">${author}</div>
            <div class="bookPages">${pages}</div>
            <div class="bookRead">${read}</div>
        `;
        display[0].appendChild(bookCard);
    }
}

addBookToLibrary();

// user-made object example
const book1 = new Book(
    "The Hobbit",
    "J.R.R. Tolkien", 
    295, 
    true
);


// object.create
//const book2 = Object.create(Book);
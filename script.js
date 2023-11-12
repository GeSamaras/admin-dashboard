// the array that is going to hold all the book
// objects, which will be looped through to display
const myLibrary = [];


// building the object constructor for the books
function Book(title, author, pages, read) {
    // the constructor...
    console.log("Book constructor called");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}


function toggleRead() {
    myLibrary[index].toggleRead();
    displayBooks()
}


//Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.


// function that will be called whenever "submit" is called,
// rendering and creating all the html for the book blocks
function displayBooks() {
    let libraryBook = document.querySelector(".cards")
    libraryBook.innerHTML = ""; //this is to make sure the books' blocks don't get duplicated after every submit
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCard = document.createElement("div");
        bookCard.innerHTML = `
            <div class="card-header">
                <h3 class="bookTitle">${book.title}</h3>
                <h5 class="author">by ${book.author}</h5>
            </div>
            <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not read"}</p>
                <button class="remove-button" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read-button" onclick="toggleRead(${i})">Toggle</button>
            </div>              
                `
        libraryBook.appendChild(bookCard); // appending .card-blocks to .cards
    }
}


function addBookToLibrary() {
    let title = document.querySelector("#title").value; 
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);    
    displayBooks();
}


let newBookButton = document.querySelector("#add-book");
    newBookButton.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
});

document.querySelector("#new-book-form").addEventListener("click", function(event) {
    event.preventDefault();
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "none";
    addBookToLibrary();
});

function displayBooks() {
    let libraryBook = document.querySelector(".card-blocks");
    libraryBook.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCard = document.createElement("div");
        bookCard.innerHTML = `<p>${book.title}</p>`;
        libraryBook.appendChild(bookCard);
    }
};


function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}
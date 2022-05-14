let myLibrary = [];
let cardNumber = 0;

// Implement a constructor function of a book
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        let infoString = `${this.name} by ${this.author}, ${pages} pages, ${read}.`;
        return infoString;
    };
}

// Create a book and push it to the myLibrary array
function addBookToLibrary(name, author, pages, read) {
    let book = new Book();
    book.name = name;
    book.author = author;
    book.pages = pages;
    book.read = read;
    myLibrary.push(book);
}

// Create a book card and put it in the library grid
function createBookCard(book) {
    const bookCard = document.createElement('div');
    cardNumber += 1;
    bookCard.classList.add('card');
    bookCard.classList.add(`${cardNumber}`);

    let bookTitle = document.createElement('h2');
    bookTitle.textContent = book.name;
    bookCard.appendChild(bookTitle);

    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;
    bookCard.appendChild(bookAuthor);

    let bookPages = document.createElement('p');
    bookPages.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(bookPages);

    let bookReaded = document.createElement('p');
    (book.read) ? bookReaded.textContent = "Readed" : bookReaded.textContent = "Not Readed";
    (book.read) ? bookReaded.classList.add('readed') : bookReaded.classList.add('unreaded');
    
    bookCard.appendChild(bookReaded);
    
    let deleteBook = document.createElement('button');
    deleteBook.classList.add('close');
    deleteBook.innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
  </svg>`;
    deleteBook.addEventListener('click', () => {
        myLibrary.splice(deleteBook.parentElement.className, 1);
        library.removeChild(deleteBook.parentElement);
    });
    bookCard.appendChild(deleteBook);
    
    library.appendChild(bookCard);
}

// Create a book card for every book in the myLibrary array
function showLibrary(myLibrary) {

    // Remove all books of the library
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    
    // Add all books to the library
    myLibrary.forEach(book => {
        createBookCard(book);
    });
    
    toggleModal();
}

// NEW BOOK BUTTON
const newBookButton = document.querySelector('.new-book--button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.close');
const overlay = document.querySelector('#overlay');
const library = document.querySelector('.library');
const formProps = document.forms[0];

// MODAL
function toggleModal() {
    modal.classList.toggle('active');
    overlay.classList.toggle('active');
}

overlay.addEventListener('click', () => toggleModal());
newBookButton.addEventListener('click', () => toggleModal());
modalCloseButton.addEventListener('click', () => toggleModal());

// Handle the form data, adding a book to the library
function handleSubmit(e) {
    e.preventDefault();
    addBookToLibrary(formProps.name.value, formProps.author.value, formProps.pages.value, formProps.read.checked);
    showLibrary(myLibrary);
}
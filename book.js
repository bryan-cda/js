//Create a object with attributes and function
const book = {
    title: 'The Clean Code',
    author: 'Robert C. Martin',
    releaseYear: 2008,
    totalPages: 464,
    bookChapters:{
        chapterOne: 'Fundamentals',
        chapterTwo: 'Variables'
    },
    printing: function() {
        console.log(this);
    }
}

book.printing();

//Create a book factory
function createBookFactory(title, author, releaseYear){
    const book = {
        title: title,
        author: author,
        releaseYear: releaseYear,
    }

    return book;    
}

const freudUnconscious = createBookFactory('Unconscious', 'Freud', '1982');
const freudDreams = createBookFactory('Dreams', 'Freud', '1983');

//Add new attributes dynamically
freudUnconscious.totalPages = 484;

function createBookConstructor(title, author, releaseYear){
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear
}

const cleanCoder = new createBookConstructor('The Clean Coder', 'Robert C. Martin', 2010);
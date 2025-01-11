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
function createBook(title, author, releaseYear){
    const book = {
        title: title,
        author: author,
        releaseYear: releaseYear,
    }

    return book;    
}

const freud = createBook('Unconscious', 'Freud', '1982');
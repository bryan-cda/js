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
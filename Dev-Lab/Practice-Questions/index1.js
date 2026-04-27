let books = [
  { title: "Harry Potter", genre: "Fantasy", isAvailable: true },
  { title: "Rich Dad Poor Dad", genre: "Finance", isAvailable: false },
  { title: "Atomic Habits", genre: "Self Help", isAvailable: true },
  { title: "The Hobbit", genre: "Fantasy", isAvailable: false }
];

function getAvailableBooks(){
    return books.filter(s=>s.isAvailable===true);
}

function getBooksByGenre(genre){
    let genres = books.filter(s=>s.genre)
}
let library = [
  { title: "Book1", isAvailable: true },
  { title: "Book2", isAvailable: false },
];

function addBook(title) {
  library.push({ title, isAvailable: true });
}

function borrowBook(title) {
  let search = library.find((s) => s.title === title);
  if (search) {
    if (search.isAvailable) {
      search.isAvailable = false;
    } else {
      return "Book already Borrowed";
    }
  }else{
    return("Book not found.")
  }
}

function returnBook(title) {
    let search = library.find((s) => s.title === title);
    if(search){
        search.isAvailable = true;
    }else{
        return("Book not found.")
    }
}

function getAvailableBooks(){
    return (library.filter(s=>s.isAvailable===true));
}

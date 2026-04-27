import { useState } from 'react'

function App(){
  const movies = ["Inception", "Interstellar", "The Dark Knight","Avatar", "Titanic", "Iron Man","The Avengers", "Spider-Man", "Batman Begins"];

  const[query, setQuery] = useState("");
  const filteredMovies = movies.filter(movie=>movie.toLowerCase().includes(query.toLowerCase()));

  let content ;
  if(filteredMovies.length===0){
    content = "No movies found"
  }else{
    content = (
    <ul>
      {filteredMovies.map(movie=>(
        <li>{movie}</li>
      ))}
    </ul>
    )
  }

  return(
    <div>
      <p>Movie Checker</p>
      <input
      type = "text"
      value = {query}
      onChange={(e)=>setQuery(e.target.value)}
      placeholder = "Search Movies..."
      />
      {content}
    </div>
  );
}

export default App;
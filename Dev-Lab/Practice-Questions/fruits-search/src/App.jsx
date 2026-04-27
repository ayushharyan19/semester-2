import {useState} from "react";

function App(){
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  const [query, setQuery] = useState("");
  const filteredFruits = fruits.filter((fruit)=>
  fruit.toLowerCase().includes(query.toLowerCase()));

  let content;
  
  if(filteredFruits.length===0){
    content = <p>Fruit not found.</p>
  }else{
    content = (
      <ul>
        {filteredFruits.map((name)=>(
          <li>{name}</li>
        ))}
      </ul>
    );
  }

  return(
    <div>
    <p>Search Fruits</p>
    <input
    type = "text"
    value = {query}
    onChange={(e)=> setQuery(e.target.value)}
    placeholder="Search... 💋"
    />
    {content}
    </div>
  )
}

export default App;
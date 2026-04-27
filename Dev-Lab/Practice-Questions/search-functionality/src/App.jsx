import {useState} from "react";

function App(){
  const names = ["Priya", "Rahul", "Ankit", "Rohan", "Sneha", "Aman", "Kunal", "Neha", "Amit", "Raj"];
  const [query, setQuery] = useState("");
  const filteredNames = names.filter((name)=>
  name.toLowerCase().includes(query.toLowerCase()));

  let content;
  if(filteredNames.length===0){
    content = <p>Name not found</p>;
  }else{
    content = (
      <ul>
        {filteredNames.map((name)=>(
          <li>{name}</li>
        ))}
      </ul>
    );
  }

  return(
    <div>
      <p>Search Names</p>
      <input
      type = "text"
      value = {query}
      onChange ={(e)=> setQuery(e.target.value)}
      placeholder="Search... 👅"
      />
      {content}
    </div>
  )
}

export default App;
import { useState } from "react";

function App(){
    const names = ["Mitali", "Rahul", "Ankit", "Priya", "Rohan", "Sneha", "Aman", "Kunal"];
    const[query, setQuery] = useState("");

    const filteredNames = names.filter((name)=>
        name.toLowerCase().includes(query.toLowerCase())
    );

    let content;

    if(filteredNames.length===0){
        content = <p>No results found.</p>
    }else{
        content = (
            <ul>
                {filteredNames.map((name)=>(
                    <li key={name}>{name}</li>
                ))}
            </ul>
        );
    }

    return(
        <div>
            <p>Dynamic Searching</p>
            <input
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search..."
            />
            {content}
        </div>
    )
}

export default App;
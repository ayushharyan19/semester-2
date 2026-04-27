import { useState, useEffect } from 'react'

function App(){
const takenUsernames = ["admin", "user", "test", "rahul", "priya"];

const [username, setUsername] = useState("");
const [loading, setLoading] = useState(false);
const [result, setResult] = useState("");

useEffect(()=>{
  if(username === ""){
    setLoading(false);
    setResult("");
    return;
  }

  setLoading(true);
  setResult("");

  const timer = setTimeout(()=>{
    setLoading(false);
    if (takenUsernames.includes(username.toLowerCase())){
      setResult("Not Available ❌")
    }else{
      setResult("Available ✅")
    }
  },1500);
  return()=> clearTimeout(timer);
}, [username]);

return(
  <div>
    <p>Username Checker</p>
    <input
    type = "text"
    value = {username}
    onChange={(e)=>setUsername(e.target.value)}
    placeholder='Enter Username'
    />
    {loading && <p>Checking...</p>}
    {result && <p>{result}</p>}
  </div>
);
}

export default App;
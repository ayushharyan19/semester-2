import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <h2>Counter App</h2>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
import {useState} from "react";
import TemperatureStatus from "./components/TemperatureStatus";

function App() {
  const [temp, setTemp] = useState("");

  return (
    <div>
      <h2>Temperature Checker</h2>
      <input
      type = "number"
      value = {temp}
      onChange= {(e)=>setTemp(e.target.value)}
      placeholder = "Enter Temperature"
      />
      <TemperatureStatus temperature={temp}/>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import TemperatureStatus from "./child";

function Parent(){
    const [temperature, setTemperature] = useState("");

    return (
        <div>
            <h1>
                Temperature Checker
            </h1>
            <input
                type = "text"
                placeholder = "Enter Temperature"
                value = {temperature}
                onChange={(e) => setTemperature(e.target.value)}
            />
            <TemperatureStatus temperature = {temperature}/>
        </div>
    );
}
export default Parent;
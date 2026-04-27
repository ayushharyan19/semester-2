
function TemperatureStatus({temperature}){
    if(temperature===""||isNaN(temperature)){
        return <p>Please enter a valid number.</p>
    }

    if(Number(temperature)>35){
        return <p>Status: 🔥 Hot</p>
    }
    else{
        return <p>Status: 🌤️ Normal</p>
    }
}

export default TemperatureStatus;
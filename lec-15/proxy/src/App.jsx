import React, { useState } from 'react'
import './App.css'

const StateandEvents = () => {

    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className="container">
            <h2>Enter text here</h2>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
            ></textarea>
        </div>
    )
}

export default StateandEvents
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    if (name.trim() === "") {
      setNameError("Name cannot be empty");
      isValid = false;
    } else {
      setNameError("");
    }

    // Email validation
    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
      isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Email must contain @ and .");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      console.log("Form submitted!", { name, email });
    }
  }

  return (
    <div>
      <h1>Form Validation</h1>

      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p style={{ color: "red" }}>{nameError}</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
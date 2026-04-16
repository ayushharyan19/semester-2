import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const handlelogin = () => {
    setIsLoggedIn(true);
    alert("USer Logged In");
    navigate("/");
  }
  return (
    <>
      <div>Login Page</div>
      <button onClick={handlelogin}>Login</button>
    </>
  )
}

export default Login
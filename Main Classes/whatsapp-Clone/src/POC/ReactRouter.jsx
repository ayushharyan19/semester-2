import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";

const ReactRouting = () => {
    const[isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (<>
    <Routes>
        {/* all routes should be listed here */}
        <Route path="/" element={<ProtectedRoute isLoggedIn = {isLoggedIn} />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

function ProtectedRoute(props){
    const userLoggedIn = props.isLoggedIn;
    if(userLoggedIn){
        return <Home />
    }else{
        return <Navigate to="/login" />
    }
}
export default ReactRouting
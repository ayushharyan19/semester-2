import React from 'react'
import log from './login'
import { useState } from 'react'

const reactrouter  = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <div>reactrouter</div>
    <Routes>
      <Route path="/" element={<protectedroute isLoggedIn={isLoggedIn} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default chat
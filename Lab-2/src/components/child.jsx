import React, { useEffect } from "react";

function Child() {
  useEffect(() => {
    console.log("Mounted");
    
    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <h2>Visible</h2>;
}

export default Child;
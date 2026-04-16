import React, { useState } from "react";
import Child from "./child";

function Parent() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>

      {show && <Child />}
    </div>
  );
}

export default Parent;
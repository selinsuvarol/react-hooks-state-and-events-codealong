import React from "react";
import { useState } from "react";
function Toggle() {
  const [isToggled, setIsToggled] = useState(false);
  return (<button
  onClick={()=>setIsToggled(!isToggled)}>{isToggled?"ON":"OFF"}</button>);
}

export default Toggle;

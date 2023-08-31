import { useState } from "react";

function Button({ outlined, children, func }) {
  return (
    <button onClick={func} className={`btn ${outlined ? "outlined" : ""}`}>
      {children}
    </button>
  );
}

export default Button;

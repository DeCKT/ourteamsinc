import { useState } from "react";

function Button({ outlined, children }) {
  return (
    <button className={`btn ${outlined ? "outlined" : ""}`}>{children}</button>
  );
}

export default Button;

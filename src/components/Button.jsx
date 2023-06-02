import { useState } from "react";

function Button({ text, outlined }) {
  return (
    <button className={`btn ${outlined ? "outlined" : ""}`}>{text}</button>
  );
}

export default Button;

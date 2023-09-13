import { useEffect, useState } from "react";

export default function Image(props) {
  const [image, setImage] = useState("");
  return <img src={props.img} className="img-third"></img>;
}
